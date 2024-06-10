import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { loopThroughJSON } from './helpers'

export const getAll = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)
        return items.map(([key, value]) => ({ [key]: value }))
    } catch (error) {
        console.error(error)
    }
}

export const useGetAll = () => {
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        getAll()
            .then(setState)
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [])
    return { state, loading }
}
