import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import Home from './home'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerShown: false
        }}
      />
      {/* <HomeScreen /> */}
      <Home />
    </>
  )
}
