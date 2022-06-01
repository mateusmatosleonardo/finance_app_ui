import React from 'react';
import {TouchableOpacity} from 'react-native';

interface ButtonProps {
  style: {} | any;
  action?: () => void;
  children?: React.ReactNode;
}

const Button = ({action, children, style}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={action} style={style} activeOpacity={0.7}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
