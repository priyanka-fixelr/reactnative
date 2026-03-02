import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </View>
  );
}