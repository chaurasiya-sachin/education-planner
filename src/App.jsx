import MyTask from "./component/myTask/MyTask";
import './App.css'; // Import the CSS file

function App() {
  let subjectName = "";
  let setTime = "";

  function storedSubject(e) {
    subjectName = e.target.value;
  }

  function storedTime(e) {
    setTime = e.target.value;
  }

  const taskList = [];
  function handleClick() {
    let myObj = {
      subject: subjectName,
      time: setTime,
    };
    taskList.push(myObj);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }

  let getList = JSON.parse(localStorage.getItem("taskList"));
  console.log(getList);

  return (
    <div className="container">
      <h1>Study Time Scheduler</h1>
      <div className="input-area">
        <input type="text" placeholder="Subject Name" onChange={storedSubject} />
        <input type="number" placeholder="Time" onChange={storedTime} />
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="task-list">
        {getList
          ? getList.map((task, idx) => {
              return (
                <div key={idx} className="task-item">
                  <MyTask {...task} id={idx} />
                </div>
              );
            })
          : false}
      </div>
    </div>
  );
}

export default App;
