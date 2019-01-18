import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {
  state = {
    text: ''
  }

  render() {
    const { text } = this.state
    return (
      <View style={{
        height: 45,
        borderBottomColor: '#f1f1f1',
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
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={(e) => this.props.addItem(text, e)}
        />
      </View>
    )
  }
}
