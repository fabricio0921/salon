import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';





// import { Container } from './styles';

const Hour = () => {
    return (
        <View style={styles.container}>
            <ScrollView 
            contentContainerStyle={{
                flexDirection: 'row',
                justifyContent:'center',
                alignItems:'center'
              }}
             horizontal>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bHour}><Text>10:30</Text></TouchableOpacity>

            
            
            </ScrollView>
            

           
           

        </View>
    );
}

export default Hour;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        
        margin:5,
        borderRadius:5,
       
        alignItems:'center'
       
    },
    
    bHour:{
        width:"10%",
        height:"50%",
        
        backgroundColor:'#efe9f5',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    }
   

});

