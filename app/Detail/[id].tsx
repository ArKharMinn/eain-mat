import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const Detail = () => {
  const { id } = useLocalSearchParams();
  const list = useSelector((state) => state.BlogDetail);
  const [item, setItem] = useState<any>([]);

  const header = useSelector((state) => state.BlogHeader);
  const title = header.find((item: any) => item.BlogId === Number(id));
  

  useEffect(() => {
    if (id) {
      const data = list.filter((item: any) => item.BlogId === Number(id));
      setItem(data);
          
    }
  }, [id, list,title]);
  return (
    <View style={tw``}>
      <View style={tw`p-5 m-4 rounded items-center justify-center bg-white shadow-lg border`}>
        <Text style={tw`text-3xl text-center font-bold`}>
          {title.BlogTitle.slice(1,4)}
        </Text>
        <Text style={tw`text-center`}>
          {title.BlogTitle.slice(5,200)}
        </Text>
      </View>
      <ScrollView contentContainerStyle={tw`px-2 pb-35`}>
        <View style={tw`w-`}>
        {item.map((item: any) => (
          <View
            style={tw`mb-4 flex-row gap-2 items-center`}
            key={item.BlogDetailId}
          >
            <Text style={tw`p-1 rounded-full border text-center `}>
              {item.BlogDetailId}
            </Text>
            <Text style={tw`pr-10`}>{item.BlogContent}</Text>
          </View>
        ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
