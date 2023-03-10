/* eslint-disable react/prop-types */
import CollectionCard from './collectioncard';
import './collection.css';
export default function Collection() {
  return (
    <div>
      <h1 className='title' style={{}}>
        Content Types
      </h1>
      <div className='row-content' style={{ backgroundColor: 'rgb(235,238,254)', height: '100vh' }}>
        <div className='row-1'>
          <h1>13 entries found</h1>
          <h2 style={{ margin: '25px' }}>Add new entry</h2>
        </div>
        <div className='row-2'>
          <div className='row-2-body'>
            <p>ID</p>
            <p>Website</p>
            <p>Contact</p>
            <p>Actions</p>
          </div>
        </div>
        <div className='row-3'>
          <CollectionCard />
          <CollectionCard />

          <CollectionCard />
        </div>
      </div>
    </div>
  );
}
