import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import Square from './images/square.svg'

export default class Item extends Component {
  render() {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}>
        <View>
          <Text>Item</Text>
        </View>
        <View>
          <Image source={Square} fill='#f00' width='1rem' />
          {/* <Square fill="red" width={4} /> */}
        </View>
      </View>
    )
  }
}