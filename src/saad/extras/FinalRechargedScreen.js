import { Image } from "expo-image";
import { View, Text, TouchableOpacity } from "react-native";
import Tick from "../../../assets/WhiteTick.svg";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import bigradial from '../../../assets/bigradial.svg'
import smallradial from '../../../assets/smallradial.svg'
export default function FInalREchargedScreen({ change }) {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../../../assets/fonts/Inter-Light.ttf"),
    "Roboto-Flex": require("../../../assets/fonts/RobotoFlex-Regular.ttf"),
    Mont: require("../../../assets/fonts/Montserrat-Light.ttf"),
    MontBold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
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
    <View style={{ height: "100%" }}>
      <View
        style={{
          position: "absolute",
          top: -40,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={bigradial} style={{ height: 150, width: 150 }} />
        <Image source={smallradial} style={{ height: 150, width: 150, position: "absolute" }} />
        <Image source={Tick} style={{ height: 60, width: 60, position: "absolute" }} />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "50%",
          width: "100%",
        }}
      >
        <View>
          <View>
            <Image source={Tick} />
          </View>
        </View>
        <Text
          style={{ color: "#392E40", fontFamily: "MontBold", fontSize: 30 }}
        >
          Recharged
        </Text>
        <Text style={{ fontFamily: "MontBold", color: "white", fontSize: 24 }}>
          Your new balance is
        </Text>
        <Text style={{ fontFamily: "MontBold", color: "white", fontSize: 24 }}>
          R$ 9.876,99
        </Text>
      </View>
    </View>
  );
}
