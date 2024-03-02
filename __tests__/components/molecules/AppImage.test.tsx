import React from "react";
import renderer from "react-test-renderer";
import { AppImage } from "../../../src/components/molecules";

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
      <AppImage image="https://randomuser.me/api/portraits/med/women/33.jpg" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders placeholder correctly", () => {
  const tree = renderer.create(<AppImage image="" />).toJSON();
  expect(tree).toMatchSnapshot();
});
