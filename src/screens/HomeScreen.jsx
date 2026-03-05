import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../components/common/AppHeader';
const HomeScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View>
      <AppHeader
        title="Home"
        showBack={true}
        rightText="Edit"
        onRightPress={() => console.log('Edit pressed')}
      />
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Welcome to React Native Boiler
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          Your app is working!
        </Text>
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={[styles.themeButton, { color: theme.colors.primary }]}>
            Toggle Theme
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ marginTop: 20 }}>
          <Text style={{ color: theme.colors.primary, fontSize: 16 }}>Go to Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  themeButton: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
