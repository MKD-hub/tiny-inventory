import { type SQLiteDatabase } from 'expo-sqlite'

const getItems = async (db: SQLiteDatabase) => {
  const data = await db.getAllAsync('SELECT * FROM items')
  return data
}

export default getItems