// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>SHOW ME THE FULL HAZEL</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { Text, View } from 'react-native';
import Square from './components/Square'

const onOK = () => {
  console.log("OK");
}

const App = () => {
  return (
    <View>
      <Square name="World" /> 
    </View>
  );
}

export default App;
