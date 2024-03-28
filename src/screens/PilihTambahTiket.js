import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

// Image import
import TiketMasuk from "../../assets/Ticket-masuk.svg";
import TiketKeluar from "../../assets/Ticket-keluar.svg";
import Arrow from "../../assets/arrow.svg";

export default function PilihTambahTiket() {
  const navigation = useNavigation();

  const handleMasukPress = () => {
    navigation.navigate("Tiket Manual Masuk");
  };
  const handleKeluarPress = () => {
    navigation.navigate("Tiket Manual Keluar");
  };
  const handleBack = () => {
    navigation.navigate("Scan Screen");
  };
  return (
    <>
      <StatusBar style="auto" />
      <View style={{flexDirection: "row", alignItems: "center", paddingTop: 50, paddingBottom: 25, paddingHorizontal: 20, backgroundColor: 'white' }} >
          <TouchableOpacity onPress={handleBack}><Arrow /></TouchableOpacity>
          <Text style={{  textAlign: "center", flex: 1, fontSize: 16, fontWeight: 'bold' }}>Tambah Tiket Manual</Text>
        </View>
     
      <View style={styles.container}>
        <View>
        <TouchableOpacity onPress={handleMasukPress}>
          <TiketMasuk  />
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={handleKeluarPress}>
        <TiketKeluar  />
          </TouchableOpacity>
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 250,
    paddingBottom: 250,
    // paddingRight: 20,
    // paddingLeft: 20,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});
