import { database } from '@/firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const getOldWinners = async () => {
  try {
    const q = query(
      collection(database, 'old-winners'),
      where('winner', '==', true)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};

