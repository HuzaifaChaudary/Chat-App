import { Image } from 'expo-image'
import { View, Text } from 'react-native'
// import Inr from '../../assets/INR.svg'
export default function Debited() {
  return (

    <View
      style={{
        width: "98%",
        height: 120,
        backgroundColor: "#724D97",
        border: "2px solid white",
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View style={{ display: 'flex', flexDirection: "column", justifyContent: "center", paddingLeft: 10, width: "80%" }}>
        <Text style={{ color: "white" }}>Debit 16.00$</Text>
        <Text style={{ color: "white" }}>2023-19-11 5:33pm</Text>
        <Text style={{ color: "white" }}>
          Chat session with mahek for 10 Minutes 16/$
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 10 }}>
        <Text style={{ color: "white" }}>Debited</Text>
        <View
          style={{
            height: 60,
            width: 60,
            backgroundColor: "#C0A7D8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 999
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>₹</Text>
        </View>
      </View>
    </View>
  )
}
