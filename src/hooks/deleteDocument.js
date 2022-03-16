import { useEffect } from 'react';
import { db } from '.';

export const DeleteData = (colPath, docPath) => {
  useEffect(() => {
    db.collection(colPath)
      .doc(docPath)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  }, []);
};

//delete gedeg ugee oilgojoogo bizde te XD