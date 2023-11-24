import React, { useState, useRef, useCallback } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const OtpInput = ({ increment, navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < newOtp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
    "Roboto-Flex": require("../../assets/fonts/RobotoFlex-Regular.ttf"),
    Mont: require("../../assets/fonts/Montserrat-Light.ttf"),
    MontBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    MontMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={["#6B41A6", "#442E59"]} style={styles.mainContainer}>
      <Text
        style={{
          color: "#C0A7D8",
          //fontFamily: "MontBold",
          fontSize: 30,
          letterSpacing: -1.68,
          textAlign: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Verify Phone Number
      </Text>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          //fontFamily: "Mont",
          marginTop: 20,
        }}
      >
        Please enter the 4 digit code sent to {"\n"}{" "}
        <Text style={{ color: "#A47ABF" }}>+971 50 123 4567</Text> through SMS
      </Text>
      <View style={styles.container}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.box}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleOtpChange(value, index)}
            value={digit}
            ref={(input) => {
              inputs.current[index] = input;
            }}
          />
        ))}
      </View>
      <Text style={{ textAlign: "center", color: "white" }}>
        Didn’t recieve a code?{" "}
        <Text style={{ color: "#7C15FF" }}>Resend SMS</Text>
      </Text>
      <Text
        style={{
          color: "#353535",
          fontSize: 14,
          //fontFamily: "MontMedium",
          textAlign: "center",
        }}
      >
        Wrong number
      </Text>

      <View style={{ display: "flex", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat')
          }}
          style={{
            width: "90%",
            border: "1px solid white",
            borderRadius: 40,
            height: 50,
            display: "flex",
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#473553",
            shadowColor: "rgba(192, 167, 216, 1)",
            elevation: 10
          }}
        >
          <Text style={{
            color: "white", //fontFamily: "Mont", 
            fontSize: 15
          }}>
            Verify number
          </Text>
        </TouchableOpacity>
        <Text style={{
          color: "white",
          marginTop: 20, //fontFamily: "Mont",
          fontSize: 12
        }}>
          By continuing you’re indicating that you accept {"\n"} our <Text>Terms of Use</Text> and our <Text>Privacy Policy</Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#7440AE",
    height: "100%",
    display: "flex",
    justifyContent: "center"
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    marginTop: "60px",
    width: "100%",
    display: "flex",
  },
  box: {
    borderBottomWidth: 1,
    borderColor: "#C0A7D8",
    width: 50,
    height: 40,
    margin: 10,
    color: "white",
    textAlign: "center",
    fontSize: 40,
  },
});

export default OtpInput;
