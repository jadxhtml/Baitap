import {StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Square = (props) => {
  return (
    <View style = {style.Outside}>
      <View style = {style.Square}>
        <Text style = {style.Text}> Hello {props.name}! </Text> 

      </View>
    </View>
  );
}
const style = StyleSheet.create({
  Outside: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  Square: {
    marginTop: 800,
    width: 150, 
    height: 150,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});


export default Square;