import { useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { colors, layout, typography } from '../../utility/theme'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { usersApi } from '../../state/api/users'
import { setUsers, selectUsers } from '../../state/slices/users'
import Header from '../../components/Header'

export default function Users() {
    const { data, error, isLoading } = usersApi.endpoints.getUsers.useQuery()
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const users = useSelector(selectUsers)

    useEffect(() => {
        if (data) dispatch(setUsers(data))
    }, [data])

    const navigateToUser = id => {
        navigation.navigate('User', { id })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title='Users' />
            <Text style={styles.title}>Welcome to the Users Screen!</Text>
            <Text style={styles.subtitle}>Users:</Text>
            <ScrollView>
                <View style={styles.wrapper}>
                    {users?.map(user => (
                        <TouchableOpacity key={user.id} style={styles.user} onPress={() => navigateToUser(user.id)}>
                            <Text style={styles.userText}>
                                {user.firstName} {user.lastName}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    {isLoading && <ActivityIndicator />}
                    {!!error && <Text>Error: {error.error}</Text>}
                </View>
            </ScrollView>
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
        marginHorizontal: 16,
    },
    user: {
        padding: 16,
        backgroundColor: colors.light,
        marginVertical: 8,
        borderRadius: 4,
    },
    userText: {
        ...typography.h2,
    },
})
