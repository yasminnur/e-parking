import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import React from "react";
// import {  } from 'react-native-gesture-handler'
import Input from "./input";
import { useNavigation } from '@react-navigation/native';

export default function ScanTiketKeluar() {
  const navigation = useNavigation();

  const handleSesuaiPress = () => {
    navigation.navigate('Masuk Done'); // Mengarahkan ke halaman PilihTiket
  };
  const handleTidakSesuaiPress = () => {
    navigation.navigate('Tidak Sesuai'); // Mengarahkan ke halaman PilihTiket
  };
  return (
    <>
        <ScrollView contentContainerStyle={style.container}>
      <View style={style.container}>
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
            style={[style.input, {}]}
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
              <Text style={{ textAlign: "center" }}>Ambil foto kendaraan</Text>
            </View>
            {/* card2 */}
            <View
              style={[
                style.card,
                { backgroundColor: "#D0E6DA", borderColor: "#269544" },
              ]}
            >
              <Text style={{ textAlign: "center" }}>Ambil foto kendaraan</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={style.button} onPress={handleSesuaiPress}>
          <Text style={[style.text, { color: 'white', backgroundColor: 'green' }]}>Sesuai</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={handleTidakSesuaiPress}>
          <Text style={[style.text, { color: 'white', backgroundColor: 'red' }]}>Tidak Sesuai</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#F0F2F5",
  },
  // container: {
  //   paddingTop: 40,
  //   paddingBottom: 40,
  //   paddingRight: 20,
  //   paddingLeft: 20,
  //   backgroundColor: "#F0F2F5",
  // },
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
  card: {
    height: 500,
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button: {
    // backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    width: 'auto',
    marginTop: 50
  }
});
