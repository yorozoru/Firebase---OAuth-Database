import { getDatabase, ref, set, onValue, get } from "firebase/database";
import app from "./firebase_connect";

const db = getDatabase(app);

function readDB(id: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db, id);
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            const messages = data?.messages || [];
            resolve(messages);
        }, (error) => {
            reject(error);
        });
    });
}

function writeDB(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db, id);
        set(dbRef, { messages: [] })
            .then(() => resolve())
            .catch((error) => reject(error));
    });
}

function updateDB(id: string, message: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db, id);

        get(dbRef).then((snapshot) => {
            const data = snapshot.val() || { messages: [] };
            const messages = data.messages || [];
            
            messages.push(message);
            
            return set(dbRef, { messages });
        })
        .then(() => resolve())
        .catch((error) => reject(error));
    });
}

export { readDB, writeDB, updateDB };