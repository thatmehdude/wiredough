import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
          tabBarLabel: ({ focused }) =>
            focused ? <Text>Home</Text> : undefined,
        }}
      />
    </Tabs>
  );
}