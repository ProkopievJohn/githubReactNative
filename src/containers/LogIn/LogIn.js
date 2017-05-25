import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Image,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native'

export default class LogIn extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logoImage}
                        source={require('../../imgs/images.png')}
                        />
                    <Text style={styles.logoText}>
                        Lorem ipsum dolor sit amet.
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='login'
                        returnKeyType='next'
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        />
                    <TextInput
                        style={styles.input}
                        placeholder='password'
                        secureTextEntry
                        returnKeyType='Login'
                        ref={ input => {this.passwordInput = input;}}
                        />
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btn}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24292e',
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImage: {
        width: 100,
        height: 100
    },
    logoText: {
        marginTop: 30,
        opacity: 0.5,
        fontSize: 20,
        color: 'rgba(255,255,255,0.75)'
    },
    formContainer: {
        padding: 30
    },
    input: {
        marginTop: 10,
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingHorizontal: 10
    },
    btnContainer: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginTop: 30,
        marginHorizontal: 10,
        padding: 25
    },
    // btn: {

    // }
});
