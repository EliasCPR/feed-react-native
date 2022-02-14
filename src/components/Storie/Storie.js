import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Storie = ({name, imageUri}) => {
  return (
    <View style={styles.ContainerStories}>
      <View style={styles.SubContainerStories}>
        <View style={styles.Stories}>
          <TouchableOpacity>
            <Image style={styles.Image} source={{uri: imageUri}} />
          </TouchableOpacity>
        </View>
        <Text style={styles.Name}>{name}</Text>
      </View>
    </View>
  );
};

export default Storie;
