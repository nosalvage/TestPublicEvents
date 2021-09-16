import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EventTouchable = styled.TouchableOpacity`
  margin-vertical: 4px;
  justify-content: center;
  background-color: #d6d6d6;
  height: 36px;
  border-width: 1px;
  border-color: #c6c6c6;
  border-radius: 10px;
`;

const EventLogin = styled.Text`
  margin-horizontal: 18px;
`;


const EventListItem = (props) => {
  const {
    item = {},
    onPress,
  } = props;

  const onPressByItem = () => {
    onPress(item);
  }

  return (
    <EventTouchable
      onPress={onPressByItem}
    >
      <EventLogin numberOfLines={1}>
        {item.actor?.login ?? 'Без названия'}
      </EventLogin>
    </EventTouchable>
  );
};

EventListItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};

export default EventListItem;
