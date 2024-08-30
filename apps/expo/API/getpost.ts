import { type SQLiteDatabase } from 'expo-sqlite'

const getPost = async (db: SQLiteDatabase) => {
  const data = await db.getAllAsync('SELECT * FROM todos')
  return data
}

export default getPost
