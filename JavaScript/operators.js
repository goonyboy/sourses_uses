const operators = {
  //Арифметические операторы
    arifmetics: {
      plus: "+",
      minus: "-",
      multiply: "*", 
      divide: "/"
    },
  //Операторы сравнения
    compare: {
      equal: "===",         //Равно
      not_equal: "!==",     //Не равно
      less_or_equal: "<=",  //Меньше или равно
      more_or_equal: ">="   //Больше или равно
    },
  //Логические операторы
    logic: {
      not: "!",   //Не
      and: "&&",  //И
      or: "||"    //Или
    },
  //Оператор присваивания
    assign: "="
  }
  
  
  //Текстовые операторы
  const textOperators = {
    typeof: "typeof",         //проверяет тип значения
    instanceof: "instanceof", //проверяет принадлежность классу
  }

  // Инфиксная запись:
  //        операнд оператор операнд
  // a = 10
  // a += 5

  // Префиксная запись:
  //        оператор операнд
  // ++a (увеличивает переменную "a" на 1)
  // delete obj.a (удаляет свойство "a" объекта "obj")

  // Постфиксная запись
  //        операнд оператор
  // a++
  // myFn()