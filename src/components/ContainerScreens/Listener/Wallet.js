import { StyleSheet,View,Text } from "react-native";
export default function Wallet(){
    return(
        <View style={styles.TextContainer}>
        <Text style={{ ...styles.ChildContainerText, color: "black" }}>
          Recharged
        </Text>
        <Text style={styles.ChildContainerText}>Your Account</Text>
        <Text style={{ ...styles.ChildContainerText, fontSize: 30 }}>
          R ₹ <Text style={{ color: "red", fontSize: 30 }}>0.00</Text>
        </Text>
      </View>
    )
}
const styles = StyleSheet.create({
    Container: {
      height: "100%",
      backgroundColor: "#7440AE",
      display:"flex",
      justifyContent:"flex-end"
    },
    ChildContainer: {
      height: "90%",
      backgroundColor:"#A47ABF",
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
      marginTop:120
    },
  });