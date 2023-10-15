/*--Задание 1--*/
age = prompt('Введите Ваш возраст')
function wtf(age) {
    if (age >= 60 && age <= 120) return 'Ты уже древний'
    if (age >= 18 && age <= 60) return 'Тертый жизнью'
    if (age >= 12 && age <= 18) return 'Щегол'
    if (age >= 0 && age <= 2) return 'Молокосос'
    return 'Столько не живут'
}
alert(wtf(age))

/*--Задание 2--*/
// let number = prompt('Введите число от 0 до 9', 0); 
// switch(number) {
//     case '0':
//         console.log('0 это )');
//         break;
//     case '1':
//         console.log('1 это !');
//             break;
//     case '2':
//         console.log('2 это @');
//             break;
//     case '3':
//         console.log('3 это #');
//         break;
//     case '4':
//         console.log('4 это $');
//         break;
//     case '5':
//         console.log('5 это %');
//         break;
//     case '6':
//         console.log('6 это ^');
//         break;
//     case '7':
//         console.log('7 это &');
//         break;
//     case '8':
//        console.log('8 это *');
//         break;
//     case '9':
//         console.log('9 это (');
//         break;}

/*-Задание 3--*/
// let number = prompt('Введи число от 100 до 999', 0);
// number = number + '';
// if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
//     { alert('Есть одинаковые числа');
//     } else alert('Нет одинаковых чисел');

/*--Задание 4--*/
// let year = prompt('Введите год', 0);
//     if (year%4 == 0 && year %100 !== 0)
//     { alert('Высокосный');
//     } else alert('Не высокосный');


/*--Задание 5--*/
// let number = prompt('Введи число от 10000 до 99999', 0);
// number = number + '';
// if (number === number.split('').reverse().join(''))
//     alert('Палиндром');
// else
//     alert('Не палиндром');

/*--Задание 6--*/
// let amount = prompt('Количество валюты:', 0);
// let currency = prompt('В чём считаем? USD = 1, EUR = 2, CNY = 3', 0);
// switch(currency) {
//     case '1':
//         alert(amount*97.70 + 'USD');
//         break;
//     case '2':
//         alert(amount*102.72 + 'EUR');
//         break;
//     case '3':
//         alert(amount*13.59 + 'CNY');
//         break;
// }

/*--Задание 7--*/
// let money = prompt('Введите сумму:');
// if (money >=200 && money < 300)
//     alert(money / 100*97 + '$ с 3% скидкой');
// else if (money >=300 && money < 500)
//     alert(money / 100*95 + '$ с 5% скидкой');
// else if (money >=500)
//     alert(money / 100*93 + '$ с 7% скидкой');
// else if (money < 200)
//     alert(money  + '$ братик, сорян, но скидки не будет');

/*--Задание 8--
// alert("Давай проверим, может ли такая окружность поместиться в указанный квадрат.");
//   let circuit = +prompt("Введите длину окружности: ");
//   let perimeter = +prompt("Введите периметр квадрата: ");
//   if (circuit / 2 / Math.PI > perimeter / 4 / 2) { 
//     // Какой мудак придумал это задание!?
//     alert("Окружность данной длины не впишется в данный квадрат!");
//   } else {
//     alert("Окружность данной длины впишется в данный квадрат!")}

/*--Задание 9--*/
// let caliber = prompt('Какой калибр у пистолета ТТ? 1 - 7,62×39мм 2 - 7,62×25мм 3 - 9х18мм');
// let spec = prompt('В какой класс не может спекнуться Рыцарь сперти из WoW? 1 - Танк 2 - ДД 3 - Хилл');
// let car = prompt('Какая марка автомобилей выпускала танки? 1 - Porsche 2 - ГАЗ 3 - Ford');
// let score = 0;
// if (caliber == 2)
//     score += 2;
// if (spec == 3)
//     score += 2;
// if (car == 1)
//     score += 2;
// alert('Баллов заработано: ' + score);

// /*--Задание 10--*/
// let date = prompt('Введите дату - дд.мм.гггг ');
// date = date.split('.');
// let oldDate = new Date(date[2], date[1]-1, date[0]); 
// oldDate.setDate(oldDate.getDate()+1);
// alert(oldDate);
