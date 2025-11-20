import * as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Pages
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import Signin from './src/pages/Signin';
import Login from './src/pages/Login';
import Phrases from './src/pages/Phrases';
import IMC from './src/pages/IMC';
import Temperature from './src/pages/Temperature';
import ToDoList from './src/pages/ToDoList';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

        <Stack.Screen
          name="Phrases"
          component={Phrases}
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />

        <Stack.Screen
          name="IMC"
          component={IMC}
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />

        <Stack.Screen
          name="ToDoList"
          component={ToDoList}
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />

        <Stack.Screen
          name="Temperature"
          component={Temperature}
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

