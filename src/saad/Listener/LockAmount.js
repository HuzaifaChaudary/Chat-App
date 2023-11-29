import { TouchableOpacity,View,Text,StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import AmountLockedScreen from "../../components/ContainerScreens/Listener/AmountLocked";
export default function LockAmount(){
    const [AmountLocked, setAmountLocked] = useState(false);
    const [fontsLoaded] = useFonts({
        "Inter-Light": require("../../../assets/fonts/Inter-Light.ttf"),
        "Roboto-Flex": require("../../../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("../../../assets/fonts/Roboto-Bold.ttf"),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
    return(
        <>
                <View style={styles.TextContainer}>
                  <Text style={{ ...styles.ChildContainerText, color: "black" }}>
                    Recharged
                  </Text>
                  <Text style={styles.ChildContainerText}>Your Account</Text>
                  <Text style={{ ...styles.ChildContainerText, fontSize: 30 }}>
                    R ₹ <Text style={{ color: "red", fontSize: 30 }}>0.00</Text>
                  </Text>
                </View>
                <View style={{display:"flex",marginTop:100,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{setAmountLocked(true)}} style={{width:130,height:45,borderRadius:10,backgroundColor:"rgba(43, 15, 90, 0.50)",display:"flex",alignItems:"center",justifyContent:"center"}}><Text style={{color:"white",fontSize:18,fontFamily:"Roboto-Flex"}}>Lock Amount</Text></TouchableOpacity>
                </View>
                <Text style={{color:"white",textAlign:"center",fontSize:16,fontFamily:"Roboto-Bold"}}>Being a supporter before 25th {"\n"} date of the month you will lock your Amount.</Text>
                <AmountLockedScreen setOpen={setAmountLocked} open={AmountLocked} />
              </>
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
      textAlign:"center"
    },
    TextContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop:120
    },
  });