import "./App.css";

const App = () => {
  const addActivity = async (event) => {
    event.preventDefault();
    const newActivity = {
      name: event.target.activity.value,
      time: event.target.time.value
    };
  
  await fetch(`http://localhost:5000/api/activity`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newActivity),
  
    });
    event.target.activity.value = "";
    event.target.time.value = "";
    window.location.reload();
  };






return (
  <div className="app">

    <header className="app-header">

      <h1>Productivity Tracker</h1>

      <form onSubmit={addActivity}>

        <div>

          <label htmlFor="activity">Activity:</label>

          <input

            type="text"

            id="activity"

            name="activity"

            autoComplete="off"

          />

        </div>

        <div>

          <label htmlFor="time">Time Taken:</label>

          <input type="text" id="time" name="time" autoComplete="off" />

        </div>

        <button type="submit">Add</button>

      </form>

    </header>

    <main className="app-main">

      <h2>Today</h2>
      


    </main>

  </div>

);

}
export default App;