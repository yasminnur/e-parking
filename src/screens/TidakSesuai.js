import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

export default function TidakSesuai() {
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Nomor Polisi</Text>
          <TextInput
            style={[styles.input, { backgroundColor: "white" }]}
            placeholder="Masukkan Nomor Polisi"
            label=""
          ></TextInput>
          <View>
            <Text style={styles.text}>Foto Kendaraan dan Pengendara</Text>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginBottom: 20,
                padding: 10,
                backgroundColor: 'white'
              }}
            >
              {/* card1 */}
              <View
                style={[
                  styles.card,
                  { borderColor: "#269544" },
                ]}
              >
                <Text style={{ textAlign: "center" }}>
                Ambil foto pengambil
                </Text>
              </View>
              {/* card2 */}
              <View
                style={[
                  styles.card,
                  { borderColor: "#269544" },
                ]}
              >
                <Text style={{ textAlign: "center" }}>
                Ambil foto Scan KTP
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={{ color: "white" }}>Kirim</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#F0F2F5",
    overflow: "scroll",
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    paddingVertikal: 12,
    borderWidth: 1,
    borderColor: "#F0F2F4",
    borderRadius: 12,
    outlineStyle: "none",
  },
  text: {
    fontWeight: "600",
    marginBottom: 5,
  },
  // card: {
  //   height: 500,
  //   flex: 1,
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   padding: 10,
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center'
  // },
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
