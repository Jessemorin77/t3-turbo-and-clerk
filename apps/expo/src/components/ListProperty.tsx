import { View, Text } from "react-native";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@acme/api";

export const PostCard: React.FC<{
    post: inferProcedureOutput<AppRouter["post"]["all"]>[number];
  }> = ({ post }) => {
    return (
      <View className="rounded-lg border-2 border-gray-500 p-4">
        <Text className="text-xl font-semibold text-[#cc66ff]">{post.title}</Text>
        <Text className="text-white">{post.content}</Text>
      </View>
    );
  };