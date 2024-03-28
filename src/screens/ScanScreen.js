import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Image import
import Add from "../../assets/Add Circle.svg";
import BorderScan from "../../assets/borderScan.svg";
import Arrow from "../../assets/arrow.svg";


export default function ScanScreen() {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
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

  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);

    if (data) {
      navigation.navigate("Scan Tiket Masuk", { scanData: data });
    } else {
      console.log("Barcode scan failed. No data detected.");
    }
  };

  const navigation = useNavigation();
  const handleTambahManualPress = () => {
    navigation.navigate("Pilih tiket");
  };

  const handleBack = () => {
    navigation.navigate("home");
  };
  return (
    <>
        <View style={{  flexDirection: "row", alignItems: "center", paddingTop: 50, paddingBottom: 25, paddingHorizontal: 20, backgroundColor: 'white'}} >
          <TouchableOpacity onPress={handleBack}><Arrow /></TouchableOpacity>
          <Text style={{  textAlign: "center", flex: 1, fontSize: 16, fontWeight: 'bold' }}>Scan Tiket</Text>
        </View>
      <View style={styles.container}>
        <BarCodeScanner
          style={styles.camera}
          onBarCodeScanned={handleBarCodeScanned}
        />
        <BorderScan style={styles.borderScan}/>
        <TouchableOpacity
          style={styles.button}
          onPress={handleTambahManualPress}
        >
          <Add />
          <Text style={styles.text}>TAMBAH MANUAL</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#269544",
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    position: "absolute",
    bottom: 150,
    right: 13,
    left: 13,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  container: {
    flex: 1,
    position: "relative",
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
    position: "relative",
  },
  borderScan: {
    position: 'absolute',
    top: '20%',
    left: '11%',
    right: '11%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  }
});
