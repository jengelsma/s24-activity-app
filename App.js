import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

import ActivityScreen from './screens/ActivityScreen';
import DashboardScreen from './screens/DashboardScreen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='Dashboard'
          component={DashboardScreen}
          options={{
            title: 'My Dashboard',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='home' color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name='Activities'
          component={ActivityScreen}
          options={{
            title: 'My Activities',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='walk-outline' color={color} size={size} />
            ),
          }}
        />
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
