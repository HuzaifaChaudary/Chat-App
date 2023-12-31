import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Logo from '../../assets/Logo.svg'
import { Image } from 'expo-image'
import { LinearGradient } from "expo-linear-gradient";
export default function Splash({ navigation }) {
    setTimeout(() => {
        // change(1)
        navigation.navigate("NumberEnter")
    }, 3000);
    const { width, height } = useWindowDimensions()
    return (
        <LinearGradient colors={['#301c44', '#301c44']} style={styles.container}>
            <Image contentFit="contain" style={styles.Logo} source={Logo} />
        </LinearGradient>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#312537'
            ,
            alignItems: "center"
            // flex:1,
        },
        main_text: {
            fontSize: 40
        },
        Logo: {
            width: 300,
            height: 300,
        }
    }
)