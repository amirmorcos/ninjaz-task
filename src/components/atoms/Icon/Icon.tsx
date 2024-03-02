import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../../theme/colors";
import { IconProps } from "./type";

const Icon = ({ color, name, size = 20, accessibilityLabel }: IconProps) => {
  return (
    <Ionicons
      accessibilityLabel={accessibilityLabel}
      testID={accessibilityLabel}
      name={name}
      size={size}
      color={Colors[color]}
    />
  );
};

export default Icon;
