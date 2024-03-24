import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  return (
    <>
      <View style={{ marginBottom: 20 }}>
              <Text style={style.label}>{label}</Text>
              <View style={[style.inputContainer]}>
                  <TextInput {...props} />
              </View>
      </View>
    </>
  );
};
export default Input;

const style = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color:'gray'
    },
    inputContainer: {
        height: 55,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center'
    }
})
