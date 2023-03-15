/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './editfield.css';
import { useState } from 'react';
// import { makeRequest } from '../../utils/requests/makeRequest';
// import { ADD_CONTENT_TYPE } from '../../constants/apiEndPoints';
export default function EditField({ editField, oldField, closeModalContent }) {
  const [name, setName] = useState('');

  function nameHandler(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <div className='editfield'>
        <label>
          Name of New Field
          <input type='text' value={name} onChange={nameHandler} />
        </label>
        <br />
        <button type='submit' onClick={() => editField(oldField, name)}>
          Submit
        </button>
        <button type='submit' onClick={() => closeModalContent()}>
          Close
        </button>
      </div>
    </div>
  );
}
export const style = {
  content: {
    width: '300px',
    height: '200px',
    margin: 'auto',
    borderRadius: '10px',
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};
