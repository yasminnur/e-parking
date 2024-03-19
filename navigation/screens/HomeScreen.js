import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert("Button Clicked!")}
        ></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "plum",
  },
});
