import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { getFirestoreInstance } from '../utils/firebase';

export const useProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unsubscribe;

    const fetchFirestore = async () => {
      try {
        const db = await getFirestoreInstance();
        unsubscribe = onSnapshot(
          collection(db, 'projects'),
          (querySnapshot) => {
            const projectsData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setProjects(projectsData);
            setLoading(false);
          },
          (err) => {
            setError(err.message);
            setLoading(false);
          }
        );
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFirestore();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return { projects, loading, error };
};
