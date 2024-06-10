import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Screens from './screens'

import store, { persistor } from './state/store'

export default function App() {
    return (
        <Provider {...{ store }}>
            <PersistGate {...{ persistor }}>
                <Screens />
            </PersistGate>
        </Provider>
    )
}
