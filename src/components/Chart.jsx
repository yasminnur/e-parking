import { View, Text } from "react-native";
import React, { useState } from "react";
import { BarChart } from "react-native-gifted-charts";

export default function Chart() {
  const [clickedBar, setClickedBar] = useState(null); // State untuk menyimpan index bar yang diklik
  const barData = [
    {
      value: 75,
      label: "Januari",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 15, frontColor: "#952626" },
    {
      value: 60,
      label: "Februari",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 40, frontColor: "#952626" },
    {
      value: 70,
      label: "Maret",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 5, frontColor: "#952626" },
    {
      value: 50,
      label: "April",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 1, frontColor: "#952626" },
    {
      value: 20,
      label: "Mei",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 1, frontColor: "#952626" },
    {
      value: 75,
      label: "Juni",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 1, frontColor: "#952626" },
    {
      value: 75,
      label: "Juli",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 40, frontColor: "#952626" },
    {
      value: 75,
      label: "Agustus",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 60, frontColor: "#952626" },
    {
      value: 10,
      label: "September",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 60, frontColor: "#952626" },
    {
      value: 30,
      label: "Oktober",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 50, frontColor: "#952626" },
    {
      value: 75,
      label: "November",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 20, frontColor: "#952626" },
    {
      value: 30,
      label: "Desember",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "#212122" },
      frontColor: "#269544",
      labelWidth: 60,
    },
    { value: 20, frontColor: "#952626" },
    
  ];

  const handleBarClick = (event, index) => {
    setClickedBar(index);
  };

  const renderTitle = () => {
    return (
      <View style={{ marginVertical: 20 }}>
        <Text
          style={{
            color: "black",
            fontSize: 14,
            fontWeight: "600",
            textAlign: "left",
            marginHorizontal: 30,
          }}
        >
          Grafik Pengunjung
        </Text>
      </View>
    );
  };

  const renderKet = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          // justifyContent: "space-evenly",
          marginTop: 40,
          gap: 10
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: "#269544",
              marginRight: 8,
            }}
          />
          <Text
            style={{
              width: 100,
              height: 25,
              color: "black",
              margin: 0,
              fontSize: 12,
              fontWeight: "500"
            }}
          >
            dengan tiket
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: "#952626",
              marginRight: 8,
            }}
          />
          <Text
            style={{
              width: 100,
              height: 25,
              color: "black",
              margin: 0,
              fontSize: 12,
              fontWeight: "500"
            }}
          >
            tanpa tiket
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingBottom: 40,
        borderRadius: 12,
      }}
    >
      {renderTitle()}
      <BarChart
        data={barData}
        barWidth={30}
        spacing={24}
        hideRules
        xAxisThickness={0}
        yAxisThickness={0}
        noOfSections={3}
        barBorderRadius={8}
        maxValue={75}
        hideYAxisText
        // onClickBar
        onPress={handleBarClick}
      />
      {/* Tampilkan nilai di atas bar yang diklik */}
      {/* {clickedBar !== null && (
        <View
          style={{
            position: "absolute",
            top: barData[clickedBar].value > 50 ? 20 : 0,
            left: clickedBar * 50 + 40,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: 8,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>{barData[clickedBar].value}</Text>
        </View>
      )} */}
      {clickedBar !== null && (
        <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10 }}>
          Value: {clickedBar}
        </Text>
      )}
      {renderKet()}
    </View>
  );
}
