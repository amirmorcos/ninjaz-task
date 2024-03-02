import { StyleProp, ViewStyle } from "react-native";

export interface AvatarProps {
  firstName: string;
  lastName: string;
  image: string;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}
