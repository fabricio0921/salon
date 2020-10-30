import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';


export default class Login extends Component {


    render() {
        return (

            <ImageBackground source={require('../assets/images/bg2.png')} style={styles.image}>

                <Text style={styles.TxtLogin}>Salon</Text>
                <TextInput style={styles.TiLogin} placeholder="Email" placeholderTextColor="#800000" />
                <TextInput style={styles.TiLogin} placeholder="Senha" placeholderTextColor="#800000" />
                <TouchableOpacity style={styles.ToLogin} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.ToTextLogin}>Entrar</Text>
                </TouchableOpacity>
            </ImageBackground>

        );
    }
}


const styles = StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems: 'center',
        justifyContent: "center"
    },
    TiLogin: {
        borderBottomWidth: 2,
        borderBottomColor: '#800000',

        width: '80%',
        marginTop: 20

    },
    TxtLogin: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#800000'
    },
    ToLogin: {
        width: '40%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#800000',
        marginTop: 20,
        borderRadius: 30,



    },
    ToTextLogin: {
        color: '#FFA500',
        fontWeight: 'bold'
    },

});