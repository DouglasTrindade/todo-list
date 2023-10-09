// Selecionar os elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Função para criar um elemento de tarefa
const createTodoElement = (text) => {
  const todo = document.createElement("div");
  todo.classList.add(
    "todo",
    "alert",
    "alert-primary",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  const todoTitle = document.createElement("span");
  todoTitle.innerText = text;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("d-flex", "gap-2");

  const doneBtn = createButton(
    "finish-todo",
    "btn-success",
    '<i class="fa-solid fa-check"></i>'
  );
  const editBtn = createButton(
    "edit-todo",
    "btn-warning",
    '<i class="fa-solid fa-pen"></i>'
  );
  const deleteBtn = createButton(
    "remove-todo",
    "btn-danger",
    '<i class="fa-solid fa-xmark"></i>'
  );

  buttonContainer.appendChild(doneBtn);
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);

  todo.appendChild(todoTitle);
  todo.appendChild(buttonContainer);

  return todo;
};

// Função auxiliar para criar botões
const createButton = (className, btnClass, innerHTML) => {
  const button = document.createElement("button");
  button.classList.add(className, "btn", btnClass);
  button.innerHTML = innerHTML;
  return button;
};

// Evento de envio do formulário de adicionar tarefa
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    const todoElement = createTodoElement(inputValue);
    todoList.appendChild(todoElement);

    // Limpar o campo do input
    todoInput.value = "";
  }
});
