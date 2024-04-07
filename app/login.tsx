import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Page = () => {
  const [countryCode, setCountryCode] = useState('+351')
  const [phoneNumber, setPhoneNumber] = useState('')

  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Phone) {

    }
  }

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Welcome back</Text>
      <Text style={defaultStyles.descriptionText}>Enter the phone number associated with your account.</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Country code"
          placeholderTextColor={Colors.gray}
          keyboardType="numeric"
          value={countryCode}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Phone number"
          placeholderTextColor={Colors.gray}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          phoneNumber !== '' ? styles.enable : styles.disabled,
          { marginBottom: 20 }
        ]}
        onPress={() => onSignIn(SignInType.Phone)}
      >
        <Text
          style={defaultStyles.buttonText}
        >Continue</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }} />

        <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>

        <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }} />
      </View>

      <TouchableOpacity
        onPress={() => onSignIn(SignInType.Email)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 20,
            backgroundColor: '#fff',
          },
        ]}>
        <Ionicons name="mail" size={24} color={'#000'} style={{ position: 'absolute', left: 65 }} />
        <Text style={[defaultStyles.buttonText, { color: '#000', marginLeft: 95 }]}>Continue with email </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSignIn(SignInType.Google)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 20,
            backgroundColor: '#fff',
          },
        ]}>
        <Ionicons name="logo-google" size={24} color={'#000'} style={{ position: 'absolute', left: 65 }} />
        <Text style={[defaultStyles.buttonText, { color: '#000', marginLeft: 95 }]}>Continue with Google </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSignIn(SignInType.Apple)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 20,
            backgroundColor: '#fff',
          },
        ]}>
        <Ionicons name="logo-apple" size={24} color={'#000'} style={{ position: 'absolute', left: 65 }} />
        <Text style={[defaultStyles.buttonText, { color: '#000', marginLeft: 95 }]}>Continue with Apple </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enable: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
})

export default Page