import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';





// import { Container } from './styles';

const Hour = () => {
const [corHour, setCorHour] = useState("#E8C9F5")



    return (
        <View style={styles.container}>
            <ScrollView 
            contentContainerStyle={{
                flexDirection: 'row',
                justifyContent:'center',
                alignItems:'center'
              }}
             horizontal>
            <TouchableOpacity style={[styles.bHour, { backgroundColor:`${corHour}`}]} onPress={()=>setCorHour("#DCC9F5")} ><Text>10:30</Text></TouchableOpacity>
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



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width:"100%",
        
        marginTop:5,
        borderRadius:10,
       
        alignItems:'center'
       
    },
    
    bHour:{
        width:"10%",
        height:"50%",       
        borderRadius:5,
       
        justifyContent:'center',
        alignItems:'center',
        margin:5
    }
   

});

export default Hour;