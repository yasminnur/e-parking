import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { Text, View } from "react-native";

// Import screens
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ScanScreen from "../screens/ScanScreen";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   style: {
      //     position: "absolute",
      //     bottom: 0,
      //     right: 0,
      //     left: 0,
      //     elevation: 0,
      //     height: 65,
      //     background: "#fff",
      //     borderTopLeftRadius: 35,
      //     borderTopRightRadius: 35,
      //     shadowOffset: {
      //       width: 0,
      //       height: -5,
      //     },
      //     shadowOpacity: 0.15,
      //     shadowRadius: 45,
      //     shadowColor: "rgba(0, 0, 0, 1)",
      //     elevation: 0,
      //   },
      //   labelStyle: {
      //     fontSize: 12,
      //   },
      //   tabStyle: {
      //     flexDirection: "column",
      //     alignItems: "center",
      //     justifyContent: "center",
      //   },
      // }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Entypo
                name="home"
                size={24}
                color={focused ? "#16247d" : "#111"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        style={{
          width: 50,
          height: 50,
          backgroundColor: "red",
        }}
        name="Scan Ticket"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name="scan-outline"
                size={24}
                color={focused ? "#16247d" : "#111"}
              />
              {/* <Text style={{ fontSize: 12, color: "#16247d" }}>SCAN</Text> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name="person-circle-outline"
                size={24}
                color={focused ? "#16247d" : "#111"}
              />
              {/* <Text style={{ fontSize: 12, color: "#16247d" }}>PROFILE</Text> */}
            </View>
          ),
        }}
      />

    </Tab.Navigator>
  );
}
