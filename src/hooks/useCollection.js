import { useState, useEffect } from 'react';
import { db } from '.';

export const useCollection = (path, sorted = false) => {
  const [data, setData] = useState([]);
  const [dataId, setDataId] = useState([]);
  useEffect(() => {
    if (db) {
      const arrData = [];
      const ID = [];

      if (db) {
        let col = db.collection(`${path}`);
        if (sorted) {
          col = col.orderBy('timestamp', 'desc').limit(30);
        }
        col.onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arrData.push(doc.data());
            ID.push(doc.id);
          });
          setData(arrData);
          setDataId(ID);
        });
      }
    }
  }, [path, db]);

  return { data, dataId };
};

//ingej ashiglaj bolno zuer jishee
//const data = useCollection("/user/УлаанБаатар/members/");
//ingevel data dotor collection iin doc-uud object bolood orood irne;
