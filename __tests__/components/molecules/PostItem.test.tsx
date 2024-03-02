import React from "react";
import renderer from "react-test-renderer";
import { PostItem } from "../../../src/components/molecules";

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
      <PostItem
        item={{
          id: "6583404d1a06525b19266460",
          image: "",
          likes: 0,
          tags: [],
          text: "Dog in a forest at sunset dog in forest with sun r...",
          publishDate: "2023-12-20T19:28:13.612Z",
          updatedDate: "2023-12-20T19:28:13.612Z",
          owner: {
            id: "60d0fe4f5311236168a10a29",
            title: "ms",
            firstName: "Vanessa",
            lastName: "Ramos",
            picture: "https://randomuser.me/api/portraits/med/women/33.jpg",
          },
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly with tags", () => {
  const tree = renderer
    .create(
      <PostItem
        item={{
          id: "6583404d1a06525b19266460",
          image: "",
          likes: 0,
          tags: ["dog", "animal", "golden retriever"],
          text: "Dog in a forest at sunset dog in forest with sun r...",
          publishDate: "2023-12-20T19:28:13.612Z",
          updatedDate: "2023-12-20T19:28:13.612Z",
          owner: {
            id: "60d0fe4f5311236168a10a29",
            title: "ms",
            firstName: "Vanessa",
            lastName: "Ramos",
            picture: "https://randomuser.me/api/portraits/med/women/33.jpg",
          },
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
