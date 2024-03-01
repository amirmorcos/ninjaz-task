import { Image, Text, View } from "react-native";
import { AvatarProps } from "./types";
import styles from "./styles";

const Avatar = ({
  firstName,
  lastName,
  image,
  overrideContainerStyle,
}: AvatarProps) => {
  const initials = `${firstName.charAt(0).toLocaleUpperCase()} ${lastName
    .charAt(0)
    .toLocaleUpperCase()}`;

  if (!image)
    return (
      <View
        style={[
          styles.container,
          styles.initialsContainer,
          overrideContainerStyle,
        ]}
      >
        <Text>{initials}</Text>
      </View>
    );

  return (
    <View style={overrideContainerStyle}>
      <Image source={{ uri: image }} style={styles.container} />
    </View>
  );
};

export default Avatar;
