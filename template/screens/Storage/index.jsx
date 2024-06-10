import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { colors, layout, typography } from '../../utility/theme'
import { useGetAll } from '../../utility/storage'
import Header from '../../components/Header'

export default function Storage() {

    const { state: storage, loading } = useGetAll()
    console.log('storage', storage)
    return (
        <SafeAreaView style={styles.container}>
            <Header title='Storage' />
            <ScrollView>
                <View style={styles.state}>
                    {loading ? (
                        <ActivityIndicator color={colors.white} />
                    ) : (
                        storage.map((item, index) => (
                            <Text key={index} style={styles.text}>
                                {JSON.stringify(item, null, 2)}
                            </Text>
                        ))
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        ...layout.container,
        flex: 1,
        padding: 16,
        backgroundColor: colors.light,
    },
    text: {
        ...typography.tiny,
        color: colors.white,
    },
    title: {
        ...typography.h1,
        textAlign: 'center',
    },
    state: {
        marginHorizontal: 8,
        padding: 8,
        backgroundColor: colors.dark,
        borderRadius: 4,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
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
