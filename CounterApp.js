import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Connect } from 'react-redux';



function CounterApp (props) {

  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1 );
  }

  const decreaseCounter = () => {
    setCounter(counter - 1 );
  }
  
    return(
      <View style={styles.container}>
        <View style={{flexDirection: 'row', width: 200,
      justifyContent:'space-around'}}>
        <TouchableOpacity onPress={()=>props.increaseCounter()}>
          <Text style={{ fontSize: 20 }}>Increase</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>{props.counter}</Text>
        <TouchableOpacity onPress={()=>props.decreaseCounter()}>
          <Text style={{ fontSize: 20 }}>Decrease</Text>
        </TouchableOpacity>
        </View>
        </View>
        );

}

function mapStateToProps(state) {
    return{
        counter: state.counter
    }
}

function mapDispatchToProps = (dispatch) => {
    return{
        increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),

export default Connect(mapStateToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
