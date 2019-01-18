import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Footer extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.deleteItemsDone()}>
        <View style={styles.container}>
          <Text style={styles.text}>Remove completed items</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#b80703',
    fontSize: 16,
  }
})