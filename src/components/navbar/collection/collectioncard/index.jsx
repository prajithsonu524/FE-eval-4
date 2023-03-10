import bin from '../../../../assets/delete/trash-delete-recycle-bin-bucket-waste@3x.png';
import edit from '../../../../assets/edit/user-edit-text-message-note@3x.png';
import './card.css';

export default function CollectionCard() {
  return (
    <div className='col-card'>
      <div className='col-card-body'>
        <p style={{ fontWeight: '600' }}>Name</p>
        <p style={{ color: 'rgb(161,161,161)' }}>Text</p>
        <p style={{ color: 'rgb(161,161,161)' }}>Text</p>
        <div className='edit'>
          <img src={edit} style={{ marginRight: '50px', height: '20px' }}></img>
          <img src={bin} style={{ marginRight: '30px', height: '20px' }}></img>
        </div>
      </div>
    </div>
  );
}
