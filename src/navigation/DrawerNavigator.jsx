import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ThemeContext } from '../context/ThemeContext';
import CustomDrawerContent from './CustomDrawerContent';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
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
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
