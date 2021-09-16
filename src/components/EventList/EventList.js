import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';

import EventListItem from './EventListItem';

const FlatList = styled.FlatList``;

const getKeyExtractor = (item) => item.id;

const EventList = (props) => {
  const {
    data = [],
    onPress,
  } = props;

  const renderItem = ({ item }) => (
    <EventListItem
      item={item}
      onPress={onPress}
    />
  );

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={getKeyExtractor}
    />
  );
};

EventListItem.propTypes = {
  data: PropTypes.array,
  onPress: PropTypes.func,
};

export default EventList;
