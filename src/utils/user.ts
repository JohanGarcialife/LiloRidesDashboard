import { getFirestore, doc, getDoc } from "firebase/firestore";
import { firebaseApp } from "@/utils/firebase"; // Ajusta la ruta según tu inicialización de Firebase

export async function getUserRole(uid: string): Promise<string | null> {
  const db = getFirestore(firebaseApp);
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const data = userSnap.data();
    return data.role || null;
  }
  return null;
}