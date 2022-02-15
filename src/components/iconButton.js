import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const IconButton = ({iconChecked, iconUnchecked, onChange}) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    checked ? onChange(false) : onChange(true);
  };

  return (
    <TouchableOpacity onPress={handleChecked}>
      {checked ? iconChecked : iconUnchecked}
    </TouchableOpacity>
  );
};

export default IconButton;
