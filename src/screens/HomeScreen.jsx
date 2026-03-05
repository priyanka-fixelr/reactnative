import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { useGetUserData } from '../hooks/useGetUserData';
import AppHeader from '../components/common/AppHeader';

const HomeScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();

  // React Query usage
  const { data: userData, isLoading, isError, refetch } = useGetUserData();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppHeader
        title="Home"
        showBack={false}
        rightText="Profile"
        onRightPress={() => navigation.navigate('Profile')}
      />

      <View style={styles.content}>
    

        <TouchableOpacity onPress={refetch} style={styles.button}>
          <Text style={[styles.themeButton, { color: theme.colors.primary }]}>
            Refetch Data
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleTheme} style={styles.button}>
          <Text style={[styles.themeButton, { color: theme.colors.primary }]}>
            Toggle Theme
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("NotFound")} style={styles.button}>
          <Text style={[styles.themeButton, { color: theme.colors.primary }]}>
            Go to Not Found
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
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  button: {
    marginTop: 15,
  },
  themeButton: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
