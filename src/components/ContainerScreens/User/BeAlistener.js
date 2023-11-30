import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'
export default function BeAlistenerC({open,setOpen}) {
    return (
        <Modal isVisible={open} animationIn={"slideInUp"} style={{display:"flex",justifyContent:"center",alignItems:"center"}} backdropColor="transparent" onBackdropPress={()=>{setOpen(false)}}>
        <LinearGradient
            colors={['#2A0955', 'rgba(42, 9, 85, 0.00)']}
            start={{ x: 0, y: 0.5 }} // Gradient starts from the left
            end={{ x: 2, y: 0.5 }}   // Gradient ends at the right
            style={{
                borderColor: "white",
                borderWidth: 2,
                borderRadius: 12,
                position: "absolute",
                height: 230,
                bottom: 150,
                zIndex: 999,
                width: "80%",
                margin: "auto",
                paddingTop:10,
                paddingLeft:20
            }}
        >
            <Text style={{color:"white",fontSize:20}}>Be a Supporter</Text>
            <Text style={{width:"80%",color:"white",marginTop:10}}>
            Applying to be a suppoter on uplift does 
not ensres selection
if the team feels that
you will be able 
to help a lot of people
then you wiil be 
selected
            </Text>
            <View style={{display:"flex",flexDirection:"row",position:"absolute",bottom:20,right:20}}>
                <TouchableOpacity onPress={()=>{setOpen(false)}} style={{width:"auto" ,display:"flex",justifyContent:"center",alignItems:"center" , height:30, backgroundColor:"#C0A7D8",borderRadius:10,paddingLeft:20,paddingRight:20}}><Text>ok</Text></TouchableOpacity>
            </View>
        </LinearGradient>
        </Modal>
    );
}
