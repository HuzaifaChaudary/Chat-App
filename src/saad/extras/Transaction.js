import { Text, View ,TouchableOpacity,ScrollView} from "react-native";
import Credited from "../cards/Credited";
import Debited from "../cards/Debited";
export default function Transaction({change}) {
  return (
    <View style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height:"100%",
        marginTop:80
      }}>
         <View
        style={{
          position: "absolute",
          top: -120,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          width:"100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={()=>{change(1)}}>
          <Text
            style={{ fontSize: 24, color: "black", fontFamily: "MontBold" }}
          >
            Recharge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ fontSize: 24, color: "white", fontFamily: "MontBold" }}
          >
            Transaction
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:10,width:"100%",overflow:"scroll"}}>
        <Debited />
        <Credited />
      </View>
      </ScrollView>
    </View>
  );
}
