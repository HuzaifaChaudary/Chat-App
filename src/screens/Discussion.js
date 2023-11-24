import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
import LastWatch from '../components/LastWatch';
import Received from '../components/Received';
import Sent from '../components/Sent';
import CustomInput from '../components/Input';
import { Image } from 'expo-image';
import Call from '../../assets/Call.png'
// import Icon from "@expo/vector-icons/MaterialIcons";


const Discussion = ({ route, navigation }) => {
    const { itemName, itemPic } = route.params;
    const [inputMessage, setMessage] = useState('');

    let Data = [
        {
            "id": 1,
            "message": "Wuz Up! Lorem ipsum is simply dummy text of"
        },
        {
            "id": 2,
            "message": "How are you ? =)"
        },
        {
            "id": 3,
            "message": "It has servived not only five centuries but also the leap of electronic type setting"
        },
        {
            "id": 4,
            "message": "Contrary to popular beleif . Lorem ipsum is not random text  "
        },
        {
            "id": 5,
            "message": "Hi, i want to see you!"
        }
    ]

    const send = () => {
        Data.push({ id: inputMessage, message: inputMessage });
        setMessage('');
    };

    var txt = []
    for (var i = 5; i < Data.length; i++) {
        txt.push(<Sent key={Data[i].id} message={Data[i].message} />);
    }
    console.log(Data)

    return (
        <LinearGradient
            colors={["white", "white", "white"]}
            style={styles.container}
        >
            <View style={styles.main}>

                <View style={styles.headerContainer} >

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',

                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Icon name='left' color='white' size={24} />
                        </TouchableOpacity>
                        <Image source={{ uri: itemPic }} style={styles.avatar} />

                        <View style={{ marginLeft: 13 }}>
                            <Text style={{ fontSize: 20 }}>John</Text>
                            <Text style={{ color: 'white' }}>Active now</Text>
                        </View>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Incoming Call")}}><Image source={Call} style={{width:15, height:15}}/></TouchableOpacity>
                    </View>


                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <LastWatch checkedOn='Yesterday' />
                    <Received
                        image={itemPic}
                        message={Data[0].message}
                    />
                    <Sent
                        message={Data[1].message}
                    />
                    <Received
                        image={itemPic}
                        message={Data[2].message}
                    />
                    <Sent
                        message={Data[3].message}
                    />
                    <LastWatch checkedOn='Today' />
                    <Received
                        image={itemPic}
                        message={Data[4].message}
                    />
                    <View>
                        {txt}
                    </View>
                </ScrollView>
            </View>
            <CustomInput
                inputMessage={inputMessage}
                setMessage={(inputMessage) => setMessage(inputMessage)}
                onSendPress={send}
            />
        </LinearGradient>
    )
}
export default Discussion;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "97%"
    },
    main: {
        backgroundColor: 'purple',
        height: '88%',
        paddingHorizontal: 20,
        // borderBottomLeftRadius: 35,
        // borderBottomRightRadius: 35,
        paddingTop: 40
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        // backgroundColor: '#A47ABF',
        width: '100%'
    },
    username: {
        color: "#000000",
        // fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        flex: 1,
        textAlign: 'center'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }

})