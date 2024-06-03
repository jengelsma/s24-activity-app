import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

import ActivityScreen from './screens/ActivityScreen';
import DashboardScreen from './screens/DashboardScreen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Dashboard'
          component={DashboardScreen}
          options={{
            title: 'My Dashboard',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='Activities'
          component={ActivityScreen}
          options={{
            title: 'My Activities',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='walk-outline' color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
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
