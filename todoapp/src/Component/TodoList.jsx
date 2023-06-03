import { useState } from 'react';
import './TodoList.css';

const Todo = () => {
  const [activity, setActivity] = useState('');
  const [listData, setListData] = useState([]);
  const [error, setError] = useState('');

  function addActivity() {
    if (activity.length === 0) {
      setError('Please enter Task');
      return;
    }

    setListData((listDataj) => {
      const updatedList = [...listDataj, activity];
      setActivity('');
      setError('');
      console.log(updatedList);
      return updatedList;
    });
  }

  function deleteActivity(i) {
    const updatedListData = listData.filter((element, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  }

  function deleteAll() {
    setListData([]);
  }

  return (
    <>
      This is simple todo app.
      <div className="container">
        <label htmlFor=""> Enter Task</label>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        {error && <p>{error}</p>}
        <div>
         {listData.length >= 1 && <p>Here is your list..</p>}
        </div>
        <div>
          <ol>
            {listData !== [] &&
              listData.map((data, i) => (
                <div className="field_button">
                  <li key={i}>{data}</li>
                  <button onClick={() => deleteActivity(i)}>Delete</button>
                </div>
              ))}
          </ol>
        </div>
        <div>
          {listData.length >= 1 && (
            <button onClick={() => deleteAll()}>Delete All</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
