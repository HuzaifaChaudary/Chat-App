import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Discussion from '../screens/Discussion';
import Profile from '../screens/Profile';
import Chat from '../screens/Chat';
import Icon from '@expo/vector-icons/Ionicons';
import Icon2 from '@expo/vector-icons/Entypo';
import OtpInput from '../saad/OtpInput';
import NumberEnter from '../saad/NumberEnter.js';
import PaymentGateway from '../saad/PaymentGateway.js';
import Splash from '../saad/Splash.js';
import Home from '../screens/Home.js'
import AllScreen from '../screens/AllScreen.js'
import Call from '../screens/Call.js'
import BottomNav from '../saad/bottomNav.js'



const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    const handleChange = (value) => {
        // Your logic for handling the change
        console.log('Change:', value);
    };

    const handleOpen = (isOpen) => {
        // Your logic for handling the open state
        console.log('Open:', isOpen);
    };
    return (

        // <BottomNav change={handleChange} open={handleOpen} />

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#f2404c',
                tabBarInactiveTintColor: '#000119',
                tabBarStyle: {
                    height: 65,
                    justifyContent: 'center',
                    paddingVertical: 15,
                    backgroundColor: '#FFF',
                    elevation: 2
                },
                headerShown: false,
                initialRoute: "Chat"
            }}
        >
            <Tab.Screen
                name='Chat'
                component={Chat}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Icon2 name='chat' color={color} size={30} />
                    )
                }}
            />
            <Tab.Screen
                name='AllScreen'
                component={AllScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='ios-compass' color={color} size={30} />
                    )
                }}
            />

            <Tab.Screen
                name='Incoming Call'
                component={Call}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='ios-person' color={color} size={30} />
                    )
                }}
            />
        </Tab.Navigator >

    );
};

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false,
};

const ChatStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            {/* <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false, }} />
            <Stack.Screen name='NumberEnter' component={NumberEnter} options={{ headerShown: false, }} />
            <Stack.Screen name='OTP' component={OtpInput} options={{ headerShown: false, }} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false, }} /> */}
            <Stack.Screen name='Chat1' component={BottomTabNavigator} options={{ headerShown: false, }} />
            <Stack.Screen name='Discussion' component={Discussion} options={{ headerShown: false, }} />
            <Stack.Screen name='Payment' component={PaymentGateway} options={{ headerShown: false, }} />
            <Stack.Screen name='AllScreen' component={AllScreen} options={{ headerShown: false, }} />
            <Stack.Screen name='Call' component={Call} options={{ headerShown: false, }} />
            <Stack.Screen name='Profiles' component={Profile} options={{ headerShown: false, }} />

        </Stack.Navigator>
    )
}

export default ChatStackNavigator;
