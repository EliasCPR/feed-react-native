import React from 'react';
import {Image, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {bookmark, bookmark_o, heart, heart_o} from '../icons';
import IconButton from '../iconButton';

const Card = ({title, location, imageUri, comments}) => {
  const showToast = cardTitle => {
    ToastAndroid.show(`I touched the image ${cardTitle}`, ToastAndroid.SHORT);
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.location}>{location}</Text>
      <TouchableOpacity onPress={() => showToast(title)}>
        <Image
          style={styles.background}
          width={'100%'}
          height={350}
          source={{uri: imageUri}}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <IconButton
          iconChecked={heart}
          iconUnchecked={heart_o}
          onActivate={IconButton}
        />
        <IconButton iconChecked={bookmark} iconUnchecked={bookmark_o} />
      </View>
      <Text style={styles.comments}>{comments}</Text>
    </View>
  );
};

export default Card;
