import { Text, View } from "react-native";
import { Avatar, Icon } from "../../atoms";
import { AppImage } from "../../molecules";
import styles from "./styles";
import { PostItemProps } from "./types";

import moment from "moment";
import { TestIds } from "./ids";

const PostItem = ({
  item,
  accessibilityLabel,
  overrideContainerStyle,
}: PostItemProps) => {
  return (
    <View
      accessible
      accessibilityLabel={accessibilityLabel}
      testID={accessibilityLabel}
      style={overrideContainerStyle}
    >
      <View style={styles.container}>
        <Avatar
          accessibilityLabel={TestIds.postUserAvatar}
          firstName={item?.owner?.firstName ?? ""}
          lastName={item?.owner?.lastName ?? ""}
          image={item?.owner?.picture ?? ""}
        />
        <View style={styles.nameContainer}>
          <Text
            accessibilityLabel={TestIds.postUsername}
            testID={TestIds.postUsername}
          >
            {item?.owner.firstName} {item?.owner.lastName}
          </Text>
          <Text
            accessibilityLabel={TestIds.postPublishedDate}
            testID={TestIds.postPublishedDate}
            style={styles.date}
          >
            {moment(item.publishDate).fromNow()}
          </Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text
          accessibilityLabel={TestIds.postDescription}
          testID={TestIds.postDescription}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.text}
        </Text>
        <AppImage image={item.image} />
        {item.tags.length !== 0 && (
          <View accessible style={styles.tagContainer}>
            {item.tags.map((item, index) => (
              <Text
                accessibilityLabel={TestIds.postTags}
                testID={TestIds.postTags}
                key={index}
              >
                #{item}{" "}
              </Text>
            ))}
          </View>
        )}
        <View style={styles.container}>
          <Icon
            accessibilityLabel={TestIds.postLikesIcon}
            name="heart-outline"
            color="GREY"
          />
          <Text
            accessibilityLabel={TestIds.postLikesCount}
            testID={TestIds.postLikesCount}
            style={styles.likes}
          >
            {item.likes}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
