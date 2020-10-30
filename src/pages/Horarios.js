import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'



export default class Horarios extends Component {
    constructor(props) {
        super(props);

        this.state = {
            country: null,
            city: null,
            cities: []
        };
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
                    <Text> Serviço </Text>
                    <DropDownPicker
                        items={[
                            { label: 'France', value: 'fr' },
                            { label: 'Spain', value: 'es' },
                            { label: 'Brasil', value: 'br' },
                        ]}
                        defaultNull
                        placeholder="Select your country"
                        containerStyle={{ height: 40 }}
                        onChangeItem={item => this.changeCountry(item)}
                    />


                </View>

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

    },


});