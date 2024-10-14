import { type SQLiteDatabase } from 'expo-sqlite'
import { item } from './types/types'

const updateItem = async (db: SQLiteDatabase, item: item) => {
  const updateStatement = await db.runAsync(
    `UPDATE items SET brand = ?, type = ?, quantity = ?, price = ? WHERE id = ?`,
    item.brand,
    item.type,
    item.quantity,
    item.price,
    item.id
  )
}

export default updateItem;
