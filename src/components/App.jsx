import '../App.css';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';

function App({ lists, dispatch }) {
  console.log(lists);

  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result

    if(!destination) {
      return
    }

    dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='p-4'>
        <div>Hello</div>
        <div className='flex'>
          {lists.map((list) => (
            <TrelloList
              listId={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <div className='bg-gray-400 rounded-md w-80 p-4 ml-4 h-fit'>
            <TrelloActionButton list />
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
