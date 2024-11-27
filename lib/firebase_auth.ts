import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase_connect";
import getUserId from "./getUserId";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default async function handleGoogleAuth () {
    try {
        const result = await signInWithPopup(auth, provider);
        getUserId(result.user.uid as string);
    } catch (error) {
        console.error("Error during sign-in:", error);
    }
}