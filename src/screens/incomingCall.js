import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Image } from "expo-image";
import ProfilePic from "../../assets/CallPfp.svg";
import EndCall from "../../assets/EndCall.svg";
import Camera from "../../assets/Camera.svg";
import Volume from "../../assets/Volume.svg";
import Microphone from "../../assets/Microphone.svg";
import phoneCall from "../../assets/PhoneCallOption.svg";
// import Review from "./extras/Review";
import SwipeButton from "rn-swipe-button";
import { useState } from "react";
import phoneCallSlider from '../../assets/Call.png'
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round';

export default function IncomingCall() {

  const [StyleCallButton, setStyleCallButton] = useState({
    display: "none",
    flexDirection: "row",
    gap: 30,
    position: "absolute",
    bottom: 0,
    paddingBottom: 20,
  });
  const [CallingSlide, setCallingSlide] = useState(
    <SwipeButton
      disabled={false}
      swipeSuccessThreshold={70}
      height={55}
      width={300}
      title={"swipe to answer"}
      onSwipeSuccess={() => {
        ModifyStyle();
      }}
      railFillBackgroundColor="rgba(255, 255, 255, 0.20)"
      railBackgroundColor="rgba(255, 255, 255, 0.20)"
      railBorderColor="transparent"
      railFillBorderColor="rgba(255, 255, 255, 0.20)"
      titleColor={"white"}
      thumbIconBackgroundColor="#A47ABF"
      thumbIconImageSource={phoneCallSlider}
      thumbIconStyles={{ borderRadius: 100, border: "none" }}
      thumbIconWidth={55}
      thumbIconBorderColor="rgba(255, 255, 255, 0.20)"
      titleStyles={{ fontFamily: "VarelaRound_400Regular" }}
      containerStyles={{ marginTop: 200 }}
    />
  );
  const [disableCBButton, setDisableCBButton] = useState(false);
  const defaultStatusMessage = "swipe status appears here";
  const [swipeStatusMessage, setSwipeStatusMessage] =
    useState(defaultStatusMessage);

  setInterval(() => setSwipeStatusMessage(defaultStatusMessage), 5000);
  const updateSwipeStatusMessage = (message) => setSwipeStatusMessage(message);
  const renderSubHeading = (heading) => (
    <Text style={styles.subHeading}>{heading}</Text>
  );
  let forceResetLastButton = null;
  const ModifyStyle = () => {
    setStyleCallButton({
      display: "flex",
      flexDirection: "row",
      gap: 30,
      position: "absolute",
      bottom: 0,
      paddingBottom: 20,
    })
    setCallingSlide(<Image source={EndCall} style={{ width: 100, height: 100 }} />);
  };
  let [fontsLoaded] = useFonts({
    VarelaRound_400Regular,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.Container}>
        <Image source={ProfilePic} style={{ width: 200, height: 200 }} />
        <View style={{ paddingTop: 20 }}>{CallingSlide}</View>
        <View
          style={StyleCallButton}
        >
          <TouchableOpacity style={styles.CallSubOption}>
            <Image source={Camera} style={styles.CallSubOptionImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.CallSubOption}>
            <Image source={Volume} style={styles.CallSubOptionImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.CallSubOption}>
            <Image source={Microphone} style={styles.CallSubOptionImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.CallSubOption}>
            <Image source={phoneCall} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
        {/* <Review /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Image: {
    width: 200,
    height: 300,
  },
  Container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#2d1b46",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  CallSubOption: {
    width: 50,
    height: 50,
    backgroundColor: "#C0A7D8",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  CallSubOptionImage: {
    height: 40,
    width: 40,
  },
});

