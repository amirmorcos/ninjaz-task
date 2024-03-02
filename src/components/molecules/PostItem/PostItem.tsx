import { Text, View } from "react-native";
import { Avatar, Icon } from "../../atoms";
import { AppImage } from "../../molecules";
import styles from "./styles";
import { PostItemProps } from "./types";

import moment from "moment";

const PostItem = ({ item, overrideContainerStyle }: PostItemProps) => {
  return (
    <View style={overrideContainerStyle}>
      <View style={styles.container}>
        <Avatar
          firstName={item?.owner?.firstName ?? ""}
          lastName={item?.owner?.lastName ?? ""}
          image={item?.owner?.picture ?? ""}
        />
        <View style={styles.nameContainer}>
          <Text>
            {item?.owner.firstName} {item?.owner.lastName}
          </Text>
          <Text style={styles.date}>{moment(item.publishDate).fromNow()}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text numberOfLines={2} ellipsizeMode="tail">
          {item.text}
        </Text>
        <AppImage image={item.image} />
        {item.tags.length !== 0 && (
          <View style={styles.tagContainer}>
            {item.tags.map((item, index) => (
              <Text key={index}>#{item} </Text>
            ))}
          </View>
        )}
        <View style={styles.container}>
          <Icon name="heart-outline" color="GREY" />
          <Text style={styles.likes}>{item.likes}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
