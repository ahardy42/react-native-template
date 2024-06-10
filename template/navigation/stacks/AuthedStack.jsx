import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import individual screens
import HomeScreen from '../../screens/Home'
import UserScreen from '../../screens/User'
import StateScreen from '../../screens/State'
import UsersScreen from '../../screens/Users'
import StorageScreen from '../../screens/Storage'

const Stack = createNativeStackNavigator()

export default function AuthedStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Users' component={UsersScreen} />
            <Stack.Screen name='User' component={UserScreen} />
            <Stack.Screen name='State' component={StateScreen} />
            <Stack.Screen name='Storage' component={StorageScreen} />
        </Stack.Navigator>
    )
}