import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    FlatList,
    SafeAreaView
} from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

const AppDropdown = ({
    data = [],
    value,
    onSelect,
    label,
    placeholder = 'Select an option',
    error,
    containerStyle,
}) => {
    const { theme } = useContext(ThemeContext);
    const [visible, setVisible] = useState(false);

    const selectedItem = data.find(item => item.value === value);

    const handleSelect = (item) => {
        onSelect(item.value);
        setVisible(false);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.dropdownItem,
                {
                    borderBottomColor: theme.colors.textSecondary + '40', // 40 is hex for 25% opacity
                    backgroundColor: item.value === value ? theme.colors.primary + '20' : theme.colors.background
                }
            ]}
            onPress={() => handleSelect(item)}
        >
            <Text
                style={[
                    styles.itemText,
                    {
                        color: item.value === value ? theme.colors.primary : theme.colors.text,
                        fontWeight: item.value === value ? 'bold' : 'normal'
                    }
                ]}
            >
                {item.label}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, containerStyle]}>
            {label && (
                <Text style={[styles.label, { color: theme.colors.text }]}>
                    {label}
                </Text>
            )}

            <TouchableOpacity
                style={[
                    styles.dropdownButton,
                    {
                        backgroundColor: theme.colors.background,
                        borderColor: error ? 'red' : theme.colors.textSecondary,
                    }
                ]}
                onPress={() => setVisible(true)}
            >
                <Text
                    style={[
                        styles.buttonText,
                        { color: selectedItem ? theme.colors.text : theme.colors.textSecondary }
                    ]}
                >
                    {selectedItem ? selectedItem.label : placeholder}
                </Text>
                <Text style={{ color: theme.colors.textSecondary, fontSize: 16 }}>▼</Text>
            </TouchableOpacity>

            {error && <Text style={styles.errorText}>{error}</Text>}

            <Modal visible={visible} transparent animationType="fade">
                <SafeAreaView style={styles.modalOverlay}>
                    <TouchableOpacity
                        style={styles.modalBackground}
                        activeOpacity={1}
                        onPress={() => setVisible(false)}
                    />
                    <View
                        style={[
                            styles.modalContent,
                            {
                                backgroundColor: theme.colors.background,
                                borderColor: theme.colors.textSecondary,
                            }
                        ]}
                    >
                        <View style={[styles.modalHeader, { borderBottomColor: theme.colors.textSecondary + '40' }]}>
                            <Text style={[styles.modalTitle, { color: theme.colors.text }]}>
                                {placeholder}
                            </Text>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Text style={{ color: theme.colors.primary, fontSize: 16, fontWeight: 'bold' }}>Close</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.value.toString()}
                            renderItem={renderItem}
                            showsVerticalScrollIndicator={false}
                            style={{ maxHeight: 300 }} // Limit height of the list
                        />
                    </View>
                </SafeAreaView>
            </Modal>
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
    dropdownButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        minHeight: 48,
    },
    buttonText: {
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalBackground: {
        ...StyleSheet.absoluteFillObject,
    },
    modalContent: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderWidth: 1,
        borderBottomWidth: 0,
        paddingBottom: 20, // Give some breathing room at the bottom
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dropdownItem: {
        padding: 16,
        borderBottomWidth: 1,
    },
    itemText: {
        fontSize: 16,
    },
});

export default AppDropdown;
