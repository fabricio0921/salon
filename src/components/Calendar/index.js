import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
LocaleConfig.locales['br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Aagosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Aagosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
    today: "Aujourd'hui"
  };
  
  LocaleConfig.defaultLocale = 'br';

const AppCalendar = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
    style={{
        borderWidth: 1,
        borderColor: 'gray',
        marginTop:5,
        borderRadius:10,
        
        
       
        
      }}

      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
  );
};

export default AppCalendar;