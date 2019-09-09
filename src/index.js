/* ДЗ 2 - работа с массивами и объеектами */

/* 
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (let i=0; i<array.length; i++){
    fn(array[i], i, array);
  }
  return;
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  var newArr = [];
  for (let i=0; i<array.length; i++){
    newArr.push(fn(array[i], i, array));
  }
  return newArr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  var prevVal, currVal, i;
  if(typeof initial == "undefined") {
    i = 1;
    prevVal = array[0];
  }
  else {
    i = 0;
    prevVal = initial;
  }
  for (; i<array.length; i++){
    currVal = fn(prevVal, array[i], i, array);
    prevVal = currVal;
  }
  return currVal;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  var upperProp = [];
  for (let prop in obj){
    upperProp.push(prop.toString().toUpperCase());
  }
  return upperProp;

}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
  var newArr = [];

  if(typeof to == "undefined" || to > array.length)
    to = array.length;
  if (to < -array.length) 
    to = 0;  
  if (to < 0) 
    to = array.length + to;

  if(typeof from == "undefined") 
    from = 0;
  if (from > array.length)
    from = array.length;
  if (from < -array.length) 
    from = 0;  
  if (from < 0) 
    from = array.length + from;  
  
  for(let i = from; i < to; i++){
    newArr.push(array[i])
  }
  return newArr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
  return new Proxy(obj, {set(tar, prop, val) {tar[prop] = (val*val); return true;}});
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
