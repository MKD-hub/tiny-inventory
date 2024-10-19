import { Tabs } from 'expo-router';
import { Home, Plus, Coins } from '@tamagui/lucide-icons'
function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
          },
        }} 
      >

        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Home />
            ),
          }}
        />

        <Tabs.Screen
          name="add"
          options={{
            title: "Add",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Plus />
            ),
          }}
        />

        <Tabs.Screen
          name="sale"
          options={{
            title: "Sale",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Coins />
            ),
          }}
        />

      </Tabs>
    </>
  )
}

export default TabsLayout;