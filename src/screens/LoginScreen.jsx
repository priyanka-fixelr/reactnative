import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import AppForm from '../components/common/AppForm';
import AppTextInput from '../components/common/AppTextInput';
import AppButton from '../components/common/AppButton';
import Toast from '../components/common/Toast';

const LoginScreen = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastType, setToastType] = useState('success');

    const handleLogin = () => {
        if (name && password) {
            setToastMessage('Login Successful!');
            setToastType('success');
            setShowToast(true);

            // Adding a small delay to let the user see the success toast before navigating
            setTimeout(() => {
                navigation.replace('Main');
            }, 1000);
        } else {
            setToastMessage('Please enter both name and password.');
            setToastType('error');
            setShowToast(true);
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
                    />

                    <AppTextInput
                        label="Password"
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <View style={styles.buttonContainer}>
                        <AppButton title="Login" onPress={handleLogin} />
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
    }
});

export default LoginScreen;
