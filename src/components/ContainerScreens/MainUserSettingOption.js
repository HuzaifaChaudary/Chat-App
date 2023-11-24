import { View, Text, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image'
import Share from '../../../assets/Share.svg'
import Uplift from '../../../assets/Uplift.svg'
import Coupons from '../../../assets/Coupons.svg'
import Report from '../../../assets/Report.svg'
import BeAListener from '../../../assets/BeAListener.svg'
import LogOut from '../../../assets/LogOut.svg'
import DeleteAccount from '../../../assets/DeleteAccount.svg'
import back from '../../../assets/Back.svg'
import ProfliePic from '../../../assets/ProfilePic.svg'
import BeAlistenerC from './BeAlistener'
import { useState,useRef,useEffect } from 'react'
import DeleteAccountC from './DeleteAccount'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
export default function MainUserSettingOption({ open }) {
    const [OpenBeAListener, setOpenBeAListener] = useState(false);
    const [OpenDeleteAccount, setOpenDeleteAccount] = useState(false);

    return (
        <View style={{ backgroundColor: "rgba(42, 9, 85, 0.9)", height: "80%", borderTopLeftRadius: 50, borderTopRightRadius: 50, zIndex: 999, paddingTop: 40, display: "flex", alignItems: "center", position: "absolute", bottom: 0, width: "100%" }}>
            {OpenBeAListener?<BeAlistenerC open={setOpenBeAListener}/>:null}
            {OpenDeleteAccount?<DeleteAccountC open={setOpenDeleteAccount}/>:null}
            <TouchableOpacity onPress={() => open(false)} ><Image source={back} style={{ width: 25, height: 25 }} /></TouchableOpacity>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image source={ProfliePic} style={{ width: 100, height: 100 }} />
                <Text style={{ color: "white" }}>User</Text>
                <Text style={{ color: "white" }}>+92 34545436345</Text>
                <Text style={{ color: "white" }}>Only for you</Text>
            </View>
            <View style={{ display: "flex", flexDirection: 'row', gap: 50, marginTop: 20 }}>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 60, height: 60, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#724D95", borderRadius: 100 }}><Image source={Uplift} style={{ width: 32, height: 32 }} /></View>
                    <Text style={{ color: "white" }}>Uplift</Text>
                </View>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 60, height: 60, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#724D95", borderRadius: 100 }}><Image source={Share} style={{ width: 32, height: 32 }} /></View>
                    <Text style={{ color: "white" }}>Share</Text>
                </View>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 60, height: 60, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#724D95", borderRadius: 100 }}><Image source={Coupons} style={{ width: 32, height: 32 }} /></View>
                    <Text style={{ color: "white" }}>Coupons</Text>
                </View>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ color: "white", fontSize: 24 }} >Commands</Text>
            </View>
            <View style={{ display: "flex", flexDirection: 'row', gap: 50, marginTop: 20 }}>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 60, height: 60, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#724D95", borderRadius: 100 }}><Image source={Report} style={{ width: 32, height: 32 }} /></View>
                    <Text style={{ color: "white" }}>Report</Text>
                </View>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity onPress={()=>{setOpenBeAListener(true)}} style={{ width: 60, height: 60, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#724D95", borderRadius: 100 }}><Image source={BeAListener} style={{ width: 32, height: 32 }} /></TouchableOpacity>
                    <Text style={{ color: "white" }}>Be a Listener</Text>
                </View>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ width: 60, height: 60, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#724D95", borderRadius: 100 }}><Image source={LogOut} style={{ width: 32, height: 32 }} /></TouchableOpacity>
                    <Text style={{ color: "white" }}>Log Out</Text>
                </View>
            </View>
            <View style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <TouchableOpacity onPress={()=>{setOpenDeleteAccount(true)}} style={{ width: 60, height: 60, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#724D95", borderRadius: 100 }}><Image source={DeleteAccount} style={{ width: 32, height: 32 }} /></TouchableOpacity>
                <Text style={{ color: "white" }}>Delete Account</Text>
            </View>
        </View>
    )
}