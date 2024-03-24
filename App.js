import * as React from "react";
import Navigation from "./src/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ScanScreen from "./src/screens/ScanScreen";
import TiketManualMasuk from "./src/screens/TiketManualMasuk";
import TiketManualKeluar from "./src/screens/TiketManualKeluar";
// import KeluarDone from "./navigation/screens/KeluarDone";
import MasukDone from "./src/screens/MasukDone";
import PilihTambahTiket from "./src/screens/PilihTambahTiket";
import ScanTiketKeluar from "./src/screens/ScanTiketKeluar";
import ScanTiketMasuk from "./src/screens/ScanTiketMasuk";
import TidakSesuai from "./src/screens/TidakSesuai";
import TiketScreen from "./src/screens/TiketScreen";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const screenOptions = {
  // tabBarShowLabel: false,
  // headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 65,
    background: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowOffset: {
      width: 0,
      height: -5, // Y diatur ke -5 untuk bayangan di atas tab bar
    },
    shadowOpacity: 0.15, // Opacity 15%
    shadowRadius: 45, // Blur 45
    shadowColor: "rgba(0, 0, 0, 1)", // Warna bayangan hitam
    elevation: 0, // Memberikan efek bayangan di platform Android
  },
};
function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Navigation screenOptions={screenOptions} /> */}
        <Stack.Navigator>
          {/* <Stack.Navigator screenOptions={{headerShown: false}}> */}
          <Stack.Screen
            name="Main"
            component={Navigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Scan Screen" component={ScanScreen} />
          <Stack.Screen name="Profile Screen" component={ProfileScreen} />
          <Stack.Screen
            name="Tiket Manual Masuk"
            component={TiketManualMasuk}
          />
          <Stack.Screen
            name="Tiket Manual Keluar"
            component={TiketManualKeluar}
          />

          {/* <Stack.Screen name="KeluarDone" component={KeluarDone} /> */}
          <Stack.Screen name="Masuk Done" component={MasukDone} />
          <Stack.Screen
            name="Tambah Tiket Manual"
            component={PilihTambahTiket}
          />
          <Stack.Screen name="Scan Tiket Keluar" component={ScanTiketKeluar} />
          <Stack.Screen name="Scan Tiket Masuk" component={ScanTiketMasuk} />
          <Stack.Screen name="Tidak Sesuai" component={TidakSesuai} />

          <Stack.Screen name="Tiket Screen" component={TiketScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
export default App;

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello frens</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
