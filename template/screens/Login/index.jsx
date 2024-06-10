import React from 'react'
import { View, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native'
import { authApi } from '../../state/api/auth'

export default function LoginScreen() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [login, { data, loading, error }] = authApi.useLoginMutation()

    const handleLogin = () => {
        if (!username || !password) return
        login({ username: username.toLowerCase(), password })
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput placeholder='Username' value={username} onChangeText={setUsername} style={styles.input} />
            <TextInput
                placeholder='Password'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />
            <Button disabled={!username || !password} title='Login' onPress={handleLogin} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginVertical: 10,
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
})
