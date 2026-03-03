import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import Toast from '../../components/common/Toast';
import { useNavigation } from '@react-navigation/native';

const NotFoundScreen = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [showToast, setShowToast] = useState(false);

  const handleGoHome = () => {
    setShowToast(true);

    setTimeout(() => {
      navigation.navigate('Home'); // change to your home route name
    }, 1500);
  };

  return (
    <>
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        {/* 404 Text */}
        <Text
          style={[
            styles.code,
            {
              color: theme.colors.primary,
              fontSize: theme.fontSizes.displayLg,
              fontWeight: theme.fontWeights.extraBold,
            },
          ]}
        >
          404
        </Text>

        {/* Title */}
        <Text
          style={[
            styles.title,
            {
              color: theme.colors.text,
              fontSize: theme.fontSizes.xxl,
              fontWeight: theme.fontWeights.bold,
            },
          ]}
        >
          Page Not Found
        </Text>

        {/* Description */}
        <Text
          style={[
            styles.description,
            {
              color: theme.colors.textSecondary,
              fontSize: theme.fontSizes.md,
            },
          ]}
        >
          The screen you're looking for doesn’t exist.
        </Text>

        {/* Button */}
        <TouchableOpacity
          onPress={handleGoHome}
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
        >
          <Text
            style={[
              styles.buttonText,
              {
                fontSize: theme.fontSizes.md,
                fontWeight: theme.fontWeights.semiBold,
              },
            ]}
          >
            Go Home
          </Text>
        </TouchableOpacity>
      </View>

      {showToast && (
        <Toast
          message="Redirecting to Home..."
          type="info"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  code: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
  },
  description: {
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});
