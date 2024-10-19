import { type SQLiteDatabase } from 'expo-sqlite'

const migration = async (db: SQLiteDatabase) => {
  await db.execAsync(`
    PRAGMA journal_mode = "wal";
    CREATE TABLE items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      brand TEXT NOT NULL,
      type TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      amount_sold INTEGER DEFAULT 0,
      price INTEGER NOT NULL,
      date_added TEXT NOT NULL
    );
  `)
  console.log('migrated successfully')
}

export default migration
