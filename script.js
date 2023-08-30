// alert("hello");
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#input-new-task");
const listele = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value;
  if (!task) {
    alert("Please Give challenge");
    return;
  }

  const taskele = document.createElement("div");
  taskele.classList.add("task");

  const task_content_ele = document.createElement("div");
  task_content_ele.classList.add("content");

  taskele.appendChild(task_content_ele);

  const task_input_ele = document.createElement("input");
  task_input_ele.classList.add("text");
  task_input_ele.type = "text";
  task_input_ele.value = task;
  task_input_ele.setAttribute("readonly", "readonly");

  task_content_ele.appendChild(task_input_ele);
  listele.appendChild(taskele);

  const task_actions_ele = document.createElement("div");
  task_actions_ele.classList.add("actions");

  const task_edit_ele = document.createElement("button");
  task_edit_ele.classList.add("edit");
  task_edit_ele.innerHTML = "Edit";

  const task_delete_ele = document.createElement("button");
  task_delete_ele.classList.add("delete");
  task_delete_ele.innerHTML = "Delete";

  task_actions_ele.appendChild(task_edit_ele);
  task_actions_ele.appendChild(task_delete_ele);

  taskele.appendChild(task_actions_ele);
  listele.appendChild(taskele);

  input.value = "";

  task_edit_ele.addEventListener("click", () => {
    if (task_edit_ele.innerText.toLowerCase() === "edit") {
      task_input_ele.removeAttribute("readonly");
      task_input_ele.focus();
      task_edit_ele.innerText = "Save";
    } else {
      task_input_ele.setAttribute("readonly", "readonly");
      task_edit_ele.innerText = "Edit";
    }
  });

  task_delete_ele.addEventListener("click", () => {
    listele.removeChild(taskele);
  });
});
