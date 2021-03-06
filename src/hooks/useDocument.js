import { useEffect, useState } from 'react';
import { db } from '.';

export const useDocument = (path) => {
  const [data, setData] = useState('');
  useEffect(() => {
    db.doc(`${path}`).onSnapshot((doc) => {
      setData(doc.data());
    });
  }, [path]);
  return { data };
};

//useDocument("/user/УлаанБаатар/members/Fy0PegJGnoRzJoZdVC7O");
//shuud path-d zaasan doc iin datag avch ugnu

export const setDocument = (colPath, docPath, data) => {
    db.collection(colPath)
      .doc(docPath)
      .set(data)
      .then(() => {
        alert('Document successfully written!');
      })
      .catch((error) => {
        alert('Error writing document: ', error);
      });
};

// SetDocument('/user/УлаанБаатар/members', '/ftbFBjVhodRU0VkyL67v', {name: 'NAmuun', address: 'hahah'});
//ingej colPath, docPath aa hiij uguud doc-iin data gaa set hiih buyu uurchilj bolno

export const deleteData = (colPath, docPath) => {
    db.collection(colPath)
      .doc(docPath)
      .delete()
      .then(() => {
        alert('Document successfully deleted!');
      })
      .catch((error) => {
        alert('Error removing document: ', error);
      });
};

// DeleteData("/user/УлаанБаатар/members", "nXwBm9n2SOTbzJcoHM95")
//geed collection iin doc iig ustgana
//delete gedeg ugee oilgojoogo bizde te XD

export const addDocument = (colPath, docPath, data) => {
  useEffect(() => {
    db.collection(colPath)
      .doc(docPath)
      .add(data)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }, []);
};

//data add hiine
// /AddDocument("/user/УлаанБаатар/members/","authId", {name: "NasaaIsSoDumb", age:14})
