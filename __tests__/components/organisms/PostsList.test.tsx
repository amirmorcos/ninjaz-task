import React from "react";
import renderer from "react-test-renderer";
import { PostsList } from "../../../src/components/organisms";

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
jest.mock("@reduxjs/toolkit/query/react", () => ({
  createApi: jest.fn(),
  fetchBaseQuery: jest.fn(),
}));
jest.mock("../../../src/api/postsApi.ts", () => ({
  useGetPostsListQuery: jest.fn(),
  useLazyGetPostsListQuery: () => [],
}));

test("renders correctly", () => {
  const tree = renderer.create(<PostsList />).toJSON();
  expect(tree).toMatchSnapshot();
});
