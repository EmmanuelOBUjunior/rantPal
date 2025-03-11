//IndexedDB utility functions for chat storage

const DB_NAME = 'rantpal-db'
const DB_VERSION = 1
const CHAT_STORAGE_NAME = 'chat-messages'

//Initialize the database
export const initDB = ():Promise<IDBDatabase> =>{
return new Promise((resolve, reject))=>{
const request = indexedDB.open(DB_NAME, DB_VERSION)

}
}