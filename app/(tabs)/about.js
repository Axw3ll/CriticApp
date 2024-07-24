import { ScrollView, Text } from "react-native";
import { Screen } from "../../components/Screen";
export default function About() {
  return (
    <Screen>
      <ScrollView className="pt-5 bg-black">
        <Text className="text-white text-center font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="bg-slate-700 rounded mx-5 p-4 text-white font-bold mb-5">
          Este proyecto es una aplicación de ejemplo para mostrar cómo se puede
          usar Expo y React Native para crear aplicaciones móviles.
        </Text>
        <Text className="bg-slate-700 rounded mx-5 p-4 text-white font-bold mb-5 ">
          La aplicación muestra una lista de juegos y permite ver detalles de
          cada uno de ellos.
        </Text>
        <Text className="bg-slate-700 rounded mx-5 p-4 text-white font-bold mb-5">
          La información de los juegos se obtiene de Metacritic.
        </Text>
        <Text className="bg-slate-700 rounded mx-5 p-4 text-white font-bold mb-5 ">
          La aplicación está hecha con Expo y React Native.
        </Text>
        <Text className="bg-slate-700 rounded mx-5 p-4 text-white font-bold mb-5">
          La aplicación es de código abierto y puedes encontrar el código en{" "}
          <Text className="text-blue-500">github.com/Axw3ll/repo</Text>
        </Text>
        <Text className="bg-slate-700 rounded mx-5 p-4 text-white font-bold mb-5">
          Se utilizo tailwindcss para los estilos.
        </Text>
        <Text className="bg-slate-700 rounded mx-5 p-4 text-white font-bold mb-5">
          El proyecto fue basado en el curso de Midudev de React Native.
        </Text>
      </ScrollView>
    </Screen>
  );
}
