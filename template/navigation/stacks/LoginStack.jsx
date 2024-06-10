import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import individual screens
import LoginScreen from '../../screens/Login'

const Stack = createNativeStackNavigator()

export default function LoginStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
    )
}