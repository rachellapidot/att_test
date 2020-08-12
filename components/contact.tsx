import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';

const mockCont = require('./contactMockData.json');

const Contact: React.FC<{}> = () => {
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

  console.warn(contact?.picture);

  return isLoading || !contact ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <View style={{flex: 1, padding: 24}}>
      <Image source={{uri: contact.picture.large}} />
    </View>
  );
};

export default Contact;
