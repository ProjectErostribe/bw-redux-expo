import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStore } from 'redux';
import CounterApp from './CounterApp';
import { Provider } from 'react-redux';


const initialState = {
  counter: 0
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {
        counter: state.counter + 1
      }
      case 'DECREASE_COUNTER':
        return{
          counter: state.counter -1
        }
  return state;
}

const store = createStore(reducer);

export default function App () {
  return(
    <Provider store={store}>
      <CounterApp />
    </Provider>  
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
