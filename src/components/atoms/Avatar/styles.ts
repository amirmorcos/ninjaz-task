import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Colors from "../../../theme/colors";

export default StyleSheet.create({
  container: {
    borderRadius: scale(50),
    width: scale(50),
    height: scale(50),
  },
  initialsContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.GREY,
  },
});
