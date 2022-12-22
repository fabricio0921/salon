import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


// import { Container } from './styles';

const FirstPage = ({navigation}) => {
  return (
      <View style={styles.container}>
          <LinearGradient
        // Background Linear Gradient
        colors={['rgba(1,0.9,1,0.9)', 'transparent']}
        style={styles.background}
      >
          <View style={styles.viewLogo}>
          <Image
        style={styles.Logo}
        source={require('../pictures/salon.png')}
      />
          </View>
          <View style={styles.viewLogin}>
          <TouchableOpacity style={styles.BtLogin} onPress={()=>navigation.navigate('Login')}>
              <Text  style={styles.TxtBtLogin}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtCadastro}>
              <Text >CADASTRAR</Text>
          </TouchableOpacity>
          </View>
     
      </LinearGradient>
          
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: "#9370DB"
    },
    background:{
        width:"100%",
        height:"100%"
    },
    viewLogo:{
        width:"100%",
        height:'50%',
        justifyContent:'center',
        alignItems:'center'
        
    },
    viewLogin:{
        width:"100%",
        height:'50%',
        justifyContent:'center',
        alignItems:'center',
        
    },
    BtLogin:{
        width:200,
        height:"15%",
        borderWidth:1,
        borderColor:'white',
        
        justifyContent:'center',
        alignItems:'center',
        color:"white",
        borderRadius:25,
    },
    TxtBtLogin:{
        color:'white'
    },
    BtCadastro:{
        width:200,
        height:"15%",
        borderWidth:1,
        borderColor:'white',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        color:"white",
        margin:10,
        backgroundColor:"white"
    },
    Logo:{
        width:160,
        height:160
    }
    
  });
  

export default FirstPage;

