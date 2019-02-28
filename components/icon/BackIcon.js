import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default props => (
  <TouchableOpacity {...props}>
    <Image source={require('./assets/back-icon.png')} />
  </TouchableOpacity>
);
