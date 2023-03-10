/* eslint-disable react/prop-types */
import './card.css';

export default function Card({ id, fields, name, onClick }) {
  return (
    <div className='card' id={id} onClick={() => onClick(id)}>
      <div className='card-body'>
        <p>{name}</p>
        <p>{fields.length}</p>
      </div>
    </div>
  );
}
