/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import bin from '../../../../assets/delete/trash-delete-recycle-bin-bucket-waste@3x.png';
import edit from '../../../../assets/edit/user-edit-text-message-note@3x.png';
import './card.css';

export default function Card({ field, deleteField }) {
  console.log(field, 'fieldscard');
  return (
    <div className='fieldcard'>
      <div className='field-card-body'>
        <p style={{ fontWeight: '600' }}>{field}</p>
        <p style={{ color: 'rgb(161,161,161)' }}>Text</p>

        <div className='edit'>
          <img src={edit} style={{ marginRight: '50px', height: '20px' }}></img>
          <img
            src={bin}
            style={{ marginRight: '30px', height: '20px' }}
            onClick={() => deleteField(field)}
          ></img>
        </div>
      </div>
    </div>
  );
}
