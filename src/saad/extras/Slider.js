// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';
// const Slider = () => {
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const handleOtpChange = (value, index) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     // Move focus to the next box if the current one has a value
//     if (value && index < newOtp.length - 1) {
//       this.inputs[index + 1].focus();
//     }
//   };
//   const inputs = [];
//   return (
//     <View style={styles.container}>
//       {otp.map((digit, index) => (
//         <TextInput
//           key={index}
//           style={styles.box}
//           maxLength={1}
//           keyboardType="numeric"
//           onChangeText={(value) => handleOtpChange(value, index)}
//           value={digit}
//           ref={(input) => {
//             inputs[index] = input;
//           }}
//         />
//       ))}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     borderWidth: 1,
//     borderColor: 'black',
//     width: 40,
//     height: 40,
//     margin: 10,
//     textAlign: 'center',
//     fontSize: 20,
//   },
// });
// export default Slider;