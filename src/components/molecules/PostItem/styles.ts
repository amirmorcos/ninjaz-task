import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Colors from "../../../theme/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameContainer: {
    paddingHorizontal: scale(10),
  },
  postImage: {
    width: undefined,
    height: verticalScale(100),
    borderRadius: scale(10),
    marginVertical: verticalScale(20),
  },
  detailsContainer: {
    marginTop: verticalScale(8),
    paddingStart: scale(58),
  },
  userAvatar: {
    borderRadius: scale(50),
    width: scale(50),
    height: scale(50),
    backgroundColor: Colors.GREY,
  },
  likes: {
    marginStart: scale(2),
  },
  date: {
    color: Colors.DARKGREY,
    marginTop: verticalScale(2),
  },
  tagContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(10),
    alignItems: "center",
  },
});
