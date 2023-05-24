import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
       <Text style={styles.text}> Click Me </Text>
         </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: 'black',
    width: 150,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center'
    
  },
  text:{
    color: '#f0f',
    fontSize: 30,
    justifyContent: 'center',
    marginHorizontal: 10

  }
});
