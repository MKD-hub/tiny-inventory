import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { Provider } from 'app/provider'
import { NativeToast } from '@my/ui/src/NativeToast'
import { SQLiteProvider, deleteDatabaseAsync, type SQLiteDatabase } from 'expo-sqlite'
import migration from '../API/init/init-migrations'

export const unstable_settings = {
  // Ensure that reloading on `/user` keeps a back button present.
  initialRouteName: 'Home',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <SQLiteProvider databaseName="inventory.db" onInit={migrateDbifNeeded}>
      <Provider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack />
          <NativeToast />
        </ThemeProvider>
      </Provider>
    </SQLiteProvider>
  )
}

const migrateDbifNeeded = async (db: SQLiteDatabase) => {
  const DB_VERSION = 1

  let { user_version: currentDbVersion } = await db.getFirstAsync<any>('PRAGMA user_version')

  console.log(currentDbVersion, 'test')
  if (currentDbVersion) {
    if (currentDbVersion >= DB_VERSION) {
      db.closeAsync()
      deleteDatabaseAsync('inventory.db')
      return
    }
    if (currentDbVersion === 0) {
      await migration(db)
      currentDbVersion = 1
    }
  }

  await db.execAsync(`PRAGMA user_version = ${DB_VERSION}`)
}
