import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

const AppTextInput = ({
    label,
    error,
    containerStyle,
    style,
    placeholderTextColor,
    ...props
}) => {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={[styles.container, containerStyle]}>
            {label && (
                <Text style={[styles.label, { color: theme.colors.text }]}>
                    {label}
                </Text>
            )}

            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: theme.colors.background,
                        color: theme.colors.text,
                        borderColor: error ? 'red' : theme.colors.textSecondary,
                    },
                    style
                ]}
                placeholderTextColor={placeholderTextColor || theme.colors.textSecondary}
                {...props}
            />

            {error && (
                <Text style={styles.errorText}>
                    {error}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '100%',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        minHeight: 48,
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
});

export default AppTextInput;
