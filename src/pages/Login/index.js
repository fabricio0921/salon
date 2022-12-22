import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';



// import { Container } from './styles';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(1,0.9,1,0.9)', 'transparent']}
                style={styles.background}
            >
                <View style={styles.FotoNome}>
                    <View style={styles.Nome}>
                        <Text style={styles.TxtNome}>Olá, Fabrício </Text>
                    </View>
                    <View style={styles.Foto}>
                        <Image
                            style={styles.FotoPerfil}
                            source={{
                                uri: 'http://pm1.narvii.com/8099/464ed95fa2b771db691b5ab495dd6b3ccc784cb7r1-1080-810v2_00.jpg',
                            }}
                        />
                    </View>


                </View>
                <View style={styles.viewLogin}>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='white'
                            />
                        
                        }
                        style={{width:200}}
                    />
                    <Input
                        placeholder='Senha'
                        leftIcon={
                            <Icon
                                name='key'
                                size={24}
                                color='white'
                                
                            />
                        
                        }
                        
                    />
                    <TouchableOpacity style={styles.BtConectar} onPress={() => navigation.navigate('Salon')}>
                        <Text style={styles.TxtBtConectar}> Conectar</Text>
                    </TouchableOpacity>
                    
                </View>

            </LinearGradient>

        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#9370DB"
    },
    background: {
        width: "100%",
        height: "100%"
    },
    FotoNome: {
        width: "100%",
        height: '30%',
        flexDirection: "row",
        padding: 10,
        marginTop: 20


    },
    viewLogin: {
        width: "100%",
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',


    },
    BtConectar: {
        width: 200,
        height: "15%",
        borderWidth: 1,
        borderColor: 'white',

        justifyContent: 'center',
        alignItems: 'center',
        color: "white",
        borderRadius: 25,
    },
    TxtBtConectar: {
        color: 'white'
    },
    BtCadastro: {
        width: 200,
        height: "15%",
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        color: "white",
        margin: 10,
        backgroundColor: "white"
    },
    Logo: {
        width: 160,
        height: 160
    },
    Nome: {
        width: "50%",
        height: '100%',

        justifyContent: "center",
        alignItems: 'center'
    },
    TxtNome: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10
    },
    Foto: {
        width: "50%",
        height: '100%',

        justifyContent: "center",
        alignItems: 'center'
    },
    FotoPerfil: {
        width: 150,
        height: 150,
        borderRadius: 20
    }

});

