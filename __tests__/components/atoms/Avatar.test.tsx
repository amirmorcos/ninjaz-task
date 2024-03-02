import React from "react";
import renderer from "react-test-renderer";
import { Avatar } from "../../../src/components/atoms/index";

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
    .create(
      <Avatar
        firstName="Amir"
        image="https://randomuser.me/api/portraits/med/women/33.jpg"
        lastName="Amir"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
