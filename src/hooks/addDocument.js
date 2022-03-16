import { useEffect } from 'react';
import { db } from '.';

export const AddDocument = (colPath) => {
  useEffect(() => {
    db.collection(colPath)
      .add({
        name: 'Tokyo',
        age: 'Japan',
        phoneNumber: "120-9646-3689-937"
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }, []);
};

//data add hiine
// addDocument("/user/УлаанБаатар/members/")