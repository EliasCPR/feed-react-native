import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 18,
    color: '#000000',
  },
  location: {
    paddingLeft: 20,
    paddingTop: 5,
    marginBottom: 10,
    color: 'gray',
  },
  comments: {
    paddingLeft: 20,
    paddingTop: 5,
    marginBottom: 10,
    paddingRight: 10,
  },
  background: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 20,
    justifyContent: 'space-between',
    width: '18%',
  },
});

export default styles;
