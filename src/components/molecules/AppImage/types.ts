import { StyleProp } from "react-native";
import { ImageStyle } from "react-native-fast-image";

export interface AppImageProps {
  image: string;
  overrideContainerStyle?: StyleProp<ImageStyle>;
}
