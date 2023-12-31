import React from 'react';
import { Text } from 'react-native';
import IntroScreens from '../saad/IntroScreens.js'
import AppIntroSlider from "react-native-app-intro-slider"

const Home = ({ navigation }) => {
    const slides = [
        {
            key: "slide1",
            text: (
                <Text
                    style={{
                        // fontFamily: "Roboto-Flex",
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
            image: require("../../assets/Logo.svg"),
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
            image: require("../../assets/firstSliderScreen.png"),
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
            image: require("../../assets/SecondSliderScreen.png"),
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
            image: require("../../assets/ThirdScreenSlider.png"),
        },
    ];
    return (
        <AppIntroSlider
            data={slides}
            renderItem={IntroScreens}
            showNextButton={false}
            onDone={() => {
                navigation.navigate('Chat1')
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
        />
    )
}
export default Home;
