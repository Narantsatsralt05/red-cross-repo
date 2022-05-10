import { useState, useEffect } from 'react';
import { db } from '.';

export const useCollection = (path) => {
  const [data, setData] = useState([]);
  const [dataId, setDataId] = useState([]);
  const arrData = [];
  const ID = []
  useEffect(() => {
    if (db) {
      db.collection(`${path}`).onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          arrData.push(doc.data());
          ID.push(doc.id)
        });
        setData(arrData);
        setDataId(ID)
      });
    }
  }, [path, db]);

  return { data, dataId };
};

//ingej ashiglaj bolno zuer jishee
//const data = useCollection("/user/УлаанБаатар/members/");
//ingevel data dotor collection iin doc-uud object bolood orood irne;