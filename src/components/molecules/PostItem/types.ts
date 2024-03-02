import { StyleProp, ViewStyle } from "react-native";
import { Post } from "../../../models/Post";

export type PostItemProps = {
  item: Post;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  accessibilityLabel: string;
};
