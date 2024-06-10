import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { colors, layout, typography } from '../../utility/theme'
import Header from '../../components/Header'

export default function State() {
    const selectAuth = state => state.auth
    const state = useSelector(selectAuth)

    return (
        <SafeAreaView style={styles.container}>
            <Header title='State' />
            <ScrollView>
                <View style={styles.state}>
                    <Text style={styles.text}>{JSON.stringify(state, null, 2)}</Text>
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
