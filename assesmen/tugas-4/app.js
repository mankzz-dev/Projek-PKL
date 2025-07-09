const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const alertBox = document.getElementById('alert');
const totalTasks = document.getElementById('total-tasks');
const completedTasks = document.getElementById('completed-tasks');
const pendingTasks = document.getElementById('pending-tasks');

let tasks = [];

// fungsi untuk merender tugas
function renderTasks() {
    taskList.innerHTML = ''; // clear list sebelum isi ulang

    tasks.forEach((task, idx) => {
        // buat satu "li" untuk masing2 tugas
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between bg-gray-100 rounded px-3 py-2';

        // teks tugas
        const span = document.createElement('span');
        span.textContent = task.text;
        span.className = 'flex-1';
        if (task.completed) {
            span.classList.add('line-through', 'text-gray-400'); // kalo udah selesai akan dicoret
        }

        // btn untuk tanda selesai
        const btnDone = document.createElement('button');
        btnDone.textContent = task.completed ? 'Selesai' : 'Tandai Selesai';
        btnDone.className = task.completed
            ? 'bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bg-green-600'
            : 'bg-red-400 text-white px-2 py-1 rounded mr-2 hover:bg-red-500';
        btnDone.onclick = () => {
            tasks[idx].completed = !tasks[idx].completed;
            renderTasks();
        };

        // tombol buat delete
        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Hapus';
        btnDelete.className = ' text-gray-400 px-2 py-1 rounded';
        btnDelete.onclick = () => {
            tasks.splice(idx, 1);
            renderTasks();
        };

        // memasukkan semuanya ke "li"
        li.appendChild(span);
        li.appendChild(btnDone);
        li.appendChild(btnDelete);

        taskList.appendChild(li);
    });

    // update dinamis menu yg di bawah
    totalTasks.textContent = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    completedTasks.textContent = completed;
    pendingTasks.textContent = tasks.length - completed;
}

taskForm.onsubmit = function (e) {
    e.preventDefault(); // biar ga reload halaman
    const value = taskInput.value.trim(); // ambil isi input

    if (!value) {
        alertBox.textContent = 'Tugas tidak boleh kosong!';
        alertBox.classList.remove('hidden'); // munculin alert
        return;
    }

    alertBox.classList.add('hidden'); // sembunyikan alert kalo valid
    tasks.push({ text: value, completed: false });
    taskInput.value = ''; // reset input yg ada
    renderTasks();
};

// kalau mulai isi form alert di sembunyikan
taskInput.oninput = () => {
    if (!alertBox.classList.contains('hidden')) {
        alertBox.classList.add('hidden');
    }
};

renderTasks();