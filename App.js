import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

import ActivityScreen from './screens/ActivityScreen';
import DashboardScreen from './screens/DashboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Dashboard' component={DashboardScreen} />
        <Drawer.Screen name='Activities' component={ActivityScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
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
