const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');

// --- ЗАДАЧА 1 ---

// 1.1 Реверс
function reverseNumber(n) {
    return Number(n.toString().split('').reverse().join(''));
}
btn1.addEventListener('click', function() {
    let input = prompt("Введите число, которое нужно развернуть:", "123");
    if (input) alert("Результат: " + reverseNumber(input));
});

// 1.2 Удаление повторов (используется и для 2.3)
function uniqueSymbol(data) {
    return [...new Set(data.toString())].join(''); 
}
btn2.addEventListener('click', function() {
    let input = prompt("Введите число для очистки от повторов:", "111333456");
    if (input) alert("Результат: " + uniqueSymbol(input));
});

// 1.3 Счётчик вхождений
function countDigit(num, digit) {
    let str = num.toString();
    let count = 0;
    for (let char of str) {
        if (char === digit.toString()) count++;
    }
    return count;
}
btn3.addEventListener('click', function() {
    let input = prompt("Введите число:", "1355567");
    let digit = prompt("Какую цифру считать?", "5");
    if (input && digit) alert("Вхождений: " + countDigit(input, digit));
});

// 1.4 Двоичная последовательность
function maxBinarySequence(num) {
    let bin = Number(num).toString(2); 
    alert("Двоичный вид: " + bin);
    let matches = bin.match(/0+|1+/g) || [];
    return Math.max(...matches.map(s => s.length), 0);
}
btn4.addEventListener('click', function() {
    let input = prompt("Введите число:", "10");
    if (input) alert("Самая длинная серия: " + maxBinarySequence(input));
});

// --- ЗАДАЧА 2 ---

// 2.1 Первый неповторяющийся символ
function firstUniqueChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) return char;
    }
    return "Все символы повторяются";
}
btn5.addEventListener('click', function() {
    let input = prompt("Введите строку:", "фывфавыапрс");
    if (input) alert("Первый уникальный: " + firstUniqueChar(input));
});

// 2.2 Генерация строки
function generateRandomStr(len) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < len; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}
btn6.addEventListener('click', function() {
    let input = prompt("Введите длину строки:", "5");
    if (input) alert("Сгенерировано: " + generateRandomStr(input));
});

// 2.3 Уникальные символы строки
btn7.addEventListener('click', function() {
    let input = prompt("Введите строку для удаления дублей:", "позволяеткопировать");
    if (input) alert("Результат: " + uniqueSymbol(input));
});