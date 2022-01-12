import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from './DJButton';
import AppHeader from './AppHeader';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4d324e116360bde0ff2425a60d75ffbc"
            text="DYNAMITE"
            bgcolor="skyblue"
          />
        </View>

        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/380b15801bb86169adce81c67b944562"
            text="BUTTER"
            bgcolor="yellow"
          />
        </View>
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/54f73b9870692d059aaa9d1e69498dfc"
            text="PERMISSION TO DANCE"
            bgcolor="orange"
          />
          <DJButton
            uri="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6698a6c56d234137896d2de976edc502"
            text="BOY WITH LUV"
            bgcolor="hotpink"
          />
        
          <DJButton
            uri="https://www.abbeylightshow.com/wp-content/uploads/2021/04/BTS-%E9%98%B2%E5%BC%BE%E5%B0%91%E5%B9%B4%E5%9B%A3-Film-out.mp3"
            text="FILM OUT"
            bgcolor="lightgreen"
          />

          <DJButton
            uri="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/01c901971805b1cddd26f7871cb635b2"
            text="BLACK SWAN"
            bgcolor=""
          />

           <DJButton
            uri="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0ca78799abbb8d43bbbbb4cea5200ae9"
            text="BLUE & GREY"
            bgcolor="lightgrey"
          />


        </View>
        <View style={styles.stopButtonContainer}>
          <TouchableOpacity
            style={styles.stopButton}
            onPress={async() => {
              
              await Audio.setIsEnabledAsync(false);
            }}>
            <Text>STOP MUSIC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stopButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  musicButtonContainer: {
    alignItems: 'center',
  },
  stopButton: {
    width: '80%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.3)',
  },
});
