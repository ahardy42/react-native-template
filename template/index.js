// eslint-disable-next-line
import Symbol_observable from 'symbol-observable'
import { AppRegistry, NativeModules } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

if (__DEV__) {
    NativeModules.DevSettings.setIsDebuggingRemotely(true)
}

AppRegistry.registerComponent(appName, () => App)
