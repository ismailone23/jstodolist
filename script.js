window.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("form");
  let title = document.getElementById("title");
  let deadline = document.getElementById("deadline");
  let description = document.getElementById("description");
  let wordcount = document.getElementById("wordcount");
  let noncompleted = document.getElementById("noncompleted");
  let completed = document.getElementById("completed");

  title.addEventListener("input", (e) => {
    title = e.target.value;
  });
  deadline.addEventListener("input", (e) => {
    deadline = e.target.value;
  });
  description.addEventListener("input", (e) => {
    description = e.target.value;
    wordcount.innerHTML = description.length;
  });

  let getTodos = getTodosFromStorage();
  let allTodo = displayTodos(getTodos);

  noncompleted.innerHTML = allTodo.showTodoNonCompleted;
  completed.innerHTML = allTodo.showcompletedTodo;

  form.addEventListener("submit", (e) => {
    let completeditem = { isCompleted: false, completedTime: null };
    setTodoOnStorage(
      (id = new Date().getTime()),
      title,
      completeditem,
      deadline,
      description
    );
    let newarry = [
      ...getTodos,
      { id: new Date().getTime(), title, completeditem, deadline, description },
    ];
    noncompleted.innerHTML = displayTodos(newarry).showTodoNonCompleted;

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    wordcount.innerHTML = 0;
  });
  const returnbtn = document.querySelectorAll(".return");
  const completebtn = document.querySelectorAll(".complete");

  Array.from(completebtn).map((btn) => {
    btn.addEventListener("click", () => {
      let newList = getTodos.filter((todo) =>
        todo.id == parseInt(btn.id)
          ? ((todo.completeditem.isCompleted = true),
            (todo.completeditem.completedTime = `${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}`))
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(newList));
      let ntodo = displayTodos(newList);
      console.log(ntodo);
      noncompleted.innerHTML = ntodo.showTodoNonCompleted;
      completed.innerHTML = ntodo.showcompletedTodo;
    });
  });

  Array.from(returnbtn).map((btn) => {
    btn.addEventListener("click", () => {
      let newList = getTodos.filter((todo) =>
        todo.id == parseInt(btn.id)
          ? ((todo.completeditem.isCompleted = false),
            (todo.completeditem.completedTime = null))
          : todo
      );
      // localStorage.setItem("todos", JSON.stringify(newList));
      let ntodo = displayTodos(newList);
      console.log(getTodos);
      console.log(newList);
      console.log(ntodo);
      // noncompleted.innerHTML = ntodo.showTodoNonCompleted;
      // completed.innerHTML = ntodo.showcompletedTodo;
    });
  });
});
