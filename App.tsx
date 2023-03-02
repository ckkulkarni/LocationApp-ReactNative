import React from 'react';
import Base from './App/Base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './App/store';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Map from './App/Map';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
const stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen name="Location Manager" component={Base} />
            <stack.Screen name="Map" component={Map} />
          </stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
