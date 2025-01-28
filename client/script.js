document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const editTaskModal = document.getElementById('editTaskModal');
    const editTaskInput = document.getElementById('editTaskInput');
    const saveTaskBtn = document.getElementById('saveTaskBtn');
    const cancelTaskBtn = document.getElementById('cancelTaskBtn');

    let currentEditingTaskId = null;
    let currentEditingTaskElement = null;

    // const API_URL = 'http://localhost:3000/tasks'; //use this for local env
    const API_URL = "https://task-manager-production-1d83.up.railway.app/tasks";

    // Function to show notifications
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '1';
        }, 100);

        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // Fetch and display tasks
    async function fetchTasks() {
        try {
            const response = await fetch(API_URL);
            const tasks = await response.json();
            taskList.innerHTML = '';

            tasks.forEach((task) => {
                const li = createTaskElement(task.id, task.title);
                taskList.appendChild(li);
            });
        } catch (err) {
            console.error('Error fetching tasks:', err);
            showNotification('Failed to load tasks', 'error');
        }
    }

    // Add a new task
    taskForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            showNotification('Task cannot be empty!', 'error');
            return;
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: taskText }),
            });

            if (response.ok) {
                const newTask = await response.json();
                const li = createTaskElement(newTask.id, newTask.title);
                taskList.appendChild(li);
                taskInput.value = '';

                showNotification('Task added successfully!');
            }
        } catch (err) {
            console.error('Error adding task:', err);
            showNotification('Failed to add task', 'error');
        }
    });

    // Create task element
    function createTaskElement(id, title) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = title;
        span.style.flex = '1';

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'task-buttons';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => openEditModal(id, span));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete';
        deleteBtn.addEventListener('click', () => deleteTask(id, li));

        buttonContainer.appendChild(editBtn);
        buttonContainer.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(buttonContainer);

        return li;
    }

    // Open the edit modal
    function openEditModal(id, taskElement) {
        currentEditingTaskId = id;
        currentEditingTaskElement = taskElement;
        editTaskInput.value = taskElement.textContent;
        editTaskModal.style.display = 'flex';
    }

    // Close the edit modal
    function closeEditModal() {
        editTaskModal.style.display = 'none';
        currentEditingTaskId = null;
        currentEditingTaskElement = null;
    }

    // Save the edited task
    saveTaskBtn.addEventListener('click', async () => {
        const newTitle = editTaskInput.value.trim();
        if (!newTitle) {
            showNotification('Task title cannot be empty!', 'error');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/${currentEditingTaskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: newTitle }),
            });

            if (response.ok) {
                currentEditingTaskElement.textContent = newTitle;
                showNotification('Task updated successfully!');
                closeEditModal();
            }
        } catch (err) {
            console.error('Error updating task:', err);
            showNotification('Failed to update task', 'error');
        }
    });

    // Cancel editing
    cancelTaskBtn.addEventListener('click', closeEditModal);

    // Delete a task
    async function deleteTask(id, element) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                taskList.removeChild(element);
                showNotification('Task deleted successfully!', 'success');
            }
        } catch (err) {
            console.error('Error deleting task:', err);
            showNotification('Failed to delete task', 'error');
        }
    }

    // Load tasks on page load
    fetchTasks();
});
