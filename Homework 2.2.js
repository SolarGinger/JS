For ECMAScript 5
        rl.question("Введите свою фамилию: ", function(answer) {
            F = answer;
            })
        if (!isNaN(F)){
            console.log("Введенное значение Фамилия некорректно!");
        }
        if (F === ''){
            console.log("Введенное значение Фамилия некорректно!");
        }
        rl.question("Введите своё имя: ", function(answer) {
            I = answer;
            })
        if (!isNaN(I)){
            console.log("Введенное значение Имя некорректно!");
        }
        if (I === ''){
            console.log("Введенное значение Имя некорректно!");
        }
        rl.question("Введите своё отчество: ", function(answer) {
            O = answer;
            })
        if (!isNaN(O)){
            console.log("Введенное значение Отчество некорректно!");
        }
        if (O === ''){
            console.log("Введенное значение Отчество некорректно!");
        }
        rl.question("Введите ваш возраст: ", function(answer) {
            years = answer;
            })
        var after_5 = years + 5;
        if (isNaN(years)){
            console.log("Введенное значение Возраст некорректно!");
        }
        if (years>100){
            console.log("Введенное значение Возраст некорректно!");
        }

        rl.question("Ваш пол (введите 1, если мужской, 2 - если женский): ", function(answer) {
            gender = answer;
            })
            if (answer = 1){
            gender = "мужской";
            }
            else {
            gender = "женский";
            }
        var old;
        if(years<60){
        old="нет";
        }
        else{
        old="да";
        }

        console.log("'Ваше ФИО: ' + F + ' ' + I + ' ' + O +'\n'+ 'Ваш возраст в годах: ' + years +'\n'+ 'Ваш возраст в днях: ' + years*365 +'\n'+ 'Через 5 лет Вам будет: ' + after_5 + ' лет' +'\n'+ 'Ваш пол: ' + gender +'\n'+ ' Вы на пенсии: ' + old");


For ECMAScript 6

        var F = prompt('Ваша фамилия?');
        if (!isNaN(F)){
            console.log("Введенное значение Фамилия некорректно!");
        }
        if (F === ''){
            console.log("Введенное значение Фамилия некорректно!");
        }
        var I = prompt('Ваше имя?');
        if (!isNaN(I)){
            console.log("Введенное значение Имя некорректно!");
        }
        if (I === ''){
            console.log("Введенное значение Имя некорректно!");
        }
        var O = prompt('Ваше отчество?');
        if (!isNaN(O)){
            console.log("Введенное значение Отчество некорректно!");
        }
        if (O === ''){
            console.log("Введенное значение Отчество некорректно!");
        }
        var years = prompt('Ваш возраст?');
        var after_5 = years + 5;
        if (isNaN(years)){
            console.log("Введенное значение Возраст некорректно!");
        }
        if (years>100){
            console.log("Введенное значение Возраст некорректно!");
        }

        var gender = confirm('Ваш пол - мужской?');
        var gender_string;
        if (gender){
        gender_string="мужской";
        }
        else{
        gender_string="женский";
        }
        var old;
        if(years<60){
        old="нет";
        }
        else{
        old="да";
        }

        console.log(`Ваше ФИО:\n + ${F}\n + ${I}\n + ${O}
        + Ваш возраст в годах:\n + ${years} 
        + Ваш возраст в днях:\n + ${years*365}
        + Через 5 лет Вам будет:\n + ${after_5} + лет
        + Ваш пол:\n + ${gender_string}
        + Вы на пенсии:\n + ${old}`);
