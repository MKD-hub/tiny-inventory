import { type SQLiteDatabase } from 'expo-sqlite'

const CreatePostsTable = async (db: SQLiteDatabase) => {
  await db.execAsync(`
      PRAGMA journal_mode = "wal";
      CREATE TABLE posts (
        id INTEGER PRIMARY KEY NOT NULL, 
        body TEXT NOT NULL, 
        is_valid INTEGER NOT NULL DEFAULT 0 CHECK(is_valid IN (0, 1)),
        date TEXT
      )
    `)

  await db.runAsync(
    'INSERT INTO posts (id, body, is_valid, date) VALUES (?, ?, ?, ?)',
    1,
    'This is a test',
    0,
    '2016-12-31'
  )
}

export default CreatePostsTable
