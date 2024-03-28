import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

// Image import
import Cam from "../../assets/Camera_light.svg";
import Arrow from "../../assets/arrow.svg";
import JamMasuk from "../../assets/jam-masuk.svg";
import JamPelaksanaan from "../../assets/jam-pelaksanaan.svg";

//Take photo
import { StatusBar } from "expo-status-bar";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function TiketManualMasuk() {
  const navigation = useNavigation();

  const handleDonePress = () => {
    navigation.navigate("Done");
  };
  const handleBack = () => {
    navigation.navigate("Pilih tiket");
  };

  // Take photo
  // State menyimpan foto dari card 1
  const [capturedPhoto1, setCapturedPhoto1] = useState(null);
  // State menyimpan foto dari card 2
  const [capturedPhoto2, setCapturedPhoto2] = useState(null);

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();

  // state menentukan kamera dibuka atau tidak
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  // Fungsi untuk menutup kamera
  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  const openCamera1 = () => {
    setIsCameraOpen("card1"); // kamera dibuka dari card 1
  };

  const openCamera2 = () => {
    setIsCameraOpen("card2"); // kamera dibuka dari card 2
  };

  let takePic = async () => {
    let options = {
      quality: 0.5,
      base64: true,
      exif: false,
    };

    try {
      let newPhoto = await cameraRef.current.takePictureAsync(options);

      // Jika kamera dibuka dari card 1, maka foto disimpan di state untuk card 1
      if (isCameraOpen === "card1") {
        setCapturedPhoto1(newPhoto);
      }
      // Jika kamera dibuka dari card 2, maka foto disimpan di state untuk card 2
      else if (isCameraOpen === "card2") {
        setCapturedPhoto2(newPhoto);
      }

      // Tutup kamera setelah foto diambil
      setIsCameraOpen(false);
    } catch (error) {
      console.log("Error taking picture: ", error);
    }
  };

  return (
    <>
      <StatusBar style="auto" />
      <ScrollView>
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 50,
            paddingBottom: 25,
            paddingHorizontal: 20,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity onPress={handleBack}>
            <Arrow />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              flex: 1,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Tambah Tiket Manual
          </Text>
        </View>
        <View style={styles.container}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.text}>Event</Text>
            <TextInput
              style={styles.input}
              placeholder="Pilih Event"
              label=""
            ></TextInput>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.text}>Jam Pelaksanaan</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <TextInput
                style={styles.input}
                placeholder="--.-- WIB"
                label=""
              ></TextInput>
              <JamPelaksanaan width={25} height={25} />
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.text}>Jam Masuk</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <TextInput
                style={styles.input}
                placeholder="--.-- WIB"
                label=""
              ></TextInput>
              <JamMasuk width={25} height={25} />
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.text}>Nomor Polisi</Text>
            <TextInput
              style={[styles.input, { backgroundColor: "white" }]}
              placeholder="Masukkan Nomor Polisi"
              label=""
            ></TextInput>
          </View>

          <Text style={styles.text}>Foto Kendaraan dan Pengendara</Text>
          <View style={styles.containerCard}>
            {/* Card 1 */}
            <TouchableOpacity style={{ width: "47%" }} onPress={openCamera1}>
              <View
                style={[
                  styles.card,
                  { backgroundColor: "#D0E6DA", borderColor: "#269544" },
                ]}
              >
                {/* Tampilkan foto yang diambil jika ada */}
                {capturedPhoto1 && (
                  <Image
                    style={styles.photo}
                    source={{ uri: capturedPhoto1.uri }}
                  />
                )}
                {/* Tampilkan pesan jika belum ada foto yang diambil */}
                {!capturedPhoto1 && (
                  <>
                    <Cam width={35} height={35} />
                    <Text style={{ textAlign: "center", color: "#269544" }}>
                      Ambil foto kendaraan
                    </Text>
                  </>
                )}
              </View>
            </TouchableOpacity>

            {/* Card 2 */}
            <TouchableOpacity style={{ width: "47%" }} onPress={openCamera2}>
              <View
                style={[
                  styles.card,
                  { backgroundColor: "#D0E6DA", borderColor: "#269544" },
                ]}
              >
                {/* Tampilkan foto yang diambil jika ada */}
                {capturedPhoto2 && (
                  <Image
                    style={styles.photo}
                    source={{ uri: capturedPhoto2.uri }}
                  />
                )}
                {!capturedPhoto2 && (
                  <>
                    <Cam width={35} height={35} />
                    <Text style={{ textAlign: "center", color: "#269544" }}>
                      Ambil foto kendaraan
                    </Text>
                  </>
                )}
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleDonePress}>
            <Text style={{ color: "white", margin: 0, fontWeight: "600" }}>
              Kirim
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {isCameraOpen && (
        <Camera style={styles.camera} ref={cameraRef}>
          <View style={styles.buttonContainer}></View>
          <TouchableOpacity
            style={styles.pressCamera}
            title=""
            onPress={takePic}
          />
          <TouchableOpacity style={styles.outCamera} onPress={closeCamera}>
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </Camera>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  container: {
    paddingTop: 20,
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
    flex: 1,
    gap: 15,
  },
  text: {
    fontWeight: "600",
    marginBottom: 10,
  },
  containerCard: {
    flex: 1,
    backgroundColor: "#F0F2F5",
    flexDirection: "row",
    display: "flex",
    gap: 10,
    justifyContent: "space-between",
  },
  card: {
    height: 250,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#269544",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    width: "auto",
    marginTop: 30,
  },
  camera: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  pressCamera: {
    width: 70,
    height: 70,
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    bottom: 30,
    left: "50%",
    marginLeft: -25,
    borderColor: "white",
    borderWidth: 5,
  },
  outCamera: {
    position: "absolute",
    right: 15,
    top: 5,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  },
  photo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    objectFit: "cover",
    borderRadius: 10,
  },
});
