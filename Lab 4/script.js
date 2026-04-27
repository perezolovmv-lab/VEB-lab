const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    
    // 1. Переменные
    let name = "Джон";
    let admin = name;
    alert("Задание 1 (admin): " + admin);

    // 2. Сумма чисел
    let a = +prompt("Задание 2: Введите 1-е число", 1);
    let b = +prompt("Задание 2: Введите 2-е число", 2);
    alert("Сумма: " + (a + b));

    // 3. Чётные числа от 2 до 10
    alert("Задание 3: Сейчас будут показаны чётные числа");
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) { // Добавлена проверка на чётность
            alert(i);
        }
    }

    // 4. Цикл while
    let i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i++;
    }

    // 5. Число больше 100
    let num;
    while (true) {
        num = prompt("Задание 5: Введите число больше 100", "");
        if (num === null || num > 100) {
            break; 
        }
    }

    // 6. Простые числа
    let n = +prompt("Задание 6: До какого числа искать простые числа?", 10);
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            alert("Простое число: " + i);
        }
    }
    
    alert("Все задания выполнены!");
});