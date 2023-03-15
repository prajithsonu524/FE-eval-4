/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import {makeRequest} from '../utils/requests/makeRequest';

import {  
  GET_ALL_CONTENT,
} from '../constants/apiEndPoints';
export const ContentTypeDataContext = createContext({});

export function ContentTypeDataProvider({ children }) {
//   const [contentTypeSelected, setcontentTypeSelected] = useState(false);
//   const [contentValueSelected, setcontentValueSelected] = useState(false);

  const [contentTypeList, setcontentTypeList] = useState(null);
 
  useEffect(() => {
    makeRequest( GET_ALL_CONTENT, {}).then(
      (res) => {
        let contentTypeList = [];
        res.map((item) => {
          const value = {
            id: item.id,
            contentTypeName: item.name,
            count: 0,
          };
          contentTypeList.push(value);
        });
        setcontentTypeList(contentTypeList);
        console.log('contentTypeList', contentTypeList);
      }
    );
  }, []);

  return (
    <ContentTypeDataContext.Provider
      value={{contentTypeList,setcontentTypeList}}
    >
      {children}
    </ContentTypeDataContext.Provider>
  );
}