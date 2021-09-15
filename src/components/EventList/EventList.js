import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';

import EventListItem from './EventListItem';

const FlatList = styled.FlatList``;

const Separator = styled.View`
  height: 1px;
  background-color: #DDD:
`;

const EventList = ({onPress = () => {}, type, ...props}) => {
  const renderItem = ({item, index}) => (
    <EventListItem data={item} onPress={() => onPress(item.id)} />
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <Separator />}
      horizontal={false}
      scrollEnabled
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
      {...props}
    />
  );
};

EventListItem.propTypes = {
  onPress: PropTypes.func,
};

export default EventList;
