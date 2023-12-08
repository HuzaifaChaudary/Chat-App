import React, { useEffect, useReducer, useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Discussion from "../screens/Discussion";
import Profile from "../screens/Profile";
import Chat from "../screens/Chat";
import Icon from "@expo/vector-icons/Ionicons";
import Icon2 from "@expo/vector-icons/Entypo";
import OtpInput from "../saad/OtpInput";
import NumberEnter from "../saad/NumberEnter.js";
import PaymentGateway from "../saad/PaymentGateway.js";
import Splash from "../saad/Splash.js";
import Home from "../screens/Home.js";
import AllScreen from "../screens/AllScreen.js";
import Call from "../screens/Call.js";
import activeBackground from "../../assets/active-background.svg";

import {
  Pressable,
  StatusBar,
  StyleSheet,
  View,
  Text,
  LayoutChangeEvent,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Svg, { Path } from "react-native-svg";
// reanimated
import Animated, {
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
} from "react-native-reanimated";
import UserPayment from "../saad/User/UserPayment.js";

const Tab = createBottomTabNavigator();

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const BottomTabBar = () => {
  return (
    <>
      <Tab.Navigator
        tabBar={(props) => <AnimatedTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "Message",
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="chat" color="#674F77" size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="AllScreen"
          component={AllScreen}
          options={{
            tabBarLabel: "",

            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: 70, height: 70, marginBottom: 55 }}
                  source={require("../../assets/Rectangle5.png")}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Incoming Call"
          component={Call}
          options={{
            tabBarLabel: "Calls",
            tabBarLabelStyle: { color: "red" },
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-person" color="#674F77" size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

// ------------------------------------------------------------------

// ------------------------------------------------------------------

const AnimatedTabBar = ({
  state: { index: activeIndex, routes },
  navigation,
  descriptors,
}) => {
  const { bottom } = useSafeAreaInsets();

  // get information about the components position on the screen -----

  const reducer = (state, action) => {
    // Add the new value to the state
    return [...state, { x: action.x, index: action.index }];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event, index) => {
    dispatch({ x: event.nativeEvent.layout.x, index });
  };

  // animations ------------------------------------------------------

  const xOffset = useDerivedValue(() => {
    // Our code hasn't finished rendering yet, so we can't use the layout values
    if (layout.length !== routes.length) return 0;
    // We can use the layout values
    // Copy layout to avoid errors between different threads
    // We subtract 25 so the active background is centered behind our TabBar Components
    // 20 pixels is the width of the left part of the svg (the quarter circle outwards)
    // 5 pixels come from the little gap between the active background and the circle of the TabBar Components
    return [...layout].find(({ index }) => index === activeIndex).x - 25;
    // Calculate the offset new if the activeIndex changes (e.g. when a new tab is selected)
    // or the layout changes (e.g. when the components haven't finished rendering yet)
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // translateX to the calculated offset with a smooth transition
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
    };
  });

  return (
    <View style={[styles.tabBar, { paddingBottom: bottom }]}>
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}
      >
        <Path
          fill="#604AE6"
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const { options } = descriptors[route.key];

          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              onLayout={(e) => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
              route={route.name}
            />
          );
        })}
      </View>
    </View>
  );
};

// ------------------------------------------------------------------

const TabBarComponent = ({ active, options, onLayout, onPress, route }) => {
  // handle lottie animation -----------------------------------------
  const ref = useRef(null);
  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current.play();
    }
  }, [active]);

  // animations ------------------------------------------------------

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 250 }),
        },
      ],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, { duration: 250 }),
    };
  });

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
      <Animated.View
        style={[
          styles.componentCircle,
          route == "AllScreen" && {
            position: "absolute",
          },
          animatedComponentCircleStyles,
        ]}
      />
      <Animated.View
        style={[styles.iconContainer, animatedIconContainerStyles]}
      >
        {options.tabBarIcon ? options.tabBarIcon({ ref }) : <Text>?</Text>}
      </Animated.View>
    </Pressable>
  );
};

// ------------------------------------------------------------------

//const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//     const handleChange = (value) => {
//         // Your logic for handling the change
//         console.log('Change:', value);
//     };

//     const handleOpen = (isOpen) => {
//         // Your logic for handling the open state
//         console.log('Open:', isOpen);
//     };
//     return (

//         // <BottomNav change={handleChange} open={handleOpen} />

//         <Tab.Navigator
//             screenOptions={{
//                 tabBarActiveTintColor: '#f2404c',
//                 tabBarInactiveTintColor: '#000119',
//                 tabBarStyle: {
//                     height: 65,
//                     justifyContent: 'center',
//                     paddingVertical: 15,
//                     backgroundColor: '#FFF',
//                     elevation: 2
//                 },
//                 headerShown: false,
//                 initialRoute: "Chat"
//             }}
//         >
//             <Tab.Screen
//                 name='Chat'
//                 component={Chat}
//                 options={{
//                     tabBarLabel: '',
//                     tabBarIcon: ({ color, size }) => (
//                         <Icon2 name='chat' color={color} size={30} />
//                     )
//                 }}
//             />
//             <Tab.Screen
//                 name='AllScreen'
//                 component={AllScreen}
//                 options={{
//                     tabBarLabel: '',
//                     tabBarIcon: ({ color, size }) => (
//                         <Icon name='ios-compass' color={color} size={30} />
//                     )
//                 }}
//             />

//             <Tab.Screen
//                 name='Incoming Call'
//                 component={Call}
//                 options={{
//                     tabBarLabel: '',
//                     tabBarIcon: ({ color, size }) => (
//                         <Icon name='ios-person' color={color} size={30} />
//                     )
//                 }}
//             />
//         </Tab.Navigator >

//     );
// };

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NumberEnter"
        component={NumberEnter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTP"
        component={OtpInput}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat1"
        component={BottomTabBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Discussion"
        component={Discussion}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentGateway}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllScreen"
        component={AllScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Call"
        component={Call}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profiles"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserPayment"
        component={UserPayment}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ChatStackNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
  },
  activeBackground: {
    position: "absolute",
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "white",
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 36,
    width: 36,
  },
});
