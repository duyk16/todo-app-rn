import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {
  render() {
    return (
      <View style={{
        height: 45,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 15
    }}>
        <TextInput style={{
            fontSize: 18,
        }} 
            autoFocus={true}
            placeholder="Enter an item!"
            placeholderTextColor='#999'
        />
      </View>
    )
  }
}
