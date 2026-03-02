import React, { useContext } from 'react';
import { View } from 'react-native';
import AppText from '../components/common/AppText';
import AppButton from '../components/common/AppButton';
import { ThemeContext } from '../context/ThemeContext';

export default function HomeScreen() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText size="xl" weight="bold">
        Welcome 🚀
      </AppText>
      <AppButton title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}