import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// Image import
import Done from "../../assets/Verified Check.svg";

export default function MasukDone() {
  const navigation = useNavigation();

  const handleDonePress = () => {
    navigation.navigate("navbar", {
      screen: "Home",
      params: {
        onGoBack: () => navigation.navigate("navbar"),
      },
    });
  };
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 50,
          paddingBottom: 25,
          paddingHorizontal: 20,
          backgroundColor: "#269544",
          borderBottomWidth: 0.8,
          borderBottomColor: "#C9C9C9",
          shadowColor: "red",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 3.84,
        }}
      >
       
        <Text
          style={{
            textAlign: "center",
            flex: 1,
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Scan Tiket
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Done width={100} height={100} />
          <Text style={styles.text}>Data tiket telah berhasil disimpan</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleDonePress}>
          <Text style={{ color: "#269544", fontWeight: 'bold' }}>KEMBALI KE BERANDA</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#269544",
    alignItems: "center",
    paddingBottom: 20,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    marginTop: 15,
    color: "white",
    fontSize: 16,
  },
  button: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    width: "100%",
    bottom: 30,
  },
});
