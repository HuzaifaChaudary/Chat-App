import { Image } from "expo-image";
import { Text, View, StyleSheet } from "react-native";
import ProfilePic from "../../assets/ProfilePic.svg";
import Footer_Base from "../../assets/Footer.svg";
import IndianCurrency from "../../assets/IndianCurrencyLogo.svg";
import Tick from "../../assets/Footer.svg";
import { TouchableOpacity } from "react-native";
export default function BottomTab({ change, open }) {
  return (
    <View style={styles.MainContainer}>
      <Image source={Footer_Base} style={styles.BaseContainer} />
      <View
        style={{
          height: "100%",
          position: "absolute",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            open(true);
          }}
          style={{
            display: "flex",
            width: "100%",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={ProfilePic}
            style={{ position: "absolute", height: 60, width: 60 }}
          />
        </TouchableOpacity>
        <View style={styles.LeftContainer}>
          <TouchableOpacity
            onPress={() => {
              change(1);
            }}
            style={{
              height: 25,
              width: 25,
              backgroundColor: "white",
              borderRadius: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={Tick} style={{ width: 18, height: 18 }} />
          </TouchableOpacity>
          <Text style={{ color: "#C0A7D8", fontSize: 20 }}>Recharge</Text>
        </View>
        <TouchableOpacity style={styles.RightContainer}>
          <Image source={IndianCurrency} style={{ width: 30, height: 30 }} />
          <Text style={{ color: "#C0A7D8", fontSize: 20 }}>0.00$</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  FooterContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  FooterLogo: {
    height: 50,
    width: 50,
  },
  FooterLayer: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    bottom: 0,
  },
  BaseContainer: {
    height: "100%",
    // position:"absolute",
    width: "100%",
  },
  MainContainer: {
    height: "9%",
    width: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
  },
  LeftContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingTop: 10,
  },
  RightContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingRight: 40,
  },
});
