import {
    getFirestore,
    collection,
    setDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDocs,
  } from "firebase/firestore";
  import app from "./Firebase";
  
  export const getFirebaseInstance = () => getFirestore(app);
  
  export const addDocument = async (collectionRef, docRef, data) => {
    try {
      const db = getFirebaseInstance();
      const collectionReference = collection(db, collectionRef);
      const documentReference = doc(collectionReference, docRef);
      await setDoc(documentReference, data);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  export const updateDocument = async (docRef, data) => {
    try {
      const db = getFirebaseInstance();
      const documentReference = doc(db, docRef);
      await updateDoc(documentReference, data);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  
  export const deleteDocument = async (docRef) => {
    try {
      const db = getFirebaseInstance();
      const documentReference = doc(db, docRef);
      await deleteDoc(documentReference);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
    
  export const getDocuments = async (collectionRef) => {
    try {
      const db = getFirebaseInstance();
      const collectionReference = collection(db, collectionRef);
      const querySnapshot = await getDocs(collectionReference);
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      return documents;
    } catch (error) {
      console.error("Error getting documents: ", error);
      return [];
    }
  };
  