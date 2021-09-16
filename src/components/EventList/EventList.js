import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';

import EventListItem from './EventListItem';

const FlatList = styled.FlatList``;

const Separator = styled.View`
  height: 1px;
  background-color: #DDD:
`;

const EventList = (props) => {
  const {
    data = [],
    onPress,
  } = props;

  const renderItem = ({ item }) => (
    <EventListItem
      data={item}
      onPress={onPress}
    />
  );

  const getKeyExtractor = (item) => item.id;

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false} // :TODO Нужно ли скрывать?
      // ItemSeparatorComponent={() => <Separator />}
      // scrollEnabled
      renderItem={renderItem}
      keyExtractor={getKeyExtractor}
    />
  );
};

EventListItem.propTypes = {
  onPress: PropTypes.func,
};

export default EventList;
