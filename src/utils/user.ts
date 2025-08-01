import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";

export async function getUserRole(uid: string): Promise<string | null> {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const data = userSnap.data();
    return data.role || null;
  }
  return null;
}

// Obtener todos los usuarios de la colección "users"
export async function getUsersFromFirestore() {
  const usersCol = collection(db, "users");
  const usersSnapshot = await getDocs(usersCol);
  return usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}