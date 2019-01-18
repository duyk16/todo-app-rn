import React, {Component} from 'react';
import {
  StyleSheet, Text, View, ScrollView
} from 'react-native';

import Title from './Title'
import Footer from './Footer'
import Input from './Input'
import Item from './Item';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 10}}>
          <Title />
        </View>

        <View style={{flex: 80}}>
          <Input />
          <ScrollView >
            <Item />
          </ScrollView>
        </View>

        <View style={{flex: 10}}>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
