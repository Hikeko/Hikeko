import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    };
  }

  login = () => {
    const { userEmail, userPassword } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userEmail == '') {
      //alert("Please enter Email address");
      this.setState({ email: 'Please enter Email address' });
    } else if (reg.test(userEmail) === false) {
      //alert("Email is Not Correct");
      this.setState({ email: 'Email is Not Correct' });
      return false;
    } else if (userPassword == '') {
      this.setState({ email: 'Please enter password' });
    } else {
      fetch('https://hardeepwork.000webhostapp.com/react/login.php', {
        method: 'post',
        header: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          // we will pass our input data to server
          email: userEmail,
          password: userPassword,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson == 'ok') {
            // redirect to profile page
            alert('Successfully Login');
            this.props.navigation.navigate('Profile');
          } else {
            alert('Wrong Login Details');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    Keyboard.dismiss();
  };

  render() {
    return (
<View style={{flex: 1}}>
       
      <ImageBackground
       source={require('./image/HI3Elysiav1.png')} 
       style={{flex: 1}}>

        <ScrollView 
         style={{
          marginTop: 150, 
          paddingHorizontal: 20,
          paddingTop: 20,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          }}>

         <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', alignItems: 'center',}}>
          Silakan Masukan Email dan Password Kamu ya!
          </Text>

          <Text style={{ padding: 10, margin: 10, color: 'red' }}>
          {this.state.email}
        </Text>

        <TextInput
          placeholder="Enter Email"
          style={{ backgroundColor: '#ffffff', 
          paddingLeft: 10,
          borderRadius: 6,
          elevation: 3,
          paddingVertical: 6,
          marginTop: -30,
         }}
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
         }}
          onChangeText={(userPassword) => this.setState({ userPassword })}
        />

        <TouchableOpacity
          onPress={this.login}
          style={{
            padding: 10,
            paddingLeft: 10,
            borderRadius: 6,
            marginTop: 10,
            backgroundColor: 'magenta',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>

        </ScrollView>
      </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
