import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Card from './components/Card/Card';
import Separator from './components/Separator/Separator';
import Story from './components/Storie/Storie';
import styles from './stylesApp';

const FEED = [
  {
    title: 'BMW M3 1985',
    location: 'Paris, France',
    imageUri:
      'data:image/jpeg;base64,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 ',
    comments: 'what the fuck is this, what a wonderful car',
  },
  {
    title: 'Trip',
    location: 'Paris, France',
    imageUri:
      'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg',
    comments: 'old paris is very beautiful take me please',
  },
  {
    title: 'Graduation',
    location: 'São Paulo, Brasil',
    imageUri:
      'https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/s640x640/268839394_426269569168012_5835187952189378248_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEnJR8R_jPBWaW0wcNaC1MEWHNIZ3gvb6pYc0hneC9vqg_UGzzzbWh-Kj8H78LjlNWr0ZxaLiEvtDz6go_7lWVC&_nc_ohc=sOkMV3hGqHoAX9bo4Kf&_nc_ht=scontent-gru2-2.xx&oh=00_AT_JFaKH3vhzaiw_RC5zbsZPPH8KfA2g8a1m3HwPQPpgcA&oe=620F093E',
    comments: 'Our Elias is growing',
  },
  {
    title: 'Rafael Trestini',
    location: 'Ubatuba, São Paulo',
    imageUri:
      'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/116654345_3185026451582485_3027971154472616536_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHvtPJCaamFiCbBFSvmxriX61HkF448i4XrUeQXjjyLhd1JabmhmNtYijAuAK68scmxoMACR3pU5GIzK0yhwoq1&_nc_ohc=fxwPawQkzFsAX_PcGQK&_nc_ht=scontent-gru2-1.xx&oh=00_AT-GGbK1kMZJlP-JpP4v7upJVFymOg_2WcFlZ9wa_gnqGw&oe=622C773A',
    comments: 'rafael as beautiful as ever',
  },
  {
    title: 'DevTeam',
    location: 'Barueri, São Paulo',
    imageUri: 'https://sof.to/images/team.png',
    comments:
      'an excellent development team, I will raise the salary of everyone except Israel',
  },
  {
    title: 'Dog Husky',
    location: 'Ilhéus, Bahia',
    imageUri:
      'https://love.doghero.com.br/wp-content/uploads/2018/08/husky-siberiano-2.png',
    comments: 'so beautiful dog, i love all time',
  },
  {
    title: 'Beautiful women',
    location: 'New York, New York',
    imageUri:
      'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/92260132_109618197370757_7805412227875340288_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=QUEYk4XKLq8AX8wJ46G&_nc_ht=scontent-gru2-2.xx&oh=00_AT_H2VCqKblB0PzDaAcgPEYquZKXJAd9jvVtCcag9f27_g&oe=622B0B44',
    comments: 'what a beautiful woman, marry me',
  },
];

const STORIE = [
  {
    id: '1',
    name: 'Rafael Trestini',
    imageUri:
      'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/116654345_3185026451582485_3027971154472616536_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHvtPJCaamFiCbBFSvmxriX61HkF448i4XrUeQXjjyLhd1JabmhmNtYijAuAK68scmxoMACR3pU5GIzK0yhwoq1&_nc_ohc=fxwPawQkzFsAX_PcGQK&_nc_ht=scontent-gru2-1.xx&oh=00_AT-GGbK1kMZJlP-JpP4v7upJVFymOg_2WcFlZ9wa_gnqGw&oe=622C773A',
  },

  {
    id: '2',
    name: 'Melissa Melo',
    imageUri:
      'https://ca.slack-edge.com/T015H380FPX-U02GWTK4ACA-846e4e668885-512',
  },

  {
    id: '3',
    name: 'Kaylane Guarino',
    imageUri:
      'https://ca.slack-edge.com/T015H380FPX-U02HYRF4ZGW-dd35ed32519d-512',
  },

  {
    id: '4',
    name: 'Emerson Silva',
    imageUri:
      'https://361605-1208129-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/capa-miles-morales.jpg',
  },

  {
    id: '5',
    name: 'Rebeca Prado',
    imageUri:
      'https://ca.slack-edge.com/T015H380FPX-U02V6F4HMQF-d38e783cefa4-72',
  },

  {
    id: '6',
    name: 'Samuel Santinelli',
    imageUri:
      'https://ca.slack-edge.com/T015H380FPX-U030WRK6CRE-c26cffd36d9f-72',
  },

  {
    id: '7',
    name: 'Israel Pablo',
    imageUri:
      'https://ca.slack-edge.com/T015H380FPX-U02JKCJA1HV-f5ebaf5a38a8-512',
  },

  {
    id: '8',
    name: 'Jonatas Santos',
    imageUri:
      'https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/37258187_617018642031924_5902755944973991936_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH8zhYFbX7uFBozoV22vAJvVrQZNmuxljZWtBk2a7GWNjupk__9BdOInqEY7cLotHHM1MpS_NPKtogDzpG-Xajt&_nc_ohc=LK70bt0OdxkAX-K2Lv2&_nc_ht=scontent-gru1-2.xx&oh=00_AT-W1jy5jdcsW_4AANdf_HcCNgV_K3BvnWuGpKpu-aBhNg&oe=6231F1D1',
  },

  {
    id: '9',
    name: 'Elias Oliveira',
    imageUri:
      'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/212057018_497382391552343_2461662928770408784_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHbsYoinI3_P-sWUa-x9w-56I966gU_yDfoj3rqBT_IN7V2LPNdYJVSLxU57y6isiLaEGF1Qxqm78abVa5bxz0z&_nc_ohc=vbeULOEDzDcAX_HGIXP&_nc_ht=scontent-gru2-2.xx&oh=00_AT9yhf7QQkzJTo7N3T5xmv7AAjUoEpFf6MQ8GWhJvi3OfA&oe=62313DFC',
  },
];

const App = () => (
  <SafeAreaView>
    <FlatList
      style={styles.container}
      data={STORIE}
      renderItem={({item}) => <Story {...item} />}
      keyExtractor={item => item.id}
      horizontal
    />
    <FlatList
      data={FEED}
      renderItem={({item}) => <Card {...item} />}
      ItemSeparatorComponent={() => <Separator />}
    />
  </SafeAreaView>
);

export default App;
