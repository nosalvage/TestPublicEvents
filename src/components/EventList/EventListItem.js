import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EventTouchable = styled.TouchableOpacity`
  flex: 1;
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
    data,
    onPress,
  } = props;

  // :TODO Пример Объекта data УДАЛИТЬ!!!!
  // {
  //   "actor": {
  //     "avatar_url": "https://avatars.githubusercontent.com/u/30645857?",
  //     "display_login": "navs82",
  //     "gravatar_id": "",
  //     "id": 30645857,
  //     "login": "navs82",
  //     "url": "https://api.github.com/users/navs82"
  //   },
  //   "created_at": "2021-09-16T06:07:48Z",
  //   "id": "18009060372",
  //   "payload": {
  //     "before": "059b1d1f8e2c0084f326a252d7d128f3929e473c",
  //     "commits": [[Object]],
  //     "distinct_size": 1,
  //     "head": "3a91a6f035e32d14b5658d8d81f0069628df9477",
  //     "push_id": 7945706284,
  //     "ref": "refs/heads/master",
  //     "size": 1
  //   },
  //   "public": true,
  //   "repo": {
  //     "id": 236274115,
  //     "name": "navs82/emacs_init",
  //     "url": "https://api.github.com/repos/navs82/emacs_init"
  //   },
  //   "type": "PushEvent"
  // }

  const onPressByItem = () => {
    onPress(data);
  }

  return (
    <EventTouchable
      onPress={onPressByItem}
    >
      <EventLogin numberOfLines={1}>
        {data.actor?.login ?? 'Без названия'}
      </EventLogin>
    </EventTouchable>
  );
};

EventListItem.propTypes = {
  data: PropTypes.object,
  onPress: PropTypes.func,
};

export default EventListItem;
