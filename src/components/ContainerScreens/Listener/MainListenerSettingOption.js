import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Share from "../../../../assets/Share.svg";
import Uplift from "../../../../assets/Uplift.svg";
import Coupons from "../../../../assets/Coupons.svg";
import Report from "../../../../assets/Report.svg";
import BeAListener from "../../../../assets/BeAListener.svg";
import LogOut from "../../../../assets/LogOut.svg";
import DeleteAccount from "../../../../assets/DeleteAccount.svg";
import back from "../../../../assets/Back.svg";
import ProfliePic from "../../../../assets/CallPfp.svg";
import Coupon from "../../../../assets/CouponListener.svg";
import BeAlistenerC from "../User/BeAlistener";
import { useState, useRef, useEffect } from "react";
import SupportCare from "../../../../assets/CustomerCare.svg"
import DeleteAccountC from "../User/DeleteAccount";
import ApplyCoupon from "./ApplyCoupon";
import Modal from "react-native-modal";
import { useFonts } from "expo-font";
import { useCallback } from "react";
export default function MainListenerSettingOption({ open,setOpen }) {
  const [OpenApplyCoupon, setOpenApplyCoupon] = useState(false);
  const [OpenDeleteAccount, setOpenDeleteAccount] = useState(false);
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
        bottom: -20,
        margin:"auto",
        width: "100%",
        paddingBottom:40
      }}
      animationIn={"slideInUp"}
      isVisible={open}
      onBackdropPress={()=>{setOpen(false)}}
      animationOut={"slideOutDown"}
      animationOutTiming={300}
      backdropColor="rgba(217, 217, 217, 0.70)"
    >
       <ApplyCoupon setOpen={setOpenApplyCoupon} open={OpenApplyCoupon} /> 
      
        <DeleteAccountC setOpen={setOpenDeleteAccount} open={OpenDeleteAccount} />
      
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={ProfliePic} style={{ width: 80, height: 80 }} />
        <Text style={{ color: "white",fontSize:20 }}>john</Text>
        <Text style={{ color: "white",fontSize:20 }}>+92 34545436345</Text>
        <Text style={{ color: "white",fontSize:20,fontFamily:'Roboto-Bold' }}>Only for you</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 50,
          marginTop: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#724D95",
              borderRadius: 100,
            }}
          >
            <Image source={Uplift} style={{ width: 32, height: 32 }} />
          </View>
          <Text style={{ color: "white" }}>Uplift</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#724D95",
              borderRadius: 100,
            }}
          >
            <Image source={Share} style={{ width: 32, height: 32 }} />
          </View>
          <Text style={{ color: "white" }}>Share</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#724D95",
              borderRadius: 100,
            }}
          >
            <Image source={Coupons} style={{ width: 32, height: 32 }} />
          </View>
          <Text style={{ color: "white" }}>Coupons</Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ color: "white", fontSize: 24 }}>Commands</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 50,
          marginTop: 10,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#724D95",
              borderRadius: 100,
            }}
          >
            <Image source={Report} style={{ width: 32, height: 32 }} />
          </View>
          <Text style={{ color: "white" }}>Report</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#724D95",
              borderRadius: 100,
            }}
          >
            <Image source={BeAListener} style={{ width: 32, height: 32 }} />
          </TouchableOpacity>
          <Text style={{ color: "white" }}>Be a Listener</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 90,
          }}
        >
          <TouchableOpacity
          onPress={() => {
            setOpenApplyCoupon(true);
          }}
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#724D95",
              borderRadius: 100,
            }}
          >
            <Image source={Coupon} style={{ width: 32, height: 32 }} />
          </TouchableOpacity>
          <Text style={{ color: "white" }}>Create a{"\n"}Coupon</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 30,
          marginTop: 20,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setOpenDeleteAccount(true);
            }}
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#724D95",
              borderRadius: 100,
            }}
          >
            <Image source={SupportCare} style={{ width: 32, height: 32 }} />
          </TouchableOpacity>
          <Text style={{ color: "white" }}>Supporter Care</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft:10,
              paddingRight:10
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setOpenDeleteAccount(true);
            }}
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#724D95",
              borderRadius: 100,
              
            }}
          >
            <Image source={LogOut} style={{ width: 32, height: 32 }} />
          </TouchableOpacity>
          <Text style={{ color: "white" }}>Logout</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setOpenDeleteAccount(true);
            }}
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#724D95",
              borderRadius: 100,
            }}
          >
            <Image source={DeleteAccount} style={{ width: 32, height: 32 }} />
          </TouchableOpacity>
          <Text style={{ color: "white" }}>Delete Account</Text>
        </View>
      </View>
    </Modal>
  );
}
