import { View, Text, TouchableOpacity } from "react-native";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@acme/api";
import { trpc } from "../utils/trpc";
import { FlashList } from "@shopify/flash-list";
import React from "react";

const PostCards: React.FC<{
    property: inferProcedureOutput<AppRouter["property"]["all"]>[number];
  }> = ({ property }) => {
    return (
      <View className="rounded-lg border-4 border-black p-1">
        <Text className="text-xl font-semibold text-[#cc66ff]">{property.Address}</Text>
        <Text className="text-white">{property.City}</Text>
        <Text className="text-white">{property.State}</Text>
        <Text className="text-white">{property.Zip}</Text>
        <Text className="text-white">{property.Beds}</Text>
        <Text className="text-white">{property.Baths}</Text>
        <Text className="text-white">{property.Sqft}</Text>
        <Text className="text-white">{property.Type}</Text>
        <Text className="text-white">{property.Status}</Text>
        <Text className="text-white">{property.Image}</Text>
        <Text className="text-white">{property.Desc}</Text>
      </View>
    );
  };

  export const PropertyList: React.FC = () => {
    const propQuery = trpc.property.all.useQuery();
    const [showPost, setShowPost] = React.useState<string | null>(null);
    return(
      
       <FlashList 
          data={propQuery.data}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(p) => (
            <TouchableOpacity onPress={() => setShowPost(p.item.id)}>
              <PostCards property={p.item} />
            </TouchableOpacity>
          )}
        />
      
     
    )
  }