/*
Создайте функции:
   hasClass(elem, elemСlass),
   addClass(elem, elemСlass),
   removeClass(elem, elemСlass),
   toggleClass(elem, elemСlass),
которые позволяют проверить, есть ли у элемента заданный CSS-класс, добавить к нему CSS-класс, удалить CSS-класс и переключить CSS-класс.

В функции передаются 2 параметра:
   elem - DOM-элемент, который проверяется,
   elemСlass - название класса, которое проверяется.
*/

export function hasClass(elem, elemСlass) {
    return elem.classList.contains(elemСlass);
}

export function addClass(elem, elemСlass) {
    elem.classList.add(elemСlass);
}

export function removeClass(elem, elemСlass) {
    elem.classList.remove(elemСlass);
}

export function toggleClass(elem, elemСlass) {
    elem.classList.toggle(elemСlass);
}
