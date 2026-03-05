import React, { useContext } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

const AppForm = ({
    children,
    style,
    containerStyle,
    scrollEnabled = true,
    keyboardShouldPersistTaps = 'handled',
    showsVerticalScrollIndicator = false
}) => {
    const { theme } = useContext(ThemeContext);

    // Wrapping in TouchableWithoutFeedback allows dismissing the keyboard by tapping outside
    const content = (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={[styles.innerContent, style]}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <KeyboardAvoidingView
            style={[
                styles.container,
                { backgroundColor: theme.colors.background },
                containerStyle
            ]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} // Adjust offset based on Headers
        >
            {scrollEnabled ? (
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps={keyboardShouldPersistTaps}
                    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                >
                    {content}
                </ScrollView>
            ) : (
                content
            )}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    innerContent: {
        padding: 20,
        flex: 1,
    },
});

export default AppForm;
