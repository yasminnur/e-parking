import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function PilihTambahTiket() {
  const navigation = useNavigation();

  const handleMasukPress = () => {
    navigation.navigate("Tiket Manual Masuk");
  };
  const handleKeluarPress = () => {
    navigation.navigate("Tiket Manual Keluar");
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.masuk} onPress={handleMasukPress}>
          <Text style={styles.text}>Tiket Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keluar} onPress={handleKeluarPress}>
          <Text style={styles.text}>Tiket Keluar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  masuk: {
    padding: 15,
    backgroundColor: "green",
  },
  keluar: {
    padding: 15,
    backgroundColor: "red",
  },
  text: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});
