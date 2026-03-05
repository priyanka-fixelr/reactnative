import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import AppHeader from '../components/common/AppHeader';
import { useNavigation } from '@react-navigation/native';

const NotFoundScreen = () => {
    const { theme } = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <AppHeader
                title="Error 404"
                showBack={true}
            />
            <View style={styles.content}>
                <Text style={[styles.title, { color: theme.colors.text }]}>
                    Oops! Screen Not Found
                </Text>
                <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
                    The page you are looking for does not exist.
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.button}
                >
                    <Text style={{ color: theme.colors.primary, fontSize: 16, fontWeight: 'bold' }}>
                        Go Back
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center'
    },
    button: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    }
});

export default NotFoundScreen;
