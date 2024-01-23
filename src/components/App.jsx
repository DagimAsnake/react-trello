import '../App.css';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';

function App({ lists, dispatch }) {
  console.log(lists);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='p-4'>
        <div className='text-center text-4xl mb-9'>Trello</div>
        <Droppable droppableId='all-lists' direction='horizontal' type='list'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className='flex'>
              {lists.map((list, index) => (
                <TrelloList
                  listId={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <div className='bg-gray-400 rounded-md w-80 p-4 ml-4 h-fit'>
                <TrelloActionButton list />
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
