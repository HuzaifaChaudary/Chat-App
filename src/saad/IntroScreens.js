import { StyleSheet } from "react-native";
import { Image } from "expo-image";

import { LinearGradient } from "expo-linear-gradient";

export default function IntroScreens({item}) {
  return (
    <LinearGradient colors={["#301c44", "#301c44"]} style={styles.Container}>
      <Image source={item.image} style={styles.Image} />
      {item.text}
      {/* <Button/> */}
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  Image: {
    width: 260,
    height: 260,
  },
  Container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    width:"100%",
    alignItems: "center",
  },
});
