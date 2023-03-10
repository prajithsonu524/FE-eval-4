//import { Link } from 'react-router-dom';

//import Builder from './builder';
import './navbar.css';
// import { useState } from 'react';
// eslint-disable-next-line react/prop-types
export default function Navbar() {
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
            <li
              style={{
                fontWeight: '500',
              }}
            >
              Collection Type 1
            </li>
            <li
              style={{
                fontWeight: '500',
              }}
            >
              Collection Type 2
            </li>
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
