import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';


const Container = styled.View`
  flex: 1;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  background: white;
`;

const ContainerArea = styled(SafeAreaView)`
  flex: 1;
`;

const ContainerCenter = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
  background: white;
`;

const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

const Text = styled.Text`

`;

const ScrollView = styled.ScrollView``;


const EventDetails = (props) => {
  const { route } = props;
  const data = route.params?.data;


  if (!data) {
    return (
      <ContainerCenter>
        <Text>Нет данных</Text>
      </ContainerCenter>
    )
  }
  const {
    actor,
    repo,
  } = data;

  return (
    <Container>
      <ContainerArea edges={['bottom']}>
        <ScrollView>
          <Title>{actor.login}</Title>
          <Image source={{ uri: actor.avatar_url }} resizeMode="cover" />
          <Text>Репозиторий: {repo.name}</Text>
        </ScrollView>
      </ContainerArea>
    </Container>
  );
};

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

export default EventDetails;
