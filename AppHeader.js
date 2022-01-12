import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>💜𝔹𝕋𝕊💜</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'black',
    height: 70,
  },
  text: {
    color: 'white',
    margin: 'auto',
    marginTop:0,
    marginBottom: '0px',
    fontSize: '45px',
    fontWeight: 'bold',
    padding: '5px',
  },
});
