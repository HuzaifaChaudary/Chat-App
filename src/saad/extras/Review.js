import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import star from "../../assets/star.svg";
import { Image } from "expo-image";
export default function Review() {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
    "Roboto-Flex": require("../../assets/fonts/RobotoFlex-Regular.ttf"),
    Mont: require("../../assets/fonts/Montserrat-Light.ttf"),
    MontBold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
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
    <View style={styles.Container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontFamily: "MontBold",
          color: "white",
        }}
      >
        Review
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Image source={star} style={{ width: 35, height: 35 }} />
        <Image source={star} style={{ width: 35, height: 35 }} />
        <Image source={star} style={{ width: 35, height: 35 }} />
        <Image source={star} style={{ width: 35, height: 35 }} />
        <Image source={star} style={{ width: 35, height: 35 }} />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Write a Review"
          style={{
            fontFamily: "MontBold",
            fontSize: 16,
            color: "white",
            fontSize: 24,
            textAlign: "center",
            marginTop: 80,
            borderBottomWidth: 4,
            borderBottomColor: "#C0A7D8",
            width: "90%",
            paddingBottom: 10,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          marginTop: 20,
          textAlign: "center",
          fontFamily: "MontBold",
          color: "white",
        }}
      >
        Write a Review
      </Text>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 150,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <TouchableOpacity
          style={{
            width: "150px",
            height: 40,
            backgroundColor: "#563B6D",
            borderRadius: 10,
            border: "1px solid #C0A&D8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontFamily: "Mont",
          }}
        >
          <Text>Money Token</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "150px",
            height: 40,
            backgroundColor: "#563B6D",
            borderRadius: 10,
            border: "1px solid #C0A&D8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontFamily: "Mont",
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "rgba(42,9,85,0.90)",
    height: "90%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 150,
  },
});
