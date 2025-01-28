import { useTitle } from '../hooks/useTitle';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';

const Projects = () => {
  useTitle('Projects');

  // example of getting data from Firestore
  // getDocs(collection(db, 'projects')).then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, doc.data());
  //   });
  // });

  return (
    <main className=" w-full max-w-2xl mt-4 mb-4">
      <p>Project content.</p>
    </main>
  );
};

export default Projects;
