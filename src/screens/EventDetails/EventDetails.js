import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import styled from 'styled-components/native';

const Title = styled.Text`
  margin-bottom: 20px;
`;

const Text = styled.Text`
  margin-bottom: 20px;
`;

const EventDetails = () => {
  return (
    <View>
      <Title>123</Title>
      <TouchableOpacity>
        <Text>321</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventDetails;
