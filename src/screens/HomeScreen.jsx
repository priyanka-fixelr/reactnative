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
        showBack={false}
        rightText="Edit"
        onRightPress={() => console.log('Edit pressed')}
      />
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={[styles.themeButton, { color: theme.colors.primary }]}>
            Toggle Theme
          </Text>
        </TouchableOpacity>
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
