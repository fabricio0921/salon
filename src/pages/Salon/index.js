import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AppCalendar from '../../components/Calendar';




// import { Container } from './styles';

const Salon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInformations}>
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

      <View style={styles.choosesCalendar}>
        <View style={styles.txtCalendar}>
          <Text style={styles.txtService}>Escolha seu Serviço</Text>
        </View>
        <ScrollView style={styles.serviceScrowview} horizontal>
          <TouchableOpacity style={styles.btServices}><Image
            style={styles.logoBtServices}
            source={require('../../assets/manicure.png')}
          /></TouchableOpacity>
          <TouchableOpacity style={styles.btServices}><Image
            style={styles.logoBtServices}
            source={require('../../assets/manicure.png')}
          /></TouchableOpacity>
          <TouchableOpacity style={styles.btServices}><Image
            style={styles.logoBtServices}
            source={require('../../assets/manicure.png')}
          /></TouchableOpacity>
          <TouchableOpacity style={styles.btServices}><Image
            style={styles.logoBtServices}
            source={require('../../assets/manicure.png')}
          /></TouchableOpacity>
          <TouchableOpacity style={styles.btServices}><Image
            style={styles.logoBtServices}
            source={require('../../assets/manicure.png')}
          /></TouchableOpacity>
          <TouchableOpacity style={styles.btServices}><Image
            style={styles.logoBtServices}
            source={require('../../assets/manicure.png')}
          /></TouchableOpacity>

        </ScrollView>
        <AppCalendar/>
        
      </View>


      <View style={styles.otherInformations}>
        <TouchableOpacity style={styles.btMark}><Text>Marcar</Text></TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9370DB",
    alignItems: "center",

  },
  userInformations: {
    width: "95%",

    height: "20%",
    marginTop: 5,
    flexDirection: "row",


  },
  choosesCalendar: {
    width: "95%",   
    
    height: "60%",
    marginTop: 5,



  },
  txtCalendar: {
    width: "100%",

    height: "10%",
  },
  txtService: {
    fontSize: 20,

  },
  serviceScrowview: {
    borderColor: 'red',
    
    flexGrow: 0
  },
  services: {
    width: "100%",

    borderWidth: 1,

    height: 10,
    borderColor: 'white'

  },
  btServices: {
    width: 50,
    height: 50,
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    backgroundColor:'white'
  },
  logoBtServices:{
    width:45,
    height:45
  },

  otherInformations: {
    width: "95%",
    
    height: "10%",
    marginTop: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  btMark:{
    width: 200,
    height: "60%",
    borderWidth: 1,
    borderColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',
    color: "white",
    borderRadius: 25,
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
    borderRadius: 40
  }

});

export default Salon;