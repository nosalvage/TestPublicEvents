import React, { useState, useEffect, useRef, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import styled from 'styled-components/native';
import EventList from '../../components/EventList/EventList';

import {fetchEvents} from '../../redux/modules/events/actions';
import { eventsDataSelector, eventsIsFetchingSelector } from '../../redux/modules/events/selectors';

import useTimeout from '../../hooks/useTimeout'

const ContainerArea = styled(SafeAreaView)`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  background: white;
`

const BtnUpd = styled.TouchableOpacity`
  margin-vertical: 10px;
  justify-content: center;
  align-items: center;
  height: 36px;
  border-width: 1px;
  border-color: #c6c6c6;
  border-radius: 10px;
`

const Text = styled.Text`
  font-size: 14px;
  line-height: 16px;
`;
const TextWhite = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: white;
`;

const Loader = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  z-index: 5;
`


const TIME_MANUALL_UPD = 15000;
const TIME_AUTO_UPD = 60000;

const BtnUpdate = (props) => {
  const {
    disabled = false,
    onPress,
  } = props;

  return (
    <BtnUpd
      disabled={disabled}
      onPress={onPress}
    >
      <Text>
        Обновить
      </Text>
    </BtnUpd>
  )
}

const Events = () => {
  const data = useSelector(eventsDataSelector);
  const isFetching = useSelector(eventsIsFetchingSelector);

  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const [isManualUpd, setManualUpd] = useState(false);

  const isFocused = useIsFocused();


  useEffect(() => {
    if (isFocused) {
      updateAutoList();
    } else {
      timerManualUpd.clearTimer();
      timerAutoUpd.clearTimer();
    }
    return () => {
      timerManualUpd.clearTimer();
      timerAutoUpd.clearTimer();
    }
  }, [isFocused, dispatch])


  const updateList = async () => {
    try {
      setManualUpd(false);
      await dispatch(fetchEvents());
      timerManualUpd.startTimer();
    } catch (error) {
      console.warn(error, 'error at fetch');
    }
  }

  const updateAutoList = () => {
    updateList();
    timerAutoUpd.startTimer();
  }
  const updateManualList = () => {
    timerAutoUpd.clearTimer();
    updateAutoList();
  }

  const unlockingManualUpd = () => setManualUpd(true);

  const onPress = (dataByItem) => {
    navigate('EventDetails', { data: dataByItem });
  }

  const timerManualUpd = useTimeout(unlockingManualUpd, TIME_MANUALL_UPD);
  const timerAutoUpd = useTimeout(updateAutoList, TIME_AUTO_UPD);


  return (
    <Container>
      <ContainerArea edges={['bottom']}>
        <BtnUpdate
          disabled={!isManualUpd}
          onPress={updateManualList}
        />
        <EventList
          data={data}
          onPress={onPress}
        />
      </ContainerArea>

      {
        isFetching
          ? (
            <Loader>
              <TextWhite>Обновление</TextWhite>
            </Loader>
          )
          : null
      }
    </Container>
  );
};

export default Events;
