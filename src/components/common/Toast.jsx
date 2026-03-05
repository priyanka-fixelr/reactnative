import React, { useContext, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

const Toast = ({ message, type = 'success', onClose }) => {
  const { theme } = useContext(ThemeContext);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        onClose();
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose, fadeAnim]);

  const backgroundColors = {
    success: theme.colors.primary,
    error: '#E53935',
    info: '#2196F3',
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColors[type],
          bottom: theme.spacing.lg,
          left: theme.spacing.lg,
          right: theme.spacing.lg,
          opacity: fadeAnim,
        }
      ]}
    >
      <Text style={[styles.text, { color: theme.colors.background }]}>
        {message}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  }
});

export default Toast;
