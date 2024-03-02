import { StyleSheet } from "react-native";
import { verticalScale, scale } from "react-native-size-matters";
import Colors from "../../../theme/colors";

export default StyleSheet.create({
  contentContainer: {
    paddingBottom: verticalScale(50),
  },
  list: {
    padding: scale(20),
    backgroundColor: Colors.WHITE,
  },
});
