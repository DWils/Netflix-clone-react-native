import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Components/Home'
import FilmDetail from '../Components/FilmDetail'
import Lecture from '../Components/Lecture'

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "",
                        headerShown: false
                    }}

                />
                <Stack.Screen
                    name="FilmDetail"
                    component={FilmDetail}
                    options={{
                        title: "Détail du film ",
                        headerShown: true
                    }}
                />
                <Stack.Screen
                    name="Lecture"
                    component={Lecture}
                    options={{
                        title: "",
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;