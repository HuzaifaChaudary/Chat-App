import { View, Text } from "react-native";
import Modal from "react-native-modal";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import ThankYou from "../../../../assets/TextThankYou.svg";
import { Image } from "expo-image";
export default function AmountLockedScreen({ open, setOpen }) {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../../../../assets/fonts/Inter-Light.ttf"),
    "Roboto-Flex": require("../../../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../../../assets/fonts/Roboto-Bold.ttf"),
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
    <Modal
    style={{
        backgroundColor: "rgba(54,24,94,0.9)",
        height: "80%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        zIndex: 999,
        paddingTop: 40,
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top:150,
        margin:"auto",
        width: "100%",
      }}
      animationIn={"slideInUp"}
      isVisible={open}
      onBackdropPress={()=>{setOpen(false)}}
      animationOut={"slideOutDown"}
      animationOutTiming={300}
    backdropColor="rgba(217, 217, 217, 0.70)"
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontFamily: "Roboto-Bold",
          fontSize: 22,
        }}
      >
        Your amount is lock{"\n"}you will recieve email soon
      </Text>
      <Image
        source={ThankYou}
        style={{ height: 200, width: 200, marginTop: 20 }}
      />
    </Modal>
  );
}
