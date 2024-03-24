import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Image import
import Add from "../../assets/Add Circle.svg";

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();

  useEffect(() => {
    (async() => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({type, data}) => {
    setScanData(data);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);

    navigation.navigate("Scan Tiket Masuk", { scanData: data });
  };


  const navigation = useNavigation();
  const handleTambahManualPress = () => {
    navigation.navigate("Tambah Tiket Manual"); // Mengarahkan ke halaman PilihTiket
  };

  return (
    <>
      <View style={styles.container}>
      <BarCodeScanner 
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        />
      {/* {scanData && <Button title='Scan Again?' onPress={() => setScanData(undefined)} />} */}
      <StatusBar style="auto" />
        <TouchableOpacity
          style={styles.button}
          onPress={handleTambahManualPress}
        >
          <Add />
          <Text style={styles.text}>TAMBAH MANUAL</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    position: "absolute",
    bottom: 50,
    right: 13,
    left: 13,
    width: "auto",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
    position: "relative",
  },
});
