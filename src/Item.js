import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

export default class Item extends Component {
  render() {
    const bgColor = this.props.isDone ? '#f1f1f1' : 'white'
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
            <Text style={{fontSize: 16,}}>{this.props.name}</Text>
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