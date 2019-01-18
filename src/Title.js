import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

  render() {
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <Text style={styles.text}>Todo List</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: 'rgb(138, 206, 233)',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    }
})