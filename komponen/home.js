import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
<View style={{flex: 1}}>
       
      <ImageBackground
       source={require('./image/Elysiav2.png')} 
       style={{flex: 1}}>

        <ScrollView 
         style={{
          marginTop: 150, 
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          paddingHorizontal: 20,
          paddingTop: 20,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          }}>
         <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
          Hi!
          </Text>
         <Text style={{color: '#ffffff', fontSize: 20}}>
          Selamat datang di dunia Elysia Realm
          </Text>

          <TouchableOpacity onPress={() => navigate('Login')} style={{ backgroundColor: '#ffffff', 
           paddingLeft: 10,
           borderRadius: 6,
           elevation: 3,
           paddingVertical: 6,
           marginTop: 20,
          }}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Register')}
          style={{ backgroundColor: '#ffffff', 
           paddingLeft: 10,
           borderRadius: 6,
           elevation: 3,
           paddingVertical: 6,
           marginTop: 10,
          }}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
                      


           <TouchableOpacity
            style={{
              backgroundColor: '#e4b7ff',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5,
              paddingVertical: 6,
              borderRadius: 6,
              }}>
            <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 18,}}>
              Login
            </Text>
           </TouchableOpacity>

        </ScrollView>
      </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  btnText: {
    color: 'magenta', 
    fontWeight: 'bold', 
    fontSize: 18,

  },
});
