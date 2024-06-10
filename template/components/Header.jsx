import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { layout } from '../utility/theme'

export default function Header({ title }) {
    const navigation = useNavigation()
    const navigateBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={navigateBack} style={styles.button}>
                <Text>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.spacer} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        ...layout.row,
        padding: 16,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        width: 60,
        backgroundColor: 'lightgray',
        borderRadius: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    spacer: {
        width: 60,
    },
})