import { FlatList, RefreshControl } from "react-native";
import { Post } from "../../../models/Post";
import styles from "./styles";
import { PostItem } from "../../molecules";
import { Divider } from "../../atoms";

const PostsList = () => {
  const data: Post[] = [
    {
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
    },
    {
      id: "65830dfb387916e788acfd6a",
      image: "https://img.dummyapi.io/photo-1500879747858-bb1845b61beb.jpg",
      likes: 242,
      tags: ["dog", "animal", "golden retriever"],
      text: "Dog in a forest at sunset dog in forest with sun r...",
      publishDate: "2023-12-20T15:53:31.084Z",
      updatedDate: "2023-12-20T15:53:31.084Z",
      owner: {
        id: "60d0fe4f5311236168a10a29",
        title: "ms",
        firstName: "Vanessa",
        lastName: "Ramos",
        picture: "https://randomuser.me/api/portraits/med/women/33.jpg",
      },
    },
    {
      id: "60d21baa67d0d8992e610da7",
      image: "https://img.dummyapi.io/photo-1500879747858-bb1845b61beb.jpg",
      likes: 242,
      tags: ["dog", "animal", "golden retriever"],
      text: "Dog in a forest at sunset dog in forest with sun r...",
      publishDate: "2020-05-22T22:27:12.912Z",
      owner: {
        id: "60d0fe4f5311236168a10a29",
        title: "ms",
        firstName: "Vanessa",
        lastName: "Ramos",
        picture: "https://randomuser.me/api/portraits/med/women/33.jpg",
      },
    },
    {
      id: "60d21bd267d0d8992e610e21",
      image: "https://img.dummyapi.io/photo-1548658146-f142deadf8f7.jpg",
      likes: 112,
      tags: ["dog", "grey", "puppy"],
      text: "front view of black and white puppy sitting on bro...",
      publishDate: "2020-05-21T22:15:26.266Z",
      owner: {
        id: "60d0fe4f5311236168a10a12",
        title: "mr",
        firstName: "Kenneth",
        lastName: "Carter",
        picture: "https://randomuser.me/api/portraits/med/men/40.jpg",
      },
    },
    {
      id: "60d21b3667d0d8992e610c56",
      image: "https://img.dummyapi.io/photo-1558556249-076e42967a24.jpg",
      likes: 27,
      tags: ["dog", "animal", "canine"],
      text: "two puppies next to each other",
      publishDate: "2020-05-21T07:03:58.248Z",
      owner: {
        id: "60d0fe4f5311236168a10a1a",
        title: "mr",
        firstName: "Vaino",
        lastName: "Sakala",
        picture: "https://randomuser.me/api/portraits/med/men/56.jpg",
      },
    },
    {
      id: "60d21afd67d0d8992e610bad",
      image: "https://img.dummyapi.io/photo-1575495679620-2ff225c75d5a.jpg",
      likes: 20,
      tags: ["pet", "animal", "mammal"],
      text: "A picture of my golden doodle, Yogi Bear white dog",
      publishDate: "2020-05-20T21:49:33.321Z",
      owner: {
        id: "60d0fe4f5311236168a10a2c",
        title: "mr",
        firstName: "Toralf",
        lastName: "Streicher",
        picture: "https://randomuser.me/api/portraits/med/men/80.jpg",
      },
    },
    {
      id: "60d21b0467d0d8992e610bc5",
      image: "https://img.dummyapi.io/photo-1549937334-e94f33e69787.jpg",
      likes: 5,
      tags: ["dog", "pet", "mammal"],
      text: "long-coated brown dog",
      publishDate: "2020-05-20T21:00:40.371Z",
      owner: {
        id: "60d0fe4f5311236168a10a0d",
        title: "mr",
        firstName: "Lyam",
        lastName: "Morin",
        picture: "https://randomuser.me/api/portraits/med/men/95.jpg",
      },
    },
    {
      id: "60d21bbc67d0d8992e610dde",
      image: "https://img.dummyapi.io/photo-1549029555-5074848335d1.jpg",
      likes: 14,
      tags: ["dog", "canine", "mammal"],
      text: "selective focus photography of brown dog lying on ...",
      publishDate: "2020-05-20T07:57:54.421Z",
      owner: {
        id: "60d0fe4f5311236168a10a19",
        title: "miss",
        firstName: "Debbie",
        lastName: "Garcia",
        picture: "https://randomuser.me/api/portraits/med/women/86.jpg",
      },
    },
    {
      id: "60d21bbf67d0d8992e610de6",
      image: "https://img.dummyapi.io/photo-1504208434309-cb69f4fe52b0.jpg",
      likes: 2228,
      tags: ["dog", "animal", "nature"],
      text: "Beautiful dog in most photographed place in Canada...",
      publishDate: "2020-05-20T04:57:33.445Z",
      owner: {
        id: "60d0fe4f5311236168a10a12",
        title: "mr",
        firstName: "Kenneth",
        lastName: "Carter",
        picture: "https://randomuser.me/api/portraits/med/men/40.jpg",
      },
    },
    {
      id: "60d21bcf67d0d8992e610e16",
      image: "https://img.dummyapi.io/photo-1562221440-aba53beefed2.jpg",
      likes: 45,
      tags: ["dog", "animal", "canine"],
      text: "person touching dog's head",
      publishDate: "2020-05-18T21:14:50.181Z",
      owner: {
        id: "60d0fe4f5311236168a10a2b",
        title: "mrs",
        firstName: "Angelica",
        lastName: "Roussel",
        picture: "https://randomuser.me/api/portraits/med/women/53.jpg",
      },
    },
  ];
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <PostItem item={item} />}
      ItemSeparatorComponent={() => <Divider />}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => {}} />
      }
    />
  );
};

export default PostsList;
