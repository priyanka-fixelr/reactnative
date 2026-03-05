import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const AppHeader = ({ title, showBack = false, rightText, onRightPress }) => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.sideContainer}>
        {showBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[styles.backButton, { color: theme.colors.primary, fontWeight: 'bold' }]}>
              {'<--'}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text style={[styles.backButton, { color: theme.colors.primary, fontWeight: 'bold' }]}>
              Menu
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {title}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        {rightText && (
          <TouchableOpacity onPress={onRightPress}>
            <Text style={[styles.rightText, { color: theme.colors.primary }]}>
              {rightText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  sideContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    fontSize: 16,
  },
  rightText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
