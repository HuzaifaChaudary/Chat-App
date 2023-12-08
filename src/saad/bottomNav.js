import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Chat from "../screens/Chat";
import AllScreen from "../screens/AllScreen";
import Call from "../screens/Call";

const BottomNav = () => {
  const handleLeft = () => {
    return <Chat />;
  };
  const handleCenter = () => {
    return <AllScreen />;
  };
  const handleRight = () => {
    return <Call />;
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity onPress={handleLeft}>
        <Text>left</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCenter}>
        <Text>center</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRight}>
        <Text>right</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
