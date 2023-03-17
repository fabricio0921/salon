import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';



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
        <ScrollView style={styles.services} horizontal={true}>
          <TouchableOpacity style={styles.btServices}>
            <Text>Ola</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btServices}>
            <Text>Ola</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btServices}>
            <Text>Ola</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btServices}>
            <Text>Ola</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btServices}>
            <Text>Ola</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btServices}>
            <Text>Ola</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btServices}>
            <Text>Ola</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.otherInformations}></View>

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
    
    height: "33%",
    marginTop: 5,
    flexDirection: "row",


  },
  choosesCalendar: {
    width: "95%",
    
    height: "43%",
    marginTop: 5,
    

  },
  txtCalendar: {
    width: "100%",
    
    height: "10%",
  },
  txtService:{
    fontSize:20,
    
  },
  services:{
    width: "100%",
 
    height:'10%'
  
  },
  btServices:{
    width:50,
    height:"20%",
    borderWidth:1,
    margin:5,
    borderRadius:5
  },
  otherInformations: {
    width: "95%",
    borderWidth: 1,
    height: "20%",
    marginTop: 5,
    flexDirection: "row",
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