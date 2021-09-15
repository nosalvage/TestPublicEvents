import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const EventTouchable = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
`;

const EventListItem = ({data = {}, ...props}) => {
  const {} = data;

  return <EventTouchable {...props} />;
};

EventListItem.propTypes = {
  data: PropTypes.object,
  onPress: PropTypes.func,
};

export default EventListItem;
