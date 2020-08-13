import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {ContactIntreface} from './contactInterface';

const mockCont = require('./contactMockData.json');

const Contact: React.FC<{
  onPress: (contactDetails: ContactIntreface) => void;
}> = ({onPress}) => {
  const [isLoading, setLoading] = useState(true);
  const [contact, setContact] = useState<ContactIntreface>();

  useEffect(() => {
    setLoading(true);
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((json) => {
        setContact(json.results[0] as ContactIntreface);
      })
      .catch((error) => {
        console.error(error);

        setContact(mockCont.results[0] as ContactIntreface);
      })
      .finally(() => setLoading(false));
  }, []);

  return isLoading || !contact ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => onPress(contact)}>
        {/* <Image
          style={styles.image}
          source={require('./images/mockImage.jpg')}
        /> // for offline */}
        <Image style={styles.image} source={{uri: contact.picture.medium}} />
        <Text>{contact.name.first + ' ' + contact.name.last}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d5d5d6',
    margin: 10,
    padding: 10,
  },
  image: {
    marginBottom: 5,
    width: 100,
    height: 100,
  },
});
export default Contact;
