import { LinearGradient } from "expo-linear-gradient";
import {
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Modal from 'react-native-modal'
import { useFonts } from "expo-font";
import { useCallback } from "react";
export default function ApplyCoupon({ open,setOpen }) {
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
    <Modal isVisible={open} animationIn={"slideInUp"} backdropColor="transparent" avoidKeyboard={true} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <LinearGradient
      colors={["#2A0955", "rgba(42, 9, 85, 0.00)"]}
      start={{ x: 0, y: 0.5 }} // Gradient starts from the left
      end={{ x: 2, y: 0.5 }} // Gradient ends at the right
      style={{
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 12,
        position: "absolute",
        height: 250,
        bottom: 150,
        zIndex: 999,
        width: "90%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 150,
          width: "75%",
          backgroundColor: "#c0b0ca",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft:10,
          gap:20
        }}
      >
        <Text style={{ color: "#6A3774", fontSize: 20,fontFamily:'Roboto-Bold' }}>Apply Coupon!</Text>
        <View style={{display:"flex",flexDirection:'row'}}>
          <TextInput
            placeholder="Enter your coupon code"
            placeholderTextColor={'white'}
            style={{
              backgroundColor: "rgba(176, 144, 190, 1)",
              height: 30,
              width: "80%",
              fontSize: 14,
              paddingLeft: 8,
              borderRadius: 10,
              color:"white"
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(140, 104, 147, 1)",
              height: 30,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              left: -10,
            }}
          >
            <Text style={{ color: "white" }}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{bottom:10,position:"absolute",right:10}}>
      <TouchableOpacity onPress={()=>{setOpen(false)}} style={{width:"auto" ,display:"flex",justifyContent:"center",alignItems:"center" , height:30, backgroundColor:"rgba(103, 79, 119, 1)",borderRadius:10,borderWidth:1,borderColor:'white',paddingLeft:20,paddingRight:20}}><Text style={{color:"white"}}>close</Text></TouchableOpacity>
      </View>
    </LinearGradient>
    </Modal>
  );
}
