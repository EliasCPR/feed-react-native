import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const IconButton = ({iconChecked, iconUnchecked, onActivate, onDeactivate}) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    checked ? onActivate(checked) : onDeactivate(checked);
  };

  return (
    <TouchableOpacity onPress={handleChecked}>
      {checked ? iconChecked : iconUnchecked}
    </TouchableOpacity>
  );
};

export default IconButton;
