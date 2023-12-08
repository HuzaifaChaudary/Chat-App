import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { useCallback } from "react";
import PaymentOptions from "./extras/PaymentOptions";
import Transaction from "./extras/Transaction";
import FInalREchargedScreen from "./extras/FinalRechargedScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";
import UserSettings from "./UserSettings";

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { LinearGradient } from "expo-linear-gradient";
import UserPayment from "./User/UserPayment";
import LockAmount from "./Listener/LockAmount";
export default function PaymentGateway({ change, navigation }) {
  const [OpenUserSettings, setOpenUserSettings] = useState(false);
  const [CurrentComponent, setCurrentComponent] = useState(0);
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={["#6B41A6", "#442E59"]} style={{ height: "100%" }}>
      <TouchableOpacity activeOpacity={1} style={styles.Container}>
        <View style={styles.ChildContainer}>
          {CurrentComponent === 0 ? (
            //navigation.navigate("UserPayment")
            <UserPayment />
          ) : CurrentComponent === 1 ? (
            <PaymentOptions change={setCurrentComponent} />
          ) : CurrentComponent === 2 ? (
            <Transaction change={setCurrentComponent} />
          ) : CurrentComponent === 3 ? (
            <FInalREchargedScreen />
          ) : null}
        </View>
      </TouchableOpacity>
      {OpenUserSettings ? (
        <UserSettings open={OpenUserSettings} setOpen={setOpenUserSettings} />
      ) : null}
      <Footer />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  Container: {
    height: "100%",
    backgroundColor: "#7440AE",
    display: "flex",
    justifyContent: "flex-end",
  },
  ChildContainer: {
    height: "90%",
    backgroundColor: "#A47ABF",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  ChildContainerText: {
    color: "#FFF",
    fontSize: 28,
    fontFamily: "Inter_600SemiBold",
  },
  TextContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 120,
  },
});
