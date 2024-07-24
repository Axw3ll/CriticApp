import { ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useEffect, useState } from "react";
import { AnimatedGameCard } from "./Game/GameCard";

import { Screen } from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((data) => {
      setGames(data);
    });
  }, []);
  return (
    <Screen>
      {games.length === 0 ? (
        <>
          <ActivityIndicator size="large" color="#FFBD3F" />
        </>


      ) : (
        <>
          <FlatList
            data={games}
            keyExtractor={game => game.slug}
            renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
          />
        </>

      )}
    </Screen>
  );
}
