import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import coupon from '../../../assets/Coupons.svg';
import { Image } from 'expo-image'
export default function PaymentOptions({ change }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80%"
      }}
    >
      <View
        style={{
          position: "absolute",
          top: -40,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999
        }}
      >
        <TouchableOpacity>
          <Text
            style={{ fontSize: 24, color: "white", fontFamily: "MontBold" }}
          >
            Recharge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { change(2) }}>
          <Text
            style={{ fontSize: 24, color: "black", fontFamily: "MontBold" }}
          >
            Transaction
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#724D95",
          borderWidth: 2,
          borderColor: "#C0A7DB",
          borderRadius: 10,
          width: "80%",
          paddingRight: 10,
          height: 60,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          Choose From The Available Recharge Packs:
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 20,
          paddingRight: 20,
          gap: 10,
          marginTop: 40,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 40,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #C0A7D8",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 40,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #C0A7D8",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 40,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #C0A7D8",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 40,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #C0A7D8",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 40,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #C0A7D8",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 40,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #C0A7D8",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 40,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #C0A7D8",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 40,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #C0A7D8",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "auto",
              height: 40,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#724D95",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #C0A7D8",
            }}
          >
            <Text style={{ color: "white" }}>2543$</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginTop: 20,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 30,
            width: "95%",
            display: "flex",
            border: "2px solid white",
            borderRadius: 8,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "#724D95",
            paddingLeft: 10,
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 15 }}>
            video calls
          </Text>
          <Text style={{ color: "white", fontSize: 15 }}>
            8$
          </Text>
        </View>
        <View
          style={{
            height: 30,
            width: "95%",
            display: "flex",
            border: "2px solid white",
            borderRadius: 8,
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#724D95",
            flexDirection: "row",
            paddingLeft: 10,
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 15 }}>
            video calls
          </Text>
          <Text style={{ color: "white", fontSize: 15 }}>
            8$
          </Text>
        </View>
        <View
          style={{
            height: 30,
            width: "95%",
            display: "flex",
            border: "2px solid white",
            borderRadius: 8,
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#724D95",
            flexDirection: "row",
            paddingLeft: 10,
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 15 }}>
            video calls
          </Text>
          <Text style={{ color: "white", fontSize: 15 }}>
            8$
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          marginTop: 20
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#724D95",
            width: "auto",
            height: 50,
            border: "2px solid whtie",
            borderRadius: 8,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row"
          }}
        >

          <Text style={{ color: "white", paddingLeft: 20, fontSize: 14, paddingRight: 20, textAlign: "center" }}>
            <Image source={coupon} style={{ height: 15, width: 15 }} />Apply coupons {"\n"}find best offers for you
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#724D95",
            width: "auto",
            height: 50,
            border: "2px solid whtie",
            borderRadius: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={() => { change(3) }} style={{ color: "white", paddingLeft: 20, fontSize: 20, paddingRight: 20 }}>
            <Text style={{ color: "white" }}>Recharge</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
}
