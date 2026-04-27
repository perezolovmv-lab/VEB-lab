// --- ЗАДАЧА 1 ---

// 1.1 Максимальная разница
document.getElementById('btn8').addEventListener('click', () => {
    const arr = [10, 2, 35, 1, 8];
    const diff = Math.max(...arr) - Math.min(...arr);
    alert(`Массив: [${arr}]\nМакс. разница: ${diff}`);
});

// 1.2 Массив без повторов
document.getElementById('button9').addEventListener('click', () => {
    const arr = [1, 2, 2, 3, 4, 4, 4, 5];
    const unique = [...new Set(arr)];
    alert(`Оригинал: [${arr}]\nБез повторов: [${unique}]`);
});

// 1.3 Фильтрация объектов
document.getElementById('button10').addEventListener('click', () => {
    const tasks = [
        {id: 1, idDone: true}, 
        {id: 2, idDone: false}, 
        {id: 3, idDone: true}
    ];
    // Используем filter
    const done = tasks.filter(item => item.idDone === true);
    console.log("Выполненные задачи:", done);
    alert("Найдено объектов с idDone: true — " + done.length + "\nРезультат в консоли.");
});

// --- ЗАДАЧА 2 ---

// 2.1 Элементы больше указанного числа
document.getElementById('button11').addEventListener('click', () => {
    const arr = [1, 4, 6, 3, 2];
    const limit = +prompt("Введите число X (покажем те, что больше X):", 2);
    const result = arr.filter(num => num > limit);
    alert(`Массив: [${arr}]\nБольше ${limit}: [${result}]`);
});

// 2.2 Плоский массив
document.getElementById('button12').addEventListener('click', () => {
    const multiArr = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];
    // Метод flat(Infinity) делает массив плоским независимо от вложенности
    const flat = multiArr.flat(Infinity);
    console.log(flat);
    alert("Многомерный массив обработан. Результат: " + JSON.stringify(flat));
});

// --- ЗАДАЧА 3 ---

// 3.1 Пары, дающие в сумме 0
document.getElementById('button13').addEventListener('click', () => {
    const arr = [-7, 12, 4, 6, -4, -12, 0];
    let count = 0;
    // Двойной цикл для поиска пар
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) count++;
        }
    }
    alert(`Массив: [${arr}]\nКоличество пар с суммой 0: ${count}`);
});

// 3.2 Тройки, дающие в сумме 0
document.getElementById('button14').addEventListener('click', () => {
    const arr = [-1, 2, 4, 7, -4, 1, -2];
    let count = 0;
    // Тройной цикл для поиска троек
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) count++;
            }
        }
    }
    alert(`Массив: [${arr}]\nКоличество троек с суммой 0: ${count}`);
});