import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './src/screens/Dashboard';
import Appointments from './src/screens/Appointments';
import Medications from './src/screens/Medications';
import Records from './src/screens/Records';
import { colors } from './src/theme';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.background },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarActiveTintColor: colors.brand,
          tabBarInactiveTintColor: '#94A3B8',
          tabBarStyle: { backgroundColor: '#fff' },
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          tabBarIcon: ({ color, size }) => {
            const map: Record<string, keyof typeof Ionicons.glyphMap> = {
              Dashboard: 'grid',
              Appointments: 'calendar',
              Medications: 'medkit',
              Records: 'document-text-outline',
            };
            const name = map[route.name] || 'ellipse';
            return <Ionicons name={name} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Medications" component={Medications} />
        <Tab.Screen name="Records" component={Records} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
