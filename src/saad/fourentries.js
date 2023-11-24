import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Splash from "./components/Splash";
import PaymentGateway from "./components/PaymentGateway";
import IntroScreens from "./components/IntroScreens";
import NumberEnter from "./components/NumberEnter";
import OtpInput from "./components/OtpInput";
import AppIntroSlider from "react-native-app-intro-slider";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import IncomingCall from "./components/IncomingCall";
import Home from "./components/HomeScreen/Home";
import Chat from "./components/HomeScreen/Chat";
import { NavigationContainer } from "@react-navigation/native";
import ChatStackNavigator from "./components/navigations/navigator";
export default function FourEntries() {
    const [current, setcurrent] = useState(0);
    const increment = () => {
        setcurrent((e) => e + 1);
    };
    const [fontsLoaded] = useFonts({
        "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
        "Roboto-Flex": require("../../assets/fonts/RobotoFlex-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    const slides = [
        {
            key: "slide1",
            text: (
                <Text
                    style={{
                        fontFamily: "Roboto-Flex",
                        fontSize: 25,
                        marginTop: 20,
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    Im here for you {"\n"}{" "}
                    <Text style={{ color: "#C0A7D8" }}>During this tough time.</Text>
                </Text>
            ),
            image: require("./assets/Logo.svg"),
        },
        {
            key: "slide2",
            text: (
                <Text
                    style={{
                        fontFamily: "Roboto-Flex",
                        fontSize: 25,
                        marginTop: 20,
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    One of every <Text style={{ color: "#C0A7D8" }}>five</Text> people
                    experience a <Text style={{ color: "#C0A7D8" }}>loneliness.</Text>
                </Text>
            ),
            image: require("./assets/firstSliderScreen.png"),
        },
        {
            key: "slide3",
            text: (
                <Text
                    style={{
                        fontFamily: "Roboto-Flex",
                        fontSize: 25,
                        marginTop: 20,
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    <Text style={{ color: "#C0A7D8" }}>Stress</Text> has no {"\n"}{" "}
                    boundaries of age, {"\n"} gender, ethnicity, or {"\n"} religion
                </Text>
            ),
            image: require("./assets/SecondSliderScreen.png"),
        },
        {
            key: "slide4",
            text: (
                <Text
                    style={{
                        fontFamily: "Roboto-Flex",
                        fontSize: 25,
                        marginTop: 20,
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    Stay <Text style={{ color: "#C0A7D8" }}>Happy</Text> and {"\n"}{" "}
                    surround yourself {"\n"} with{" "}
                    <Text style={{ color: "#C0A7D8" }}>Uplifting</Text> People.
                </Text>
            ),
            image: require("./assets/ThirdScreenSlider.png"),
        },
    ];
    const listComponent = [
        <Splash change={setcurrent} />,
        <NumberEnter increment={increment} />,
        <OtpInput increment={increment} />,
        <AppIntroSlider
            data={slides}
            renderItem={IntroScreens}
            showNextButton={false}
            onDone={() => {
                setcurrent((e) => e + 1);
                navigation.navigate('NumberEnter')
            }}
            dotStyle={{
                width: 10,
                height: 10,
                backgroundColor: "#C0A7D8",
                borderRadius: 100,
            }}
            activeDotStyle={{
                width: 13,
                height: 13,
                backgroundColor: "#C0A7D8",
                borderRadius: 100,
            }}
        />,
        <PaymentGateway change={setcurrent} />,
    ];
    return (

        <SafeAreaProvider>
            <SafeAreaView>
                <View style={{ height: "100%" }}>
                    {listComponent[current]}
                    {/* <ChatStackNavigator /> */}
                    {/* <IncomingCall/> */}
                    {/* <Splash/> */}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
