import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    width: undefined,
    height: verticalScale(100),
    borderRadius: scale(10),
    marginVertical: verticalScale(20),
  },
});
