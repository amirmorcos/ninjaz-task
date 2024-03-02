import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";
import { AvatarProps } from "./types";

const Avatar = ({
  firstName,
  lastName,
  image,
  overrideContainerStyle,
  accessibilityLabel,
}: AvatarProps) => {
  const initials = `${firstName.charAt(0).toLocaleUpperCase()} ${lastName
    .charAt(0)
    .toLocaleUpperCase()}`;

  if (!image)
    return (
      <View
        accessibilityLabel=""
        style={[
          styles.container,
          styles.initialsContainer,
          overrideContainerStyle,
        ]}
      >
        <Text
          accessibilityLabel={accessibilityLabel}
          testID={accessibilityLabel}
        >
          {initials}
        </Text>
      </View>
    );

  return (
    <View style={overrideContainerStyle}>
      <FastImage
        accessibilityLabel={accessibilityLabel}
        testID={accessibilityLabel}
        source={{ uri: image }}
        style={styles.container}
      />
    </View>
  );
};

export default Avatar;
