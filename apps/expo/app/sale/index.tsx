import { View, Text } from 'react-native'
import getPost from '../../API/getpost'
import { useSQLiteContext } from 'expo-sqlite'
import CreatePostsTable from '../../API/createPostsTable'
import addTodo from '../../API/addTodo'
import { Stack } from 'expo-router'

const Sale = () => {
  const db = useSQLiteContext()

  const fetchData = async () => {
    const data = await getPost(db)
    console.log(data)
  }

  fetchData()

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View>
        <Text>Sale</Text>
      </View>
    </>
  )
}

export default Sale
