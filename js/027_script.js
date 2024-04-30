//Какое будет выведено значение?: 
let x = 5; 
alert( x++ ); //5 это постфикс, если стоял префкс ++х получилибы 6

// Чему равно такое выражение?: 
[ ] + false - null + true  //Nan Пытаемся совершить нематематическую операцию ([]+false пустой массив это пустая строка, конкатинация со строкой строка вычитаем из неё null)

//Что выведет этот код?: 
let y = 1; 
let x = y = 2; 
alert(x);  //2 (произойдёт последовательное присваивание справа налево)

//Чему равна сумма? 
[ ] + 1 + 2 //12 Конкатенируя строку с любым другим типом данных, то получаем строку

//Что выведет этот код?: 
alert( "1"[0] ) //1 Это обращение по индексу к строке "1"

//Чему равно? 
2 && 1 && null && 0 && undefined  //null И запинается на лжи

//Есть ли разница между выражениями? 
!!( a && b ) и (a && b)? //false (!! превращают первое выражение в булиновое)

//Что выведет этот код: 
alert( null ||  2 && 3 || 4 ); ? //3 Или запинается на правде, по приоритету снач сравнивается &&

//Правда ли что a == b ?
a = [1, 2, 3]; b = [1, 2, 3];  //false Содержат разные ссылки на идентичные массивы

//Что выведет этот код:
alert( +"Infinity" ); ? //Infinity Но тип данных Number т.к. унарный + преобразует тип данных

// Верно ли сравнение:
 "Ёжик" > "яблоко"? //false Строки сравниваются посимвольно по № расположения в т. Юникод 

//Чему равно 
0 ||  "" ||  2 || undefined ||  true || falsе ? //2 Или запинается на правде, сравнение начинается с лева направо, первая правде оказывается 2 и дальше код не идёт


При сравнении оператора && срабатывает правило "И запинается на лжи"  и возвращает последнее ложное выражение.


При сравнении оператора || срабатывает правило "Или запинается на правде"  и возвращает первое правдивое выражение.