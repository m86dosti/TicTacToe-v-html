    // متغیرهای مورد نیاز
    var turn = "x"; // نوبت بازیکن
    var board = ["", "", "", "", "", "", "", "", ""]; // وضعیت صفحه بازی
    var gameOver = false; // پایان بازی
    var display = document.querySelector(".display"); // عنصر نمایش نوبت و برنده

    // تابع بررسی برنده بازی
    function checkWinner() {
      // الگوهای برنده شدن
      var patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      // حلقه برای بررسی هر الگو
      for (var i = 0; i < patterns.length; i++) {
        var pattern = patterns[i]; // الگوی فعلی
        var a = board[pattern[0]]; // مقدار خانه اول الگو
        var b = board[pattern[1]]; // مقدار خانه دوم الگو
        var c = board[pattern[2]]; // مقدار خانه سوم الگو

        // اگر هر سه خانه یکسان باشند و خالی نباشند
        if (a == b && b == c && a != "") {
          // اعلام برنده بازی
          display.innerHTML = "بازیکن <span class='display " + a + "'>" + a.toUpperCase() + "</span> برنده شد!";
          // تغییر وضعیت پایان بازی
          gameOver = true;
          // خروج از تابع
          return;
        }
      }

      // اگر هیچ برنده‌ای نبود و تمام خانه‌ها پر شده بودند
      if (!board.includes("")) {
        // اعلام مساوی شدن بازی
        display.innerHTML = "بازی مساوی شد!";
        // تغییر وضعیت پایان بازی
        gameOver = true;
        // خروج از تابع
        return;
      }

      // تغییر نوبت بازیکن
      if (turn == "x") {
        turn = "o";
      } else {
        turn = "x";
      }
      // نمایش نوبت بازیکن
      display.innerHTML = "نوبت بازیکن <span class='display " + turn + "'>" + turn.toUpperCase() + "</span>";
    }

    // تابع کلیک روی خانه
    function cellClicked(id) {
      // اگر بازی تمام نشده بود
      if (!gameOver) {
        // گرفتن شماره خانه
        var index = parseInt(id.replace("cell", ""));
        // گرفتن عنصر خانه
        var cell = document.getElementById(id);
        // اگر خانه خالی بود
        if (board[index] == "") {
          // قرار دادن علامت بازیکن در خانه
          cell.innerHTML = turn.toUpperCase();
          cell.classList.add(turn);
          // به روز رسانی وضعیت صفحه بازی
          board[index] = turn;
          // بررسی برنده بازی
          checkWinner();
        }
      }
    }
