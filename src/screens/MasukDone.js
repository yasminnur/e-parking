import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MasukDone() {
  return (
    <>
      <View style={styles.container}>
        <Image></Image>
        <Text>Data tiket telah berhasil disimpan</Text>
        <TouchableOpacity>
          <Text style={{ color: 'green' }} >KEMBALI KE BERANDA</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "green",
    // overflow: 'scroll',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: "600",
    marginBottom: 5,
    color: 'white'
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    width: 'auto',
    marginTop: 50
  }
});
