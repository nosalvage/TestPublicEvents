import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styled from 'styled-components/native';
import EventList from '../../components/EventList/EventList';
import {fetchEvents} from '../../redux/modules/events/actions';

const Title = styled.Text`
  margin-bottom: 20px;
`;

const Text = styled.Text`
  margin-bottom: 20px;
`;

const Events = () => {
  const dispatch = useDispatch();
  const setLanguage = () => {};

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchEvents());
      } catch (error) {
        console.warn(error, 'error at fetch');
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <View>
      <EventList />
    </View>
  );
};

export default Events;
