import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import AppText from './AppText';

export default function AppButton({ title, onPress }) {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme.colors.primary,
        padding: theme.spacing.md,
        borderRadius: 8,
      }}
    >
      <AppText weight="bold">{title}</AppText>
    </TouchableOpacity>
  );
}
