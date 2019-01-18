import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

export default class Input extends Component {
  state = {
    text: ''
  }

  render() {
    const { text } = this.state
    return (
      <View style={{
        height: 50,
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 5,
        paddingVertical: 15,
        paddingHorizontal: 15,
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
