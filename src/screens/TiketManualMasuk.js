import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// Image import
import Camera from "../../assets/Camera_light.svg";

// Take a photo
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
// import { shareAsync } from 'expo-sharing';
// import * as MediaLibrary from 'expo-media-library';

export default function TiketManualMasuk() {
  const navigation = useNavigation();

  const handleDonePress = () => {
    navigation.navigate("Masuk Done");
  };
  

  // Take a photo
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
      <Button title="Share" onPress={sharePic} />
      {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
      <Button title="Discard" onPress={() => setPhoto(undefined)} />
    </SafeAreaView>
  );

return (
  <Camera style={styles.container} ref={cameraRef}>
    <View style={styles.buttonContainer}>
      <Button title="Take Pic" onPress={takePic} />
    </View>
    <StatusBar style="auto" />
  </Camera>
);

  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={style.text}>Event</Text>
        <TextInput
          style={style.input}
          placeholder="Pilih Event"
          label=""
        ></TextInput>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={style.text}>Jam Pelaksanaan</Text>
        <TextInput
          style={style.input}
          placeholder="--.-- WIB"
          label=""
        ></TextInput>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={style.text}>Jam Masuk</Text>
        <TextInput
          style={style.input}
          placeholder="--.-- WIB"
          label=""
        ></TextInput>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={style.text}>Nomor Polisi</Text>
        <TextInput
          style={[style.input, { backgroundColor: "white" }]}
          placeholder="Masukkan Nomor Polisi"
          label=""
        ></TextInput>
      </View>
      <View>
        <Text style={style.text}>Foto Kendaraan dan Pengendara</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginBottom: 20,
          }}
        >
          {/* card1 */}
          <View
            style={[
              style.card,
              { backgroundColor: "#D0E6DA", borderColor: "#269544" },
            ]}
          >
            <Camera width={35} height={35} />
            <Text style={{ textAlign: "center", color: "#269544"  }}>Ambil foto kendaraan</Text>
          </View>
          {/* card2 */}
          <View
            style={[
              style.card,
              { backgroundColor: "#D0E6DA", borderColor: "#269544" },
            ]}
          >
            <Camera width={35} height={35} />
            <Text style={{ textAlign: "center", color: "#269544" }}>Ambil foto kendaraan</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={style.button} onPress={handleDonePress}>
        <Text style={[style.text, { color: "white" }]}>Kirim</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#F0F2F5",
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#F0F2F4",
    borderRadius: 12,
    outlineStyle: "none",
  },
  text: {
    fontWeight: "600",
    marginBottom: 5,
  },
  card: {
    height: 250,
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    width: "auto",
    marginTop: 50,
  },
});
