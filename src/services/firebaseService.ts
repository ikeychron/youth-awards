import { INewNominated } from '@/components/organisms/CreateNominatedForm';
import { authService, database } from '@/firebase/firebase';
import {
  TCategories,
  TInitialData,
  TNominateds,
  // TOldWinners,
} from '@/interfaces';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

// export const getOldWinners = async (): Promise<TOldWinners> => {
//   try {
//     const q = query(
//       collection(database, 'old-winners'),
//       where('winner', '==', true)
//     );

//     const querySnapshot = await getDocs(q);
//     return querySnapshot.docs.map((item) => ({
//       id: item.id,
//       ...item.data(),
//     })) as TOldWinners;
//   } catch (error) {
//     console.error('Error getting data:', error);
//     throw error;
//   }
// };

export const getNominateds = async (): Promise<TNominateds> => {
  try {
    const querySnapshot = await getDocs(collection(database, 'nominateds'));

    return querySnapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    })) as TNominateds;
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};

// export const getNominateds = async (): Promise<TNominateds> => {
//   try {
//     const querySnapshot = await getDocs(collection(database, 'nominateds'));

//     return querySnapshot.docs.map((item) => ({
//       id: item.id,
//       ...item.data(),
//     })) as TNominateds;
//   } catch (error) {
//     console.error('Error getting data:', error);
//     throw error;
//   }
// };

export const getCategories = async (): Promise<TCategories> => {
  try {
    const querySnapshot = await getDocs(collection(database, 'categories'));

    return querySnapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    })) as TCategories;
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};

export const getInitialData = async (): Promise<TInitialData> => {
  try {
    const categories = await getCategories();
    const nominateds = await getNominateds();
    // const oldWinners = await getOldWinners();

    return {
      categories,
      nominateds,
      // oldWinners,
    };
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};

export const getImagesNominateds = async (): Promise<string[]> => {
  try {
    const imagesRef = ref(getStorage(), 'new-nominateds');

    const { items } = await listAll(imagesRef);

    const urls = await Promise.all(
      items.map(async (item) => {
        const url = await getDownloadURL(item);
        return url;
      })
    );
    return urls;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createNominated = async (nominated: INewNominated) => {
  try {
    const docRef = await addDoc(collection(database, 'nominateds'), {
      ...nominated,
      winner: false,
      created: Date.now(),
      votes: 0,
      votesUser: [],
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.log(error);
  }
};

export const loginService = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      authService,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    throw Error(error as any);
  }
};

