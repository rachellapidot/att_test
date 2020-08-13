import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {ContactIntreface} from './contactInterface';

const ContactDetails = ({route}) => {
  const contact: ContactIntreface = route.params.contact;
  return contact ? (
    <View key={contact.email} style={styles.wrapper}>
      {/* <Image style={styles.image} source={require('./images/mockLarge.jpg')} /> // for offline  */}
      <Image style={styles.image} source={{uri: contact.picture.large}} />
      <Text style={styles.text}>
        {contact.name.first + ' ' + contact.name.last}
      </Text>
      <Text style={styles.text}>{contact.email}</Text>
      <Text style={styles.text}>
        {contact.location.street.number +
          ' ' +
          contact.location.street.name +
          ', ' +
          contact.location.city +
          ', ' +
          contact.location.country}
      </Text>
      <Text style={styles.text}>{contact.phone}</Text>
      <Text style={styles.text}>{contact.cell}</Text>
    </View>
  ) : (
    <View>
      <Text>Sorry! Some error happen... Please try agian... </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 25,
  },
  image: {
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
  },
});

export default ContactDetails;
