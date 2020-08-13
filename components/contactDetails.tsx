import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ContactDetails = ({route}) => {
  const {contact} = route.params;
  return contact ? (
    <View style={{display: 'flex', alignItems: 'center', paddingTop: 25}}>
      <Image style={styles.image} source={require('./images/mockLarge.jpg')} />
      {/* <Image style={styles.image} source={{uri: contact.picture.large}} /> */}
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
  image: {
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
  },
});

export default ContactDetails;
