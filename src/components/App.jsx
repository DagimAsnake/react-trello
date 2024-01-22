import '../App.css';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';

function App({ lists }) {
  console.log(lists);

  return (
    <div className='p-4'>
      <div>Hello</div>
      <div className='flex'>
        {lists.map((list) => (
          <TrelloList key={list.id} title={list.title} cards={list.cards} />
        ))}
        <div className='bg-gray-400 rounded-md w-80 p-4 ml-4 h-fit'>
          <TrelloActionButton list />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
