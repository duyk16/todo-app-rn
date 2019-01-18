import React, {Component} from 'react';
import {
  StyleSheet, View, ScrollView
} from 'react-native';

import * as Util from './Util'
import Title from './Title'
import Footer from './Footer'
import Input from './Input'
import Item from './Item';

export default class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      todoList: [
        {id: '1', isDone: true, name: 'Check email'},
        {id: '2', isDone: false, name: 'Take a shower'},
        {id: '3', isDone: false, name: 'Brush teeth'},
        {id: '4', isDone: false, name: 'Check email'},
        {id: '5', isDone: false, name: 'Eat Breakfast'}
      ]
    }
    this.addItem          = this.addItem.bind(this)
    this.changeStatus     = this.changeStatus.bind(this)
    this.deleteItem       = this.deleteItem.bind(this)
    this.deleteItemsDone  = this.deleteItemsDone.bind(this)
    
  }
  
  addItem(name) {
    this.setState({
      todoList: [
        {id: Util.guid(), isDone: false, name},
        ...this.state.todoList
      ]
    })
  }

  changeStatus(id) {
    const todoList = this.state.todoList.map((item) => {
      item.id === id && (item.isDone = !item.isDone)
      return item
    })
    this.setState({todoList})
  }

  deleteItem(id) {
    const todoList = this.state.todoList.filter((item) => item.id != id)
    this.setState({todoList})
  }

  deleteItemsDone() {
    const todoList = this.state.todoList.filter((item) => !item.isDone)
    this.setState({todoList})
  }

  render() {
    const {todoList} = this.state
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 10}}>
          <Title />
        </View>

        <View style={{flex: 80}}>
          <Input addItem={this.addItem} />
          <ScrollView >
            {todoList.map((item, key) => {
              return (
                <Item id={item.id} 
                  name={item.name} 
                  isDone={item.isDone}
                  changeStatus={this.changeStatus}
                  deleteItem={this.deleteItem}
                  key={key} />
              )
            })}
          </ScrollView>
        </View>

        <View style={{flex: 10}}>
          <Footer deleteItemsDone={this.deleteItemsDone} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
