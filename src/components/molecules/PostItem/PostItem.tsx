import { Image, Text, View } from "react-native";
import styles from "./styles";
import { PostItemProps } from "./types";
import { Icon, Avatar } from "../../atoms";

import moment from "moment";

const PostItem = ({ item }: PostItemProps) => {
  return (
    <View>
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
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.postImage}
        />
        <View style={styles.container}>
          <Icon name="heart-outline" color="GREY" />
          <Text style={styles.likes}>{item.likes}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
