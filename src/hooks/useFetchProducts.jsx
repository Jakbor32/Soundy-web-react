import { getDocuments } from "../config/FirebaseUtils";

const useFetchProducts = async (userId) => {
  try {
    const documents = await getDocuments(userId);

    return documents.map((data) => ({
      id: data.id,
      name: data.name,
      price: data.price,
      src: data.src,
      uid: data.uid,
      alt: data.alt,
      category: data.category,
      production_year: data.production_year,
      delivery_type: data.delivery_type,
      quantity: data.quantity,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default useFetchProducts;
