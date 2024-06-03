import { StyleSheet, Text, View } from 'react-native';

import ActivityScreen from './screens/ActivityScreen';
import DashboardScreen from './screens/DashboardScreen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityScreen />
      <DashboardScreen />
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
});
