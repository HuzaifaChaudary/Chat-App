import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Received = ({ message, image }) => {
    return (
        <>
            <View style={styles.container}>
                <Image source={{ uri: image }} style={styles.profileImage} />
                <LinearGradient
                    colors={['white', 'white']}
                    style={styles.gradient}
                >
                    <Text style={styles.text}>{message}</Text>
                    <Text style={styles.duration}>12:34 AM</Text>

                </LinearGradient>

            </View>
        </>
    )
}
export default Received;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 25,
        alignSelf: 'flex-start' // Adjusted from 'flex-end' to 'flex-start'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    duration: {
        color: '#b6b6b6',
        fontSize: 11,
        marginTop: 5,
        fontFamily: 'Montserrat_600SemiBold',
        alignSelf: 'flex-end'
    },
    gradient: {
        maxWidth: 220,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    text: {
        color: 'black',
    }
});
