import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

export default class Item extends Component {
  render() {
    const color = this.props.isDone ? '#999' : ''
    return (
      
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
          paddingHorizontal: 20,
          marginBottom: 5,
          backgroundColor: 'white',
        }}>
          <View>
            <Text style={{fontSize: 16, color: color}}>{this.props.name}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={0.7} 
              onPress={() => this.props.changeStatus(this.props.id)}>
              {this.props.isDone ? checkedIcon : unCheckedIcon}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} 
              onPress={() => this.props.deleteItem(this.props.id)}>
              {cancelIcon}
            </TouchableOpacity>

            {/* <Square fill="red" width={4} /> */}
          </View>
        </View>
    )
  }
}

const unCheckedIcon = (<Image style={{width: 25, height: 25, marginHorizontal: 10}} source={require('./images/square.png')} />)
const checkedIcon = (<Image style={{width: 25, height: 25, marginHorizontal: 10}} source={require('./images/checked.png')} />)
const cancelIcon = (<Image style={{width: 25, height: 25, marginHorizontal: 10}} source={require('./images/close.png')} />)