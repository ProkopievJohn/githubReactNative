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
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        />
                    <Text style={styles.logoText}>
                        Lorem ipsum dolor sit amet.
                    </Text>
                </View>
                <View style={styles.form}>
                    <TextInput
                        placeholder='login'
                        returnKeyType='next'
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        />
                    <TextInput
                        placeholder='password'
                        secureTextEntry
                        returnKeyType='Login'
                        ref={ input => {this.passwordInput = input;}}
                        />
                    <TouchableOpacity>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        margin: 10
    },
    form: {
        flexGrow: 1
    }
});
