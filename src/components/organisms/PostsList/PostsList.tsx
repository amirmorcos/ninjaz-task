import { FlatList, RefreshControl } from "react-native";
import styles from "./styles";
import { PostItem } from "../../molecules";
import { Divider, Loader } from "../../atoms";
import { useLazyGetPostsListQuery } from "../../../api/postsApi";
import { useEffect, useState } from "react";
import { Post } from "../../../models/Post";

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [getPostsList] = useLazyGetPostsListQuery();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);

  const getPostsData = async (newPage: number, refetch = true) => {
    try {
      const { data, isLoading } = await getPostsList({
        limit: 10,
        page: newPage,
      });
      if (!refetch) {
        setPage(page + 1);
      }
      setIsLoading(isLoading);
      setPosts([...posts, ...(data?.data || [])]);
    } catch (e) {}
  };

  const renderFooter = () => <Loader />;

  useEffect(() => {
    getPostsData(page);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FlatList
      data={posts}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <PostItem key={item.id} item={item} />}
      ItemSeparatorComponent={() => <Divider />}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            getPostsData(page);
          }}
        />
      }
      onEndReached={() => {
        getPostsData(page + 1, false);
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
};

export default PostsList;
