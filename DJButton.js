import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
export default class DJButton extends React.Component {
  playSound = async () => {
    await Audio.setIsEnabledAsync(true);
    await Audio.Sound.createAsync(
      {
        uri: this.props.uri,
      },
      {
        shouldPlay: true,
      }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.soundButton, {backgroundColor:this.props.bgcolor}]}
        onPress={this.playSound}>
        <Text style={styles.soundButtonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  soundButton: {
    width:300,
    height:100,
    borderRadius: 20,
    borderWidth:3,
    alignSelf:'center',
    justifyContent:'center',
    marginTop:10,
    borderColor: 'rgba(0,0,0,0.3)',
   
  },
  soundButtonText:{ 
    fontFamily: 'Trebuchet MS', 
    fontSize: 20 ,
    fontWeight:'bold',
    color:'black',
    marginLeft:50
    },
});
