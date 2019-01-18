import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

export default class Item extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isDone: false
    }
  }
  
  changeStatus() {
    this.setState({
      isDone: !this.state.isDone
    })
  }
  
  render() {
    const bgColor = this.state.isDone ? '#f1f1f1' : 'white'
    return (
      
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderBottomColor: '#f1f1f1',
          borderBottomWidth: 2,
          backgroundColor: bgColor,
        }}>
          <View>
            <Text style={{fontSize: 16,}}>Check email</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.changeStatus()}>
              {this.state.isDone ? checkedIcon : unCheckedIcon}
            </TouchableOpacity>
            {cancelIcon}
            {/* <Square fill="red" width={4} /> */}
          </View>
        </View>
    )
  }
}

const unCheckedIcon = (<Image style={{width: 25, height: 25, marginHorizontal: 10}} source={require('./images/square.png')} />)
const checkedIcon = (<Image style={{width: 25, height: 25, marginHorizontal: 10}} source={require('./images/checked.png')} />)
const cancelIcon = (<Image style={{width: 25, height: 25, marginHorizontal: 10}} source={require('./images/close.png')} />)