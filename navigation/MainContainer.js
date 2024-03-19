import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ScanScreen from "./screens/ScanScreen";

// Screen name
// const homeName = "Home";
// const profileName = "Profile";
// const scanName = "Scan";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            style: {
              positio: "absolute",
              bottom: 25,
              left: 20,
              right: 20,
              elevation: 0,
              backgroudColor: "plum",
              borderRadius: 15,
                height: 90,
              ...StyleSheet.shadow
            },
          }}
            // initialRouteName={homeName}
            // screenOptions={({ route }) => ({
            //   tabBarIcon: ({ focused, color, size }) => {
            //     let iconName;
            //     let rn = route.name;

            //     if (rn === homeName) {
            //       iconName = focused ? "home" : "home-outline";
            //     } else if (rn === scanName) {
            //       iconName = focused ? "scan" : "scan-outline";
            //     } else if (rn === profileName) {
            //       iconName = focused ? "person" : "person-circle-outline";
            //     }

            //     return <Ionicons name={iconName} size={size} color={color} />;
            //   },
            // })}
            // tabBarOptions={{
            //   activeTintColor: "green",
            //   inactiveTintColor: "grey",
            //   style: { padding: 20, border: 0 },
            // }}
        >
          <Tab.Screen name="home" component={HomeScreen} />
          <Tab.Screen name="scan" component={ScanScreen} />
          <Tab.Screen name="profile" component={ProfileScreen} />
          {/* <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={scanName} component={ScanScreen} />
          <Tab.Screen name={profileName} component={ProfileScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0.25,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
