import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
    };
  }

  userRegister = () => {
    const { userName } = this.state;
    const { userEmail } = this.state;
    const { userPassword } = this.state;

    fetch('https://hardeepwork.000webhostapp.com/react/register.php', {
      method: 'post',
      header: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
<View style={{flex: 1}}>

      <ImageBackground
       source={require('./image/HI3Elysia.png')} 
       style={{flex: 1}}>

        <ScrollView 
         style={{
          marginTop: 150, 
          paddingHorizontal: 20,
          paddingTop: 20,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          }}>

<Text style={{color: 'black', fontSize: 20, fontWeight: 'bold',}}>
          Silakan masukan Data Diri Anda Ya!
          </Text>

<TextInput
          placeholder="Enter Name"
          style={{ backgroundColor: '#ffffff', 
          paddingLeft: 10,
          borderRadius: 6,
          elevation: 3,
          paddingVertical: 6,
          marginTop: 10,
          borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          onChangeText={(userName) => this.setState({ userName })}
        />

        <TextInput
          placeholder="Enter Email"
          style={{ backgroundColor: '#ffffff', 
          paddingLeft: 10,
          borderRadius: 6,
          elevation: 3,
          paddingVertical: 6,
          marginTop: 10,
          borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          onChangeText={(userEmail) => this.setState({ userEmail })}
        />

        <TextInput
          placeholder="Enter Password"
          style={{ backgroundColor: '#ffffff', 
          paddingLeft: 10,
          borderRadius: 6,
          elevation: 3,
          paddingVertical: 6,
          marginTop: 10,
          borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          onChangeText={(userPassword) => this.setState({ userPassword })}
        />

        <TouchableOpacity
          onPress={this.userRegister}
          style={{
            marginTop: 10,
            borderRadius: 6,
            padding: 10,
            borderWidth: 1,
            backgroundColor: 'magenta',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Signup</Text>
        </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
