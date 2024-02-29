import React from "react";
import Colors from "../../../theme/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { IconProps } from "./type";

const Icon = ({ color, name, size = 20 }: IconProps) => {
  return <Ionicons name={name} size={size} color={Colors[color]} />;
};

export default Icon;
