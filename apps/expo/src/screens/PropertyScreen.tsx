import { StackNavigationProp } from '@react-navigation/stack';
import { PropertyStackParamList } from '../navigation/UserStack'; // import from TabNavigation file
import { SafeAreaView, View, Button, TouchableOpacity, Text } from 'react-native';
import { PostCard } from '../components/ListProperty';
import { FlashList } from "@shopify/flash-list";
import { trpc } from "../utils/trpc";
import React from "react";

// Define the type of the navigation props
type PropertyScreenNavigationProp = StackNavigationProp<
  PropertyStackParamList,
  'Property'
  
>;

// Define the type of the props
type PropertyScreenProps = {
  navigation: PropertyScreenNavigationProp;
};

function PropertyScreen({ navigation }: PropertyScreenProps) {
  const postQuery = trpc.post.all.useQuery();
  const [showPost, setShowPost] = React.useState<string | null>(null);
  return (
    <SafeAreaView>
      <View>

      <View className="py-2">
          {showPost ? (
            <Text className="text-white">
              <Text className="font-semibold">Selected post:</Text>
              {showPost}
            </Text>
          ) : (
            <Text className="font-semibold italic text-white">
              Press on a post
            </Text>
          )}
        </View>

      <FlashList
          data={postQuery.data}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(p) => (
            <TouchableOpacity onPress={() => setShowPost(p.item.id)}>
              <PostCard post={p.item} />
            </TouchableOpacity>
          )}
        />
        <Button
          title="Add Property"
          onPress={() => navigation.navigate('AddProperty')}
        />
      </View>
    </SafeAreaView>
  );
}

export default PropertyScreen;
