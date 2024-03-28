import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View } from "react-native";

// Import screens
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ScanScreen from "../screens/ScanScreen";

// Image import
import HomeAbu from "../../assets/home-abu.svg";
import HomeActive from "../../assets/home-active.svg";
import Profile from "../../assets/User.svg";
import ProfileActive from "../../assets/User-active.svg";
import QRCode from "../../assets/QR Code.svg";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <>
       <Tab.Navigator
        screenOptions={{
          
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#fff",
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          height: 65,
          // shadowColor: "rgba(0, 0, 0, 0.15)",
          // shadowOffset: { width: 0, height: -5 },
          // shadowOpacity: 2,
          shadowRadius: 45,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 5,
        },
        tabBarActiveTintColor: "#16247d",
        tabBarInactiveTintColor: "#111",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <HomeActive width={40} height={40} />
              ) : (
                <HomeAbu width={40} height={40} />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Scan Ticket"
        component={ScanScreen}
          options={{
            headerShown: false,
          tabBarIcon: () => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{
                  backgroundColor: "green",
                  padding: 10,
                  borderRadius: 100,
                  position: "absolute",
                  top: -70,
                  borderWidth: 15,
                  borderColor: "white",
                }}
              >
                <QRCode width={40} height={40}/>
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
          options={{
            headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <ProfileActive width={40} height={40} />
              ) : (
                <Profile width={40} height={40} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
    </>
  );
}
