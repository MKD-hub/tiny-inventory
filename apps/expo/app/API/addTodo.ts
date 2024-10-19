import { type SQLiteDatabase } from 'expo-sqlite'

const addTodo = async (db: SQLiteDatabase, todo: Record<string, string | number>) => {
  const addStatement = await db.runAsync(
    'INSERT INTO posts (id, value) VALUES (?, ?)',
    todo.id,
    todo.value
  )
}

export default addTodo
