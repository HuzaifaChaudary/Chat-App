import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function UserPayment() {
  return (
    <LinearGradient colors={["#6B41A6", "#442E59"]} style={{ height: "100%" }}>
      <TouchableOpacity activeOpacity={1} style={styles.Container}>
        <View style={styles.ChildContainer}>
          <View style={styles.TextContainer}>
            <Text style={{ ...styles.ChildContainerText, color: "black" }}>
              Recharged
            </Text>
            <Text style={styles.ChildContainerText}>Your Account</Text>
            <Text style={{ ...styles.ChildContainerText, fontSize: 30 }}>
              R ₹ <Text style={{ color: "red", fontSize: 30 }}>0.00</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
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
