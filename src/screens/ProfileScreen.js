import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{ fontSize: 26, fontWeight: "bold" }}
          onPress={() => navigation.navigate('Home')}
        >
          Profile Screen
        </Text>
      </View>
    </>
  );
}