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
  } catch (error) {
    console.error("Failed to save messages: ", error);
    throw error;
  }
};
