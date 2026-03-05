import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../context/ThemeContext';
import AppHeader from '../components/common/AppHeader';

const ProfileScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { username } = useSelector((state) => state.auth);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppHeader
        title="Profile"
        showBack={true}
        rightText="Edit"
        onRightPress={() => console.log('Edit pressed')}
      />

      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Welcome, {username || 'Guest'}!
        </Text>

        <TouchableOpacity onPress={toggleTheme} style={styles.button}>
          <Text style={[styles.themeButton, { color: theme.colors.primary }]}>
            Toggle Theme
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
  themeButton: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
