import { Stack } from "expo-router";
import { ActivityIndicator, Text, View, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Game/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FFBD3F" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: () => {
            if (gameInfo === null) return "";
            return <Text className="font-bold text-center text-lg ">{gameInfo.title}</Text>;
          },
          headerRight: () => {},
        }}
      />
      <View className="flex-1 justify-center items-center bg-black">
        <View>
          {gameInfo === null ? (
            <ActivityIndicator size="large" color="#FFBD3F" />
          ) : (
            <ScrollView>
              <View className="justify-center items-center text-center p-2">
                <Image
                  className="mb-4 rounded r"
                  source={{ uri: gameInfo.img }}
                  style={{ width: 214, height: 294 }}
                />
                <Score score={gameInfo.score} maxScore={100} />
                <Text className="text-white font-bold text-2xl text-center mt-4">
                  {gameInfo.title}
                </Text>
                <Text className="text-white/70 mt-4 font-bold mb-8  text-base">
                  {gameInfo.description}
                </Text>

              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </Screen>
  );
}
