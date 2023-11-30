import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CustomInput = ({ inputMessage, onSendPress, setMessage }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={false}
        >
            <TextInput
                ref={inputRef}
                placeholder='Enter a Message'
                value={inputMessage}
                onChangeText={setMessage}
                style={styles.input}
                onSubmitEditing={() => onSendPress()}
            />
            <TouchableOpacity onPress={onSendPress}>
                <Ionicons name='ios-send' color='#FFF' size={20} />
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: '85%',
        position: 'absolute',
        bottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        height: '60%'
    },
    input: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 11,
        color: '#fff',
        paddingHorizontal: 10,
        flex: 1,
        height: 30,
        margin: 8,
    },
});

export default CustomInput;
