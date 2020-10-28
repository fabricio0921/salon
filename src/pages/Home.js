import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends Component {


    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Topo}>
                    <ImageBackground source={require('../assets/images/Salao.png')} style={styles.Salao}>

                    </ImageBackground>

                </View>
                <View style={styles.Baixo}>
                    <View style={styles.Avaliacao}>
                        <Icon
                            name='star'
                            type='evilicon'
                            color='blue'
                            size={40}
                            marginTop={10}
                        />
                        <Icon
                            name='star'
                            type='evilicon'
                            color='blue'
                            size={40}
                            marginTop={10}
                        />
                        <Icon
                            name='star'
                            type='evilicon'
                            color='blue'
                            size={40}
                            marginTop={10}
                        />

                    </View>
                    <View style={styles.Localizacao}>
                        <Text>Passagem do arame, 25</Text>
                        <Text>9858-4848</Text>
                        <Text>whatsApp: 9848-4058</Text>

                    </View>
                    <View style={styles.Servicos}>
                        <Text>Corte Masculino</Text>
                        <Text>Corte Femenino</Text>
                        <Text>Manicure</Text>

                    </View>
                    <TouchableOpacity style={styles.ToMarcarHorario}>
                        <Text>Marcar Horário</Text>
                    </TouchableOpacity>







                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({

    Container: {
        flex: 1,
    },
    Topo: {
        width: '100%',
        height: '40%',
        backgroundColor: 'grey'

    },
    Salao: {
        width: '100%',
        height: '100%'
    },
    Avaliacao: {
        flexDirection: 'row',


    },
    Localizacao: {
        width: '98%',
        height: '25%',
        borderWidth: 1,
        borderColor: 'grey',
        alignSelf: 'center',
        borderRadius: 3,
        marginTop: 5

    },
    Servicos: {
        width: '98%',
        height: '30%',

        borderWidth: 1,
        borderColor: 'grey',
        alignSelf: 'center',
        borderRadius: 3,
        marginTop: 5

    },
    ToMarcarHorario: {
        width: '50%',
        height: 40,
        backgroundColor: '#800000',
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 10
    }




});