/* eslint-disable react/prop-types */
import './addfield.css';
import { useState } from 'react';
// import { makeRequest } from '../../utils/requests/makeRequest';
// import { ADD_CONTENT_TYPE } from '../../constants/apiEndPoints';
export default function AddField({ addField }) {
  const [name, setName] = useState('');

  function nameHandler(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <div className='addfield'>
        <label>
          Name of Field
          <input type='text' value={name} onChange={nameHandler} />
        </label>
        <br />
        <button type='submit' onClick={() => addField(name)}>
          Submit
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
