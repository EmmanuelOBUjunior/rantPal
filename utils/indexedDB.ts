//IndexedDB utility functions for chat storage

const DB_NAME = "rantpal-db";
const DB_VERSION = 1;
const CHAT_STORE_NAME = "chat-messages";

//Initialize the database
export const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => {
      reject("Error opening Indexed database");
    };
    request.onsuccess = (event) => {
      resolve(request.result);
    };
    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(CHAT_STORE_NAME)) {
        db.createObjectStore(CHAT_STORE_NAME, { keyPath: "id" });
      }
    };
  });
};

// Save messages to IndexedDB
export const saveMessages = async (messages: any[]): Promise<void> => {
  try {
    const db = await initDB();
    const transaction = db.transaction(CHAT_STORE_NAME, "readwrite");
    const store = transaction.objectStore(CHAT_STORE_NAME);

    //Clear existing messages
    store.clear();

    //Add all messages
    messages.forEach((message) => {
      store.add(message);
    });
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject("Error saving messages to IndexedDB");
    });
  } catch (error) {
    console.error("Failed to save messages: ", error);
    throw error;
  }
};

//Get all messages from IndexedDB
export const getMessages = async (): Promise<any[]> => {
  try {
    const db = initDB();
    const transaction = (await db).transaction(CHAT_STORE_NAME, "readonly");
    const store = transaction.objectStore(CHAT_STORE_NAME);
    const request = store.getAll();

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject("Error getting messages from IndexedDB");
      };
    });
  } catch (error) {
    console.error("Failed to get messages: ", error);
    throw error;
  }
};
