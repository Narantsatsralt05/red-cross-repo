import { useState, useEffect } from 'react';
import { db } from '.';

export const useCollection = (path) => {
  const [data, setData] = useState([]);
  const arrData = [];
  useEffect(() => {
    if (db) {
        db.collection(`${path}`).onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              arrData.push(doc.data());
              setData(arrData);
            });
          });
    }
  }, [path, db]);

  return { data };
};

//ingej ashiglaj bolno zuer jishee
//const data = useCollection("/user/УлаанБаатар/members/");
//ingevel data dotor collection iin doc-uud object bolood orood irne;