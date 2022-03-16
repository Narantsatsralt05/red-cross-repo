import { useEffect } from 'react';
import { db } from '.';

export const SetDocument = (colPath, docPath) => {
  useEffect(() => {
    db.collection(colPath)
      .doc(docPath)
      .set({
        name: "Rich Tuugii",
        age: 18,
        phoneNumber: "99999901"
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }, []);
};

// setDocument("/user/УлаанБаатар/members", "nXwBm9n2SOTbzJcoHM95")
//ingej colPath, docPath aa hiij uguud doc-iin data gaa set hiih buyu uurchilj bolno