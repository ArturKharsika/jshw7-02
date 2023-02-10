let player1 = prompt('Игрок №1: (Камень, ножницы, или бумага)');
let player2 = prompt('Игрок №2: (Камень, ножницы или бумага)');

if (player1 == 'ножницы' && player2 == 'бумага') {
    alert('Игрок №1 выиграл!');
} else if (player1 == 'камень' && player2 == 'ножницы') {
    alert('Игрок №1 выиграл!');
} else if (player1 == 'бумага' && player2 == 'камень') {
    alert('Игрок №1 выиграл!');
} else if (player1 == 'камень' && player2 == 'ножницы') {
    alert('Игрок №1 выиграл!');
} else if (player1 == 'ножницы' && player2 == 'камень') {
    alert('Игрок №2 выиграл!');
} else if (player1 == 'камень' && player2 == 'бумага') {
    alert('Игрок №2 выиграл!');
} else if (player1 == 'ножницы' && player2 == 'камень') {
    alert('Игрок №2 выиграл!');
} else if (player1 == 'ножницы' && player2 == 'ножницы') {
    alert('Ничья');
} else if (player1 == 'камень' && player2 == 'камень') {
    alert('Ничья');
} else if (player1 == 'бумага' && player2 == 'бумага') {
    alert('Ничья');
} else {
    alert('Неправильное значение для ввода');
}