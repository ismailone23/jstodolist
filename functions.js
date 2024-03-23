function calculateDeadline(deadline) {
  let date = new Date(deadline).getTime();
  let nowdate = new Date().getTime();
  let dateleft = date - nowdate;
  let minuteLeft = Math.floor(dateleft / (1000 * 60));
  let hourLeft = Math.floor(dateleft / (1000 * 3600));
  let dayLeft = Math.floor(dateleft / (1000 * 3600 * 24));

  if (dateleft < 0) {
    return 0;
  } else if (dayLeft > 0) {
    return (
      dayLeft +
      " day" +
      (hourLeft - dateleft * 24 > 0
        ? hourLeft - dateleft * 24 + " and hour"
        : "")
    );
  } else if (dayLeft == 0 && hourLeft > 0) {
    return hourLeft + " hour";
  } else {
    return minuteLeft + " min";
  }
}
function setTodoOnStorage(id, title, completeditem, deadline, description) {
  let obj = {
    id,
    title,
    completeditem,
    deadline,
    description,
  };
  let todosArray = JSON.parse(localStorage.getItem("todos")) || [];
  let todoSetString = JSON.stringify([...todosArray, obj]);
  localStorage.setItem("todos", todoSetString);
}
function getTodosFromStorage() {
  return JSON.parse(localStorage.getItem("todos"));
}
function displayTodos(todos) {
  let showTodoNonCompleted = "";
  let nonCompletedTodo =
    todos && todos.filter((todo) => todo.completeditem.isCompleted == false);
  for (const todo in nonCompletedTodo) {
    showTodoNonCompleted += `<div class="card">
    <div class="title">
      <h1>${nonCompletedTodo[todo].title}</h1>
      <p>Time left ${calculateDeadline(nonCompletedTodo[todo].deadline)}</p>
    </div>
    <div class="more">
      <p>${nonCompletedTodo[todo].description}</p>
    </div>
    <div class="action-btn">
      <button id=${nonCompletedTodo[todo].id} class="edit">Edit ✏️</button>
      <button id=${
        nonCompletedTodo[todo].id
      } class="complete">complete ✅</button>
    </div>
  </div>`;
  }
  let completedTodo =
    todos && todos.filter((todo) => todo.completeditem.isCompleted);
  let showcompletedTodo = "";
  for (const todo in completedTodo) {
    showcompletedTodo += `<div class="card">
            <div class="title">
              <h1 class="done">${completedTodo[todo].title}</h1>
              <p>${completedTodo[todo].completeditem.completedTime}</p>
            </div>
            <div class="action-btn">
              <button id=${completedTodo[todo].id} class="delete">Delete 🗑️</button>
              <button id=${completedTodo[todo].id} class="return">Return ↩️</button>
            </div>
          </div>`;
  }
  return { showTodoNonCompleted, showcompletedTodo };
}
