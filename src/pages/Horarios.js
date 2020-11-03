import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ToggleSwitch from 'toggle-switch-react-native';




export default class Horarios extends Component {
    constructor(props) {
        super(props);

        this.state = {
            country: null,
            city: null,
            cities: [],
            data: '',
            toggleValue: false
        };
    }
    changeDate = (valor) => {
        this.setState({
            data: valor
        })
    }
    changeCountry(item) {
        let city = null;
        let cities;
        switch (item.value) {
            case 'fr':
                cities = [
                    { label: 'Paris', value: 'paris' }
                ];
                break;
            case 'es':
                cities = [
                    { label: 'Madrid', value: 'madrid' }
                ];
                break;
        }
        this.setState({
            city,
            cities
        });
    }
    changeCity(item) {
        this.setState({
            city: item.value
        });
    }


    render() {

        return (
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Text> Horarios Disponíveis </Text>

                </View>
                <View style={styles.ServicoData}>

                    <DropDownPicker
                        items={[
                            { label: 'Corte de cabelo Masculino', value: 'fr' },
                            { label: 'Corte de Cabelo Femenino', value: 'es' },
                            { label: 'Selagem', value: 'br' },
                        ]}
                        defaultNull
                        placeholder="Selecione o serviço"

                        containerStyle={{ height: 40, width: '50%', alignItems: 'flex-start' }}
                        onChangeItem={item => this.changeCountry(item)}
                    />

                    <DatePicker
                        format='DD/MM/YYYY'
                        style={styles.DateComponent}
                        date={this.state.data}
                        onDateChange={this.changeDate}
                        borderRadius={30}
                    />


                </View>
                <Text>{this.state.data && <Text>*  Data selecionada: {this.state.data}</Text>}</Text>
                <ScrollView style={styles.Horarios} >
                    <View style={styles.MarcacaoHorario}>
                        <Text style={styles.MarcacaoHorarioTexto}>8:00</Text>
                        <ToggleSwitch
                            isOn={this.state.toggleValue}
                            onColor="blue"
                            offColor="grey"
                            size='medium'
                            marginRight={10}
                            onToggle={isOn => this.setState({
                                toggleValue: isOn
                            })}
                        />
                    </View>
                    <View style={styles.MarcacaoHorario}>
                        <Text style={styles.MarcacaoHorarioTexto}>8:00</Text>
                        <ToggleSwitch
                            isOn={this.state.toggleValue}
                            onColor="blue"
                            offColor="grey"
                            size='medium'
                            marginRight={10}
                            onToggle={isOn => this.setState({
                                toggleValue: isOn
                            })}
                        />
                    </View>
                    <View style={styles.MarcacaoHorario}>
                        <Text style={styles.MarcacaoHorarioTexto}>9:00</Text>
                        <ToggleSwitch
                            isOn={this.state.toggleValue}
                            onColor="blue"
                            offColor="grey"
                            size='medium'
                            marginRight={10}
                            onToggle={isOn => this.setState({
                                toggleValue: isOn
                            })}
                        /></View>
                    <View style={styles.MarcacaoHorario}>
                        <Text style={styles.MarcacaoHorarioTexto}>10:00</Text>
                        <ToggleSwitch
                            isOn={this.state.toggleValue}
                            onColor="blue"
                            offColor="grey"
                            size='medium'
                            marginRight={10}
                            onToggle={isOn => this.setState({
                                toggleValue: isOn
                            })}
                        /></View>
                    <View style={styles.MarcacaoHorario}>
                        <Text style={styles.MarcacaoHorarioTexto}>11:00</Text>
                        <ToggleSwitch
                            isOn={this.state.toggleValue}
                            onColor="blue"
                            offColor="grey"
                            size='medium'
                            marginRight={10}
                            onToggle={isOn => this.setState({
                                toggleValue: isOn
                            })}
                        /></View>
                    <View style={styles.MarcacaoHorario}>
                        <Text style={styles.MarcacaoHorarioTexto}>12:00</Text>
                        <ToggleSwitch
                            isOn={this.state.toggleValue}
                            onColor="blue"
                            offColor="grey"
                            size='medium'
                            marginRight={10}
                            onToggle={isOn => this.setState({
                                toggleValue: isOn
                            })}
                        /></View>
                    <View style={styles.MarcacaoHorario}>
                        <Text style={styles.MarcacaoHorarioTexto}>13:00</Text>
                        <ToggleSwitch
                            isOn={this.state.toggleValue}
                            onColor="blue"
                            offColor="grey"
                            size='medium'
                            marginRight={10}
                            onToggle={isOn => this.setState({
                                toggleValue: isOn
                            })}
                        />
                    </View>
                    <View style={styles.MarcacaoHorario}>
                        <Text style={styles.MarcacaoHorarioTexto}>13:00</Text>
                        <ToggleSwitch
                            isOn={this.state.toggleValue}
                            onColor="blue"
                            offColor="grey"
                            size='medium'
                            marginRight={10}
                            onToggle={isOn => this.setState({
                                toggleValue: isOn
                            })}
                        />
                    </View>
                    <View style={styles.MarcacaoHorario}>
                        <Text style={styles.MarcacaoHorarioTexto}>13:00</Text>
                    </View>
                    <View style={styles.MarcacaoHorario}>
                        <Text style={styles.MarcacaoHorarioTexto}>13:00</Text>
                    </View>

                </ScrollView>
                <TouchableOpacity style={styles.BtMarcarHorario}>
                    <Text style={styles.TextoBt}>Marcar Horário</Text>

                </TouchableOpacity>









            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,


    },
    Header: {
        width: '95%',
        marginTop: 10,
        alignSelf: 'center',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',


    },
    ServicoData: {
        width: '95%',
        height: 60,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignSelf: 'center'




    },
    DateComponent: {
        width: '46%',
        marginLeft: 5,
        borderRadius: 30

    },
    Horarios: {
        height: 500,
        width: '95%',

        alignSelf: 'center',



    },
    MarcacaoHorario: {
        height: 40,
        width: '95%',

        backgroundColor: 'white',
        alignSelf: 'center',
        margin: 10,

        flexDirection: 'row',


        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,

    },
    MarcacaoHorarioTexto: {
        marginLeft: 10
    },
    BtMarcarHorario: {
        width: '40%',
        backgroundColor: '#800000',
        height: 40,
        marginBottom: 40,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextoBt: {
        color: '#FFA500'
    },


});