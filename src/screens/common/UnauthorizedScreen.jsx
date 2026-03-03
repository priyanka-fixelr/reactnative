import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

export default function UnauthorizedScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        401 - Unauthorized
      </Text>
      <Text style={{ color: theme.colors.text }}>
        You don’t have permission to access this page.
      </Text>

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
        color={theme.colors.primary} // optional button color
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
