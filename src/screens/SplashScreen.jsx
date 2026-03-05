import React, { useEffect, useRef, useContext } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const SplashScreen = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);

    // Animation values
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        // Start animations when the component mounts
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 4,
                tension: 40,
                useNativeDriver: true,
            }),
        ]).start();

        // Navigate to Login Stack after delay
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 1500); // 1.5 seconds delay

        // Cleanup timer on unmount
        return () => clearTimeout(timer);
    }, [fadeAnim, scaleAnim, navigation]);

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Animated.View
                style={[
                    styles.logoContainer,
                    {
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                <Text style={[styles.logoText, { color: theme.colors.primary }]}>
                    spash screen
                </Text>

            </Animated.View>
            <Animated.Text
                style={[
                    styles.footer,
                    {
                        color: theme.colors.textSecondary,
                        opacity: fadeAnim,
                    },
                ]}
            >
                v0.0.1
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoText: {
        fontSize: 42,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: 1,
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        fontSize: 14,
    },
});

export default SplashScreen;
