import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import AppCalendar from '../../components/Calendar';
import Hour from '../../components/Hour';





// import { Container } from './styles';

const Salon = () => {
  const [cor, setCor] = useState("#efe9f5");
  const [value, setValue] = useState(0);
  
  
  
  function Handle() {
    if(value===1){
      setCor("#E8C9F5");
      setValue(0);
      
     }else if(value !== 1){
      setCor("#efe9f5");
      setValue(1)
      
     }
    console.log(value);
  }
 
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
          <TouchableOpacity style={[styles.btServices, { backgroundColor: `${cor}` }]} onPress={() => Handle()}><Image
            style={styles.logoBtServices}
            source={require('../../assets/manicure.png')}
          /></TouchableOpacity>
          <TouchableOpacity style={[styles.btServices, { backgroundColor: `${cor}` }]} onPress={() => setCor("#E8C9F5")}><Image
            style={styles.logoBtServices}
            source={require('../../assets/cortecabelo.png')}
          /></TouchableOpacity>
          <TouchableOpacity style={[styles.btServices, { backgroundColor: `${cor}` }]} onPress={() => setCor("#E8C9F5")}><Image
            style={styles.logoBtServices}
            source={require('../../assets/massagem.png')}
          /></TouchableOpacity>

        </ScrollView>
        <AppCalendar />
        <Hour />

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
    alignItems: "center",
    backgroundColor: '#DCDCDC',


  },
  userInformations: {
    width: "95%",

    height: "15%",
    marginTop: 5,
    flexDirection: "row",


  },
  choosesCalendar: {
    width: "95%",

    height: "75%",
    marginTop: 5,




  },
  txtCalendar: {
    width: "100%",

    height: "8%",

  },
  txtService: {
    fontSize: 20,
    color: '#7532a8',
    fontWeight: 'bold'

  },
  serviceScrowview: {

    flexGrow: 0
  },
  services: {
    width: "100%",
    height: 10,
    borderColor: 'white',


  },
  btServices: {
    width: 50,
    height: 50,

    margin: 5,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  },
  logoBtServices: {
    width: 40,
    height: 40,

  },

  otherInformations: {
    width: "100%",
    height: "10%",
    justifyContent: 'center',
    alignItems: 'center',

  },
  btMark: {
    width: 200,
    height: "60%",
    borderWidth: 1,
    borderColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9370DB',
    borderRadius: 25,
  },

  Nome: {
    width: "40%",
    height: '100%',
    justifyContent: "center",


  },
  TxtNome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#7532a8'
  },
  Foto: {
    width: "80%",
    height: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  FotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 40
  }

});

export default Salon;