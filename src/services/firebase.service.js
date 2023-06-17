import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase";

export const getUserDetails = async (user) => {
    const docRef = doc(firebaseDB, "Users", user.uid);
    const docSnap = await getDoc(docRef);
    return docSnap;
  };