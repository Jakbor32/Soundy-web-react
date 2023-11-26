import { useEffect } from "react";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import app from "../config/Firebase";
import { addDocument, updateDocument } from "../config/FirebaseUtils";

const useFirebaseEffects = (cartItems, isAuthenticated, getUserId) => {
  useEffect(() => {
    if (isAuthenticated) {
      const userId = getUserId();
      const db = getFirestore(app);
      const collectionRef = collection(db, userId);

      cartItems.forEach(async (item) => {
        const dataToAdd = {
          id: item.id,
          name: item.name,
          price: item.price,
          src: item.src,
          uid: item.uid,
          alt: item.alt,
          category: item.category,
          production_year: item.production_year,
          delivery_type: item.delivery_type,
          quantity: item.quantity,
        };

        const docRef = doc(collectionRef, item.uid);

        try {
          const existingDoc = await getDoc(docRef);

          if (existingDoc.exists()) {
            const updatedQuantity = +item.quantity;
            await updateDocument(`${userId}/${item.uid}`, {
              quantity: updatedQuantity,
            });
          } else {
            await addDocument(userId, item.uid, dataToAdd);
            // console.log(item.uid);
          }
        } catch (error) {
          error;
        }
      });
    }
  }, [cartItems, isAuthenticated]);
};

export default useFirebaseEffects;
