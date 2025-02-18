import { vars } from "nativewind";
import { Text, View } from "react-native";

const theme = vars({
  "--theme-fg": "green",
});

const App = () => {
  return (
    <View className="flex-1 items-center justify-center" style={theme}>
      <Text className="text-[--theme-fg]">Try editing me! 🎉</Text>
      <Text className="scale-100 active:scale-150 text-blue-500 active:text-red-500">
        Bounce
      </Text>
    </View>
  );
};

export default App;
