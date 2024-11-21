import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

export default function Index() {
  const [data, setData] = useState<any>([]);
  const list = useSelector((state) => state.BlogHeader);

  useEffect(() => {
    setData(list);
  }, []);

  return (
    <View style={tw``}>
      <ScrollView contentContainerStyle={tw`flex-row flex-wrap justify-center items-center`}>
        {data.map((item: any) => {
          return (
            <TouchableOpacity onPress={()=>router.push(`/Detail/${item.BlogId}`)} key={item.BlogId} style={tw`p-5 w-40 m-4 rounded bg-white shadow-lg border`}>
              <Text style={tw`text-3xl text-center font-bold`}> {item.BlogTitle.slice(1, 4)} </Text>
              <Text style={tw`text-center`}> {item.BlogTitle.slice(5, 200)} </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
