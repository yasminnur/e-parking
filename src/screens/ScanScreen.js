import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ScanScreen() {
  const navigation = useNavigation();

  const handleTambahManualPress = () => {
    navigation.navigate('Tambah Tiket Manual'); // Mengarahkan ke halaman PilihTiket
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleTambahManualPress}>
          <Text style={styles.text}>TAMBAH MANUAL</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    position: 'absolute',
    bottom: 50,
    right: 13,
    left: 13,
    width: 'auto'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  paddingTop: 40,
  paddingBottom: 40,
  paddingRight: 20,
    paddingLeft: 20,
    position: 'relative'
}
});