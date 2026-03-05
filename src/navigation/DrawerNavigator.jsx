import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ThemeContext } from '../context/ThemeContext';
import BottomTabs from './BottomTabs';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.colors.background,
          width: 260,
        },
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.textSecondary,
      }}
    >
      <Drawer.Screen name="MainTabs" component={BottomTabs} options={{ title: 'Home' }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Drawer.Screen  drawerStyle={{color:"red"}}   name="Logout" component={LoginScreen} options={{ title: 'Logout' }} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
