import { useEffect } from 'react';
import { db } from '.';

export const UseDocument = (path) => {
  useEffect(() => {
    db.doc(`${path}`).onSnapshot((doc) => {
      console.log(doc.data());
    });
  }, []);
};

//useDocument("/user/УлаанБаатар/members/Fy0PegJGnoRzJoZdVC7O");
//shuud path-d zaasan doc iin datag avch ugnu