import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/slices/authSlice';
import { ThemeContext } from '../context/ThemeContext';
import AppForm from '../components/common/AppForm';
import AppTextInput from '../components/common/AppTextInput';
import AppButton from '../components/common/AppButton';
import Toast from '../components/common/Toast';

import { useAuth } from '../hooks/useAuth';
import { validateName, validatePassword } from '../utils/validation';
import { ERROR_MESSAGES } from '../constants';

const LoginScreen = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();

    // Auth hook containing our API service logic
    const { login, isLoading } = useAuth();

    // Form state
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // Toast state
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastType, setToastType] = useState('success');

    const triggerToast = (msg, type) => {
        setToastMessage(msg);
        setToastType(type);
        setShowToast(true);
    };

    const handleLogin = async () => {
        // Run validations from our utils module
        if (!validateName(name) || !validatePassword(password)) {
            triggerToast(ERROR_MESSAGES.VALIDATION_ERROR, 'error');
            return;
        }

        // Execute API call via our custom hook
        const response = await login(name, password);

        if (response.success) {
            // Store credentials in Redux
            dispatch(loginAction({ username: name, password }));

            triggerToast('Login Successful!', 'success');
            // Adding a small delay to let the user see the success toast before navigating
            setTimeout(() => {
                navigation.replace('Main');
            }, 1000);
        } else {
            // Display error messages triggered from the API hook
            triggerToast(response.error, 'error');
        }
    };

    return (
        <View style={styles.screenWrapper}>
            <AppForm containerStyle={{ backgroundColor: theme.colors.background }}>
                <View style={styles.formContainer}>
                    <Text style={[styles.title, { color: theme.colors.primary }]}>Login</Text>

                    <AppTextInput
                        label="Name"
                        placeholder="Enter your name"
                        value={name}
                        onChangeText={setName}
                        editable={!isLoading}
                    />

                    <AppTextInput
                        label="Password"
                        placeholder="Enter your password (min 4 chars)"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        editable={!isLoading}
                    />

                    <View style={styles.buttonContainer}>
                        {isLoading ? (
                            <ActivityIndicator size="large" color={theme.colors.primary} />
                        ) : (
                            <AppButton title="Login" onPress={handleLogin} />
                        )}
                    </View>
                </View>
            </AppForm>

            {showToast && (
                <Toast
                    message={toastMessage}
                    type={toastType}
                    onClose={() => setShowToast(false)}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    screenWrapper: {
        flex: 1,
    },
    formContainer: {
        flex: 1,
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        minHeight: 50, // keeps layout stable when switching from button to spinner
        justifyContent: 'center'
    }
});

export default LoginScreen;
