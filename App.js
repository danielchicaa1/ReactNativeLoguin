
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './assets/styles/allstyles'
import LoginScreen from './components/LoginScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );
}

