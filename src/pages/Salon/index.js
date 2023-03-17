import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';



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
          <TouchableOpacity style={styles.btServices}><Text>Botao</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btServices}><Text>Botao</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btServices}><Text>Botao</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btServices}><Text>Botao</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btServices}><Text>Botao</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btServices}><Text>Botao</Text></TouchableOpacity>

        </ScrollView>
        <Calendar
          // Initially visible month. Default = Date()
          current={'2012-03-01'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
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

    height: "33%",
    marginTop: 5,
    flexDirection: "row",


  },
  choosesCalendar: {
    width: "95%",
    borderColor: 'white',
    
    height: "50%",
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
    borderRadius: 5
  },

  otherInformations: {
    width: "95%",
    borderWidth: 1,
    height: "15%",
    marginTop: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  btMark:{
    width: 200,
    height: "40%",
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