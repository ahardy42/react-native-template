import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'

export default function HomeScreen() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen!</Text>
            <Text style={styles.subtitle}>Please select a screen to navigate to:</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Users')}>
                <Text style={{ textAlign: 'center', fontSize: 18, color: 'blue' }}>View Users</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Storage')}>
                <Text style={{ textAlign: 'center', fontSize: 18, color: 'blue' }}>View Storage</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('State')}>
                <Text style={{ textAlign: 'center', fontSize: 18, color: 'blue' }}>View State</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 48,
        marginTop: 16,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 16,
        textAlign: 'center',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    user: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 2,
        backgroundColor: 'lightgray',
    },
    userText: {
        fontSize: 16,
    },
})
