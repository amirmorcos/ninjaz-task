import { StyleSheet } from "react-native";
import Colors from "../../../theme/colors";
import { scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    borderColor: Colors.GREY,
    borderWidth: scale(1),
    marginVertical: verticalScale(10),
  },
});
