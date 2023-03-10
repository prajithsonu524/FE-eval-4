/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './builder.css';
import Card from './contentcard/card';
import search from '../../../assets/search/icon-search-dark.png';
import pencil from '../../../assets/pencil/user-pencil-write-ui-education@2x.png';
import FieldCard from './fieldcard/card';
// import { useState } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import Collection from '../../components/navbar/collection';
import { makeRequest } from '../../../utils/requests/makeRequest';
import {
  GET_ALL_CONTENT,
  ADD_CONTENT_TYPE,
  ADD_FIELD,
  DELETE_FIELD,
} from '../../../constants/apiEndPoints';
import Popup from '../../AddType/index';
import AddField from '../../AddField/addField';
import { style } from '../../AddType/index';
import Modal from 'react-modal';

export default function Builder() {
  // const [fieldId, setFieldId] = useState(null);
  // // function changeFieldId(id) {
  // //   setFieldId(id);
  // // }
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  function setIdFunc(id) {
    setId(id);
  }
  function addContentType(name) {
    console.log('function called');
    makeRequest(ADD_CONTENT_TYPE, {
      data: {
        name: name,
        fields: [],
      },
    }).then((res) => {
      window.location.reload();
    });
    closeModalContent();
  }
  function deleteField(name) {
    makeRequest(DELETE_FIELD(id), {
      data: {
        field: name,
      },
    }).then((res) => {
      window.location.reload();
    });
  }
  function addField(name) {

    makeRequest(ADD_FIELD(id), {
      data: {
        field: name,
      },
    }).then((res) => {
      console.log(res, 'res');
    });
    closeModalfield();
  }
  // console.log(data[0], 'insiide builder');
  useEffect(() => {
    makeRequest(GET_ALL_CONTENT, {})
      .then((res) => {
        console.log(res, 'res');
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenfield, setIsModalOpenfield] = useState(false);

  const openModalContent = () => {
    setIsModalOpen(true);
  };

  const closeModalContent = () => {
    setIsModalOpen(false);
  };
  const openModalfield = () => {
    setIsModalOpenfield(true);
  };

  const closeModalfield = () => {
    setIsModalOpenfield(false);
  };
  return (
    <div>
      <h1 className='title' style={{}}>
        Content Types
      </h1>
      <div className='row'>
        <div className='types-list'>
          <div
            className='search'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: '30px',
              marginLeft: '30px',
            }}
          >
            <p>{data.length} Types</p>
            <img src={search} alt='Icon' />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <div>
              <button
                style={{ fontWeight: '700', backgroundColor: 'rgb(243,246,255)' }}
                onClick={openModalContent}
              >
                + New Type
              </button>
              <Modal isOpen={isModalOpen} contentLabel='Small Modal' style={style}>
                {<Popup addContentType={addContentType} />}
              </Modal>
            </div>
            <div style={{ overflow: 'auto', height: '800px' }}>
              {data.map((item) => {
                const fields = item.fields ? item.fields : [];
                return <Card id={item.id} name={item.name} fields={fields} onClick={setIdFunc} />;
              })}
            </div>
          </div>
        </div>
        <div className='fields'>
          <div className='header'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h1>
                {!data.find((obj) => obj.id === id) ? '' : data.find((obj) => obj.id === id).name}
              </h1>
              <span>
                <img
                  src={pencil}
                  style={{
                    width: '25px',
                    marginLeft: '5px',
                  }}
                />
              </span>
            </div>
            <h2>
              {!data.find((obj) => obj.id === id)
                ? ''
                : data.find((obj) => obj.id === id).fields.length}{' '}
              fields
            </h2>
          </div>
          <div className='fields-list'>
            <button
              style={{ width: '1085px', fontWeight: '700', backgroundColor: 'rgb(243,246,255)' }}
              onClick={openModalfield}
            >
              + Add another field
            </button>
            <Modal isOpen={isModalOpenfield} contentLabel='Small Modal' style={style}>
              {<AddField addField={addField} />}
            </Modal>
            <div style={{ height: '600px', overflow: 'auto' }}>
              {!data.find((obj) => obj.id === id)
                ? ''
                : data
                    .find((obj) => obj.id === id)
                    .fields.map((item) => {
                      return <FieldCard deleteField={deleteField} field={item} />;
                    })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
