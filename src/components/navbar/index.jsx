//import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContentTypeDataContext } from '../../contexts/ContentType';
//import Builder from './builder';
import './navbar.css';
// import { useState } from 'react';
// eslint-disable-next-line react/prop-types
export default function Navbar() {
  const {  contentTypeList } = useContext(ContentTypeDataContext)
  return (
    <div className='navbar'>
      <div className='collection-types'>
        <p
          style={{
            fontWeight: '600',
          }}
        >
          COLLECTION TYPES
        </p>
        <div className='list'>
          <ul>
            {contentTypeList && contentTypeList.map((item) => (
              <li key={item.id}>
                {item.contentTypeName}
              </li>
            ))
            }
   
          </ul>
        </div>
      </div>
      <div
        className='content-builder'
        style={{
          backgroundColor: 'rgb(0,0,0)',
        }}
      >
        <a>CONTENT BUILDER</a>
      </div>
    </div>
  );
}
