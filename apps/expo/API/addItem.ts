import { type SQLiteDatabase } from 'expo-sqlite'
import { item } from './types/types'

const addItem = async (db: SQLiteDatabase, item: item) => {
  const addStatement = await db.runAsync(
    "INSERT INTO items (brand, type, quantity, price, date_added) VALUES (?, ?, ?, ?, DATETIME('now', 'localtime'))",
    item.brand,
    item.type,
    item.quantity,
    item.price
  )
}

export default addItem
