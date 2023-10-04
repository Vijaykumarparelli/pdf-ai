import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
function SearchBox({ onClick, btnText, BtnIcon, onChange }) {
  return (
    <div className="d-flex mt-3">
      <div className="flex-1 position-relative">
        <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translate(0, -50%)' }}>
          <BiSearch size={24} />
        </div>
        <Form.Control type="text" placeholder="Search" style={{ paddingLeft: '40px' }} onChange={onChange} />
      </div>
      <Button variant="ai-primary" className="ms-3 d-flex align-items-center" onClick={onClick}>
        {BtnIcon && (
          <span className="me-2" style={{ lineHeight: 1 }}>
            <BtnIcon />
          </span>
        )}
        <span>{btnText}</span>
      </Button>
    </div>
  );
}

export default SearchBox;
