import { View, Text, TextInput,
  StyleSheet,
  TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function TiketManualKeluar() {
  const navigation = useNavigation();

  const handleScanKeluarPress = () => {
    navigation.navigate('Scan Tiket Keluar'); // Mengarahkan ke halaman PilihTiket
  };
  return (
    <>
      <View style={style.container}>
    <View style={{ marginBottom: 20 }}>
          <Text style={style.text}>Nomor Polisi</Text>
          <TextInput
            style={[style.input, {backgroundColor: 'white'}]}
            placeholder="Masukkan Nomor Polisi"
            label=""
          ></TextInput>
      </View>
      <TouchableOpacity style={style.button} onPress={handleScanKeluarPress}>
          <Text style={[style.text, { color: 'white' }]}>Kirim</Text>
        </TouchableOpacity>
        </View>
      </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#F0F2F5",
    overflow: 'scroll'
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
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    width: 'auto',
    marginTop: 50,
    color: 'white'
  }
});