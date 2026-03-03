import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

import { ThemeContext } from '../../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';

const AppHeader = ({ title, showBack = false, rightText, onRightPress }) => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          borderBottomColor: theme.colors.textSecondary,
        },
      ]}
    >
      {/* LEFT SIDE */}
      <View style={styles.sideContainer}>
        {showBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 24, color: theme.colors.primary }}>←</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 22 }} />
        )}
      </View>

      {/* CENTER TITLE */}
      <View style={styles.titleContainer}>
        <Text
          style={{
            color: theme.colors.text,
            fontSize: theme.fontSizes.lg,
            fontWeight: theme.fontWeights.semiBold,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>

      {/* RIGHT SIDE */}
      <View style={styles.rightContainer}>
        {rightText ? (
          <TouchableOpacity onPress={onRightPress}>
            <Text
              style={{
                color: theme.colors.primary,
                fontSize: theme.fontSizes.md,
                fontWeight: theme.fontWeights.medium,
              }}
            >
              {rightText}
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} />
        )}
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
  },
  sideContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
