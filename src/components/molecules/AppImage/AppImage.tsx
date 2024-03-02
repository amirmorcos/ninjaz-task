import FastImage from "react-native-fast-image";
import { AppImageProps } from "./types";
import styles from "./styles";

const AppImage = ({ image, overrideContainerStyle }: AppImageProps) => {
  const renderedImage = image || "https://placehold.jp/150x150.png";
  return (
    <FastImage
      source={{ uri: renderedImage, priority: FastImage.priority.normal }}
      style={[styles.container, overrideContainerStyle]}
    />
  );
};

export default AppImage;
