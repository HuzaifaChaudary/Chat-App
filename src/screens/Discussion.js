import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
import LastWatch from '../components/LastWatch';
import Received from '../components/Received';
import Sent from '../components/Sent';
import CustomInput from '../components/Input';
import BackImage from '../../assets/Back.png';
import CallImage from '../../assets/phone-calls.png';
import VideoImage from '../../assets/videos.png';
import Ellipse2Image from '../../assets/Ellipse2.png';


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
            "message": "It has survived not only five centuries but also the leap of electronic type setting"
        },
        {
            "id": 4,
            "message": "Contrary to popular belief. Lorem ipsum is not random text  "
        },
        {
            "id": 5,
            "message": "Hi, I want to see you!"
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

    const [showPopup, setShowPopup] = useState(false);
    const [amount, setAmount] = useState('');

    const handlePress = () => {
        setShowPopup(true);
    };

    const handleSubmit = () => {
        // Handle the submission logic here
        console.log('Amount submitted:', amount);
        setShowPopup(false);
    };

    return (
        <LinearGradient
            colors={["#301c44", "#301c44"]}
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
                            <Image source={BackImage} style={styles.backIcon} />
                        </TouchableOpacity>
                        <Image source={{ uri: itemPic }} style={styles.avatar} />

                        <View style={{ marginLeft: 13 }}>
                            <Text style={{ fontSize: 15, color: 'white' }}>John</Text>
                            <Text style={{ fontSize: 11, color: 'white' }}>Active now</Text>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.iconContainer}>
                            <Image source={Ellipse2Image} style={styles.backgroundIcon} />
                            <TouchableOpacity onPress={handlePress}>
                                <Image source={CallImage} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image source={Ellipse2Image} style={styles.backgroundIcon} />
                            <TouchableOpacity >
                                <Image source={VideoImage} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
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

            {/* Popup */}
            <Modal
                animationType="none"
                transparent={true}
                visible={showPopup}
                onRequestClose={() => setShowPopup(false)}
            >
                <View style={styles.popupContainer}>
                    <Text style={styles.popupText}>Choose the Amount:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={(text) => setAmount(text)}
                        placeholder="Enter the amount"
                        placeholderTextColor="white"
                        backgroundColor='rgba(192, 167, 216, 1)'
                        fontWeight='bold'
                        textAlign='center'
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            style={{ marginTop: 39, padding: 10, borderRadius: 5, backgroundColor: 'rgba(192, 167, 216, 1)', fontWeight: 'bold' }}
                            onPress={handleSubmit}
                        >
                            <Text style={{ color: 'white' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0, // Adjusted to take up the full height
    },
    main: {
        backgroundColor: '#2D1B46',
        flex: 8.5, // Adjusted to use flex instead of height
        paddingHorizontal: 0, // Adjusted paddingHorizontal
        paddingTop: 40,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        width: '100%',
        backgroundColor: 'rgba(164, 122, 191, 1)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 0, // Ensure there is no additional margin
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    popupContainer: {
        flex: 0.4,
        justifyContent: 'center', // Align popup to the top
        backgroundColor: 'rgba(42, 9, 85, 0.9)',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        padding: 20, // Adjusted to provide padding inside the popup
        marginBottom: 'auto', // This will push the popup to the top
    },
    popupText: {
        color: 'white',
        fontSize: 28,
        marginBottom: 10,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold', // Adjusted font weight
    },

    inputContainer: {
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    input: {
        height: 40,
        color: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        padding: 5,
        width: '100%',
    },
    backIcon: {
        width: 24,
        height: 24,
        tintColor: 'white', // Adjust the color as needed
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginRight: 10
    },
    backgroundIcon: {
        position: 'absolute',
        width: 28, // Increase the width
        height: 28, // Increase the height
        tintColor: 'white',
        marginLeft: -4, // Adjust the position to cover the icons
        marginTop: -4, // Adjust the position to cover the icons
    },
    iconContainer: {
        position: 'relative',
        marginRight: 14, // Increase the margin for better spacing
    },
    icon: {
        width: 21,
        height: 21,
        zIndex: 10,
    },



});

export default Discussion;
