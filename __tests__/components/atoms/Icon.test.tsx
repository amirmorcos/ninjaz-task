import React from "react";
import renderer from "react-test-renderer";
import { Icon } from "../../../src/components/atoms/index";

jest.mock("react-native-vector-icons/Ionicons", () => "Icon");
jest.mock("react-native-toast-message", () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));
jest.mock("react-native-size-matters", () => ({
  scale: () => {},
  verticalScale: () => {},
  moderateScale: () => {},
}));

test("renders correctly", () => {
  const tree = renderer
    .create(<Icon name="heart-outline" color="BLACK" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
