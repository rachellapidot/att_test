import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const mockCont = require('./contactMockData.json');

const Contact: React.FC<{
  onPress: (contactDetails: any) => void;
}> = ({onPress}) => {
  const [isLoading, setLoading] = useState(true);
  const [contact, setContact] = useState<any>();

  useEffect(() => {
    setLoading(true);
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((json) => {
        setContact(json.results[0]);
      })
      .catch((error) => {
        console.error(error);

        setContact(mockCont.results[0]);
      })
      .finally(() => setLoading(false));
  }, []);

  return isLoading || !contact ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d5d5d6',
        margin: 10,
        padding: 10,
      }}>
      <TouchableOpacity onPress={() => onPress(contact)}>
        <Image
          style={{marginBottom: 5, width: 100, height: 100}}
          source={require('./images/mockImage.jpg')}
        />
        <Text>{contact.name.first + ' ' + contact.name.last}</Text>
        {/* <Image source={{uri: contact.picture.medium}} /> */}
      </TouchableOpacity>
    </View>
  );
};

export default Contact;
