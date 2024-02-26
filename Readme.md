### JavaScript код выполняет разбивку текста на фрагменты, удовлетворяющие

## всем условиям из задания. Результат выведен в консоль.

Выполнение

1. Функция `splitText(text)` принимает на вход один параметр - текст `text`, который нужно разбить на фрагменты.

2. Начинаем с разделения входного текста на слова с помощью метода `split(" ")`, который разбивает текст по пробелам и сохраняет слова в массив `words`.

3. Инициализируем переменные `maxLength`, `fragments` и `currentFragment` для хранения промежуточных результатов.

4. Итерируем по массиву `words` и добавляем слова к текущему фрагменту, пока общая длина фрагмента не превысит `maxLength`. Когда это происходит, добавляем текущий фрагмент в массив `fragments` и начинаем формировать новый фрагмент.

5. Если после завершения прохода по словам в конце остался текущий фрагмент, также добавляем его в массив `fragments`.

6. Добавление суффиксов: Если в массиве `fragments` больше одного фрагмента, добавляем к каждому элементу массива суффикс в формате "k/n", где k - порядковый номер фрагмента, а n - общее количество фрагментов.

7. Возврат результата: Функция возвращает массив `fragments`, содержащий разбитый на фрагменты текст, удовлетворяющий всем условиям задания.