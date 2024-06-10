import { NavigationContainer } from '@react-navigation/native'
import { linking } from '../navigation/links'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../state/slices/auth'
import AuthedStack from '../navigation/stacks/AuthedStack'
import LoginStack from '../navigation/stacks/LoginStack'

export default function Screens() {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <NavigationContainer {...{ linking }}>
            {isLoggedIn ? <AuthedStack /> : <LoginStack />}
        </NavigationContainer>
    )
}
