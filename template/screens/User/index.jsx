import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { usersApi } from '../../state/api/users'
import { useSelector, useDispatch } from 'react-redux'
import { selectSelectedUser, setSelectedUser } from '../../state/slices/users'

export default function UserScreen({ route }) {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const selectedUser = useSelector(selectSelectedUser)
    // use the `useQuery` hook to fetch the user data
    const { data, error, isLoading } = usersApi.endpoints.getUser.useQuery(route.params.id, { skip: !route.params.id })

    React.useEffect(() => {
        console.log('User data:', data)
        if (data) dispatch(setSelectedUser(data))
        return () => dispatch(setSelectedUser(null))
    }, [data])

    const navigateBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack} style={styles.button}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>User Screen</Text>
                <View style={styles.spacer} />
            </View>
            <Text style={styles.subtitle}>User Information:</Text>
            <Text>ID: {route.params.id}</Text>
            <View style={styles.separator} />
            <View style={styles.wrapper}>
                {isLoading && <Text>Loading...</Text>}
                {!!error && <Text>Error: {error.message}</Text>}
                {!!selectedUser && (
                    <View>
                        <Text>Name: {selectedUser.firstName} {selectedUser.lastName}</Text>
                        <Text>Email: {selectedUser.email}</Text>
                        <Text>Phone: {selectedUser.phone}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 16,
    },
    wrapper: {
        marginTop: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        marginTop: 8,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginVertical: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        paddingVertical: 8,
        backgroundColor: 'lightgray',
        borderRadius: 8,
        alignItems: 'center',
        width: 64,
    },
    spacer: {
        width: 64,
    },
})
