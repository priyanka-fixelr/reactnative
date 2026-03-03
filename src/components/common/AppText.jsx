import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

export default function AppText({
  children,
  size = 'md',
  weight = 'regular',
  style,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <Text
      style={[
        {
          fontSize: theme.fontSizes[size],
          fontWeight: theme.fontWeights[weight],
          fontFamily: theme.fontFamilies.regular,
          color: theme.colors.text,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
