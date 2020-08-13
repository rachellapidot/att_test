import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Contact from './contact';
const contacts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const ContactsList = ({navigation}) => {
  return (
    <SafeAreaView>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={contacts}
        renderItem={({item}) => (
          <Contact
            key={item}
            onPress={(contact) => {
              navigation.navigate('Details', {contact});
            }}
          />
        )}></FlatList>
    </SafeAreaView>
  );
};
export default ContactsList;
