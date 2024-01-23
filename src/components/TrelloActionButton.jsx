import { useState } from 'react';
import { IoMdAdd, IoMdClose } from 'react-icons/io';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

const TrelloActionButton = ({ list, dispatch, listId }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState('');

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddList = () => {
    if (text) {
      dispatch(addList(text));
      setText('')
    }
    return;
  };

  const handleAddCard = () => {
    if(text) {
      dispatch(addCard(listId, text))
      setText('')
    }
  }

  const buttonText = list ? 'Add another list' : 'Add another card';

  const addButton = () => {
    return (
      <div
        onClick={openForm}
        className={`flex items-center cursor-pointer rounded-md h-9 justify-center ${
          list
            ? 'opacity-100 text-white bg-[rgba(0,0,0,0.15)]'
            : 'opacity-50 text-inherit bg-inherit'
        }`}
      >
        <IoMdAdd />
        <p className='ml-1 hover:underline'>{buttonText}</p>
      </div>
    );
  };

  const addTitle = () => {
    const placeHolder = list
      ? 'Enter list title....'
      : 'Enter a title for the card....';
    const buttonTitle = list ? 'Add List' : 'Add Card';

    return (
      <>
        <div className='bg-white rounded-lg mb-2 min-h-28 min-w-60 p-3'>
          <TextareaAutosize
            placeholder={placeHolder}
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={handleInputChange}
            className='resize-none w-full outline-none border-none overflow-hidden'
          />
        </div>
        <div className='flex items-center'>
          <button
            onMouseDown={list ? handleAddList : handleAddCard}
            className='text-white bg-green-500 p-2 rounded-lg'
          >
            {buttonTitle}
          </button>
          <IoMdClose onClick={closeForm} className='text-2xl cursor-pointer ml-2' />
        </div>
      </>
    );
  };

  return formOpen ? addTitle() : addButton();
};

export default connect()(TrelloActionButton);
