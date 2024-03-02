import { ActivityIndicator, View } from "react-native";
import styles from "./styles";
import { LoaderProps } from "./types";

const Loader = ({ overrideContainerStyle }: LoaderProps) => {
  return (
    <View style={[styles.container, overrideContainerStyle]}>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;
