import React, { useEffect, useRef, useContext } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

const AppSkeletonLoader = ({
    width = '100%',
    height = 20,
    borderRadius = 8,
    style,
    circle = false
}) => {
    const { theme } = useContext(ThemeContext);

    // Create an animated value starting at 0.3 opacity
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        // Loop a pulsing animation sequence continuously
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0.8,
                    duration: 800, // 800ms to fade in
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 800, // 800ms to fade out
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [opacity]);

    const skeletonStyle = {
        width: circle ? height : width, // If circle is true, force width to match height
        height: height,
        borderRadius: circle ? height / 2 : borderRadius,
        backgroundColor: theme.colors.textSecondary,
    };

    return (
        <Animated.View
            style={[
                styles.skeleton,
                skeletonStyle,
                { opacity },
                style
            ]}
        />
    );
};

const styles = StyleSheet.create({
    skeleton: {
        overflow: 'hidden',
    },
});

export default AppSkeletonLoader;
