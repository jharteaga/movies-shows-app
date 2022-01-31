import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ShowDetails } from '../screens'
import TabStack from './TabStack'

const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen
          name="TabNavigator"
          component={TabStack}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ShowDetails"
          component={ShowDetails}
          options={{
            headerBackTitle: 'Back to List'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
