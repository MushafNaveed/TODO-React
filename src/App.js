import './App.css';
import ToDoBox from './components/ToDoBox';

function App() {
  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
      <row>
        <div className='col-lg-12 col-md-6'>
      <h1 className='mb-5'>TODO <span>List</span></h1>
      <ToDoBox/>
        </div>
      </row>
    </div>
  );
}

export default App;
