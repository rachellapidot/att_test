import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ContactsList from './contactsList';
import ContactDetails from './contactDetails';

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="ContactsList"
          options={{
            title: 'Randomize Me!',
            headerTitleStyle: {textAlign: 'center'},
          }}
          component={ContactsList}
        />
        <Stack.Screen
          name="Details"
          options={({route}) => ({
            title:
              (route.params as any).contact.name.first +
              ' ' +
              (route.params as any).contact.name.last,
            headerTitleStyle: {textAlign: 'center'},
          })}
          component={ContactDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const Stack = createStackNavigator();
