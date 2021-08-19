$(document).ready(function () {
  var currentFloor = 2; // текущий этаж
  var floorPath = $(".home-image path");
  var counterUp = $('.counter-up');
  var counterDown = $(".counter-down");

  // функция при наведении на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажа
    currentFloor = $(this).attr("data-floor"); // получаем значение ттекущего 
    $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа
  });

  counterUp.on("click", function () { // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа не больше 18
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false // формат на 01 а не на 1
      });
      $('.counter').text(usCurrentFloor); // записываем значени этажа в счётчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  counterDown.on('click', function () {
    if ( currentFloor > 2 ) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});