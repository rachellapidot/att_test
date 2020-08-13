import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Contact from './contact';
import {ContactIntreface} from './contactInterface';
const contacts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const ContactsList = ({navigation}) => {
  return (
    <SafeAreaView>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={contacts}
        keyExtractor={(item) => item.toString()}
        renderItem={() => (
          <Contact
            onPress={(contact: ContactIntreface) => {
              navigation.navigate('Details', {contact});
            }}
          />
        )}></FlatList>
    </SafeAreaView>
  );
};
export default ContactsList;
