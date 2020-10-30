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
                            color='#f50'
                            size={40}
                            marginTop={10}

                        />
                        <Icon
                            name='star'
                            type='evilicon'
                            color='#f50'
                            size={40}
                            marginTop={10}
                        />
                        <Icon
                            name='star'
                            type='evilicon'
                            color='#f50'
                            size={40}
                            marginTop={10}
                        />
                        <Icon
                            name='star'
                            type='evilicon'
                            color='#f50'
                            size={40}
                            marginTop={10}
                        />
                        <Icon
                            name='star'
                            type='evilicon'
                            color='#f50'
                            size={40}
                            marginTop={10}
                        />

                    </View>
                    <View style={styles.Localizacao}>
                        <View style={styles.LocalizacaoEndereco}>
                            <Icon
                                name='marker'
                                type='foundation'
                                color='#f50'
                                justifyContent='center'
                                size={30}

                                padding={10}
                            />
                            <Text style={styles.TxtLocalizacao}>Passagem do arame, 25</Text>


                        </View>

                        <View style={styles.LocalizacaoTelefone}>
                            <Icon
                                name='telephone'
                                type='foundation'
                                color='#f50'
                                justifyContent='center'
                                size={30}

                                padding={10}
                            />
                            <Text style={styles.TxtLocalizacao}>9858-4848</Text>

                        </View>
                        <View style={styles.LocalizacaoWhatsApp}>
                            <Icon
                                name='telephone'
                                type='foundation'
                                justifyContent='center'
                                color='#f50'
                                size={30}

                                padding={10}
                            />
                            <Text style={styles.TxtLocalizacao}>9848-4058 (WhatsApp)</Text>

                        </View>



                    </View>
                    <View style={styles.Servicos}>
                        <Text>Corte Masculino</Text>
                        <Text>Corte Femenino</Text>
                        <Text>Manicure</Text>

                    </View>
                    <TouchableOpacity style={styles.ToMarcarHorario} onPress={() => this.props.navigation.navigate('Horarios')}>
                        <Text style={styles.TotxtMarcarHorario}>Marcar Horário</Text>
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


        borderColor: 'grey',
        alignSelf: 'center',
        borderRadius: 3,
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 1,


    },
    LocalizacaoEndereco: {
        width: '95%',
        height: '33%',
        flexDirection: 'row',

    },
    LocalizacaoTelefone: {
        width: '95%',
        height: '33%',
        flexDirection: 'row'
    },
    LocalizacaoWhatsApp: {
        width: '95%',
        height: '33%',
        flexDirection: 'row'

    },
    TxtLocalizacao: {
        padding: 10,
        justifyContent: 'center'

    },
    Servicos: {
        width: '98%',
        height: '30%',


        borderColor: 'grey',
        alignSelf: 'center',
        borderRadius: 3,
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 1,


    },
    ToMarcarHorario: {
        width: '50%',
        height: 45,
        backgroundColor: '#800000',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10
    },
    TotxtMarcarHorario: {
        color: '#FFA500',
        fontWeight: 'bold'
    },




});