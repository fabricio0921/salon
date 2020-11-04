import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';


export default class Login extends Component {
    constructor(props) {

        super(props)

        this.state = {
            isLoading: false,

            UserEmail: '',
            UserPassword: ''

        }

    }


    UserLoginFunction = () => {

        const { UserEmail } = this.state;
        const { UserPassword } = this.state;


        fetch('https://www.catalogogeek.com.br/app/User_Login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                email: UserEmail,

                senha: UserPassword

            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // If server response message same as Data Matched
                if (responseJson === 'Data Matched') {

                    //Then open Profile activity and send user email to profile activity.
                    this.props.navigation.navigate('Home', { Email: UserEmail });

                }
                else {

                    Alert.alert(responseJson);
                }

            }).catch((error) => {
                console.error(error);
            });


    }



    render() {
        return (

            <ImageBackground source={require('../assets/images/bg2.png')} style={styles.image}>

                <Text style={styles.TxtLogin}>Salon</Text>
                <TextInput style={styles.TiLogin}
                    onChangeText={UserEmail => this.setState({ UserEmail })}
                    placeholder="Email"
                    placeholderTextColor="#800000"
                />

                <TextInput style={styles.TiLogin}
                    placeholder="Senha"
                    placeholderTextColor="#800000"
                    onChangeText={UserPassword => this.setState({ UserPassword })}
                />
                <TouchableOpacity style={styles.ToLogin} onPress={this.UserLoginFunction}>
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