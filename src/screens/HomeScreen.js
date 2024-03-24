import * as React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
// const logoBus = require('./assets/account.png')
import Bar from "../components/Chart";

// Image import
import Account from "../../assets/account.svg";
import Bus from "../../assets/Bus.svg";
import Ticket from "../../assets/Ticket.svg";
import Danger from "../../assets/Danger.svg";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            marginBottom: 35,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Account width={40} height={40} />
          <View>
            <Text style={{ textAlign: "left", fontSize: 12 }}>Selamat Bertugas,</Text>
            <Text
              style={{
                textAlign: "left",
                fontWeight: "600",
                fontSize: 16
              }}
            >
              Bambang Sutrisno
            </Text>
          </View>
        </View>

        {/* Total Pengunjung */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#9ED4D7",
            backgroundColor: "#EEF3F7",
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 20,
            marginBottom: 20,
            gap: 20,
          }}
        >
          <Bus width={35} height={35} />
          <View>
            <Text style={{ textAlign: "left", fontSize: 12 }}>Total pengunjung hari ini</Text>
            <Text
              style={{
                textAlign: "left",
                fontWeight: "semibold",
                color: "#268E95",
                fontWeight: "bold",
                fontSize: 16,
                marginTop: 5
              }}
            >
              1.200 Pengunjung
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginBottom: 20,
          }}
        >
          {/* Parkir dengan Tiket */}
          <View
            style={[
              styles.card,
              { backgroundColor: "#D0E6DA", borderColor: "#269544" },
            ]}
          >
            <Ticket width={35} height={35}/>
            <View style={{ marginTop: 20 }}>
              <Text style={{ textAlign: "left", fontSize: 12 }}>Parkir dengan tiket</Text>
              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "semibold",
                  color: "#269544",
                  fontWeight: "bold",
                  fontSize: 14,
                  marginTop: 5
                }}
              >
                1.005 Pengunjung
              </Text>
            </View>
          </View>

          {/* Parkir tanpa Tiket */}
          <View
            style={[
              styles.card,
              { backgroundColor: "#F7EEEE", borderColor: "#EDD6D6" },
            ]}
          >
            <Danger width={35} height={35}/>
            <View style={{ marginTop: 20 }}>
              <Text style={{ textAlign: "left", fontSize: 12 }}>Parkir tanpa tiket</Text>
              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "semibold",
                  color: "#952626",
                  fontWeight: "bold",
                  fontSize: 14,
                  marginTop: 5
                }}
              >
                195 Pengunjung
              </Text>
            </View>
          </View>
        </View>

        {/* Grafik Pengujung */}
        <View>
          <Bar />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 30,
    backgroundColor: "#F0F2F5",
    overflow: "scroll",
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
});
