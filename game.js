let number = document.querySelector('#number');
let generate = document.querySelector('.generate');

//Generate random number 
generate.addEventListener('click', function () {
    let generated = number.innerHTML = Math.floor(Math.floor(100000 + Math.random() * 900000));
    let guessResult = generated.toString();
    console.log(guessResult);


    //show hide content onClick
    $('.btn').on('click', function () {
        $(document).ready(function () {
          
            let end = setTimeout(function () {
                $('.main').hide();
            }, 5000);
            setTimeout(function () {
                $('.playAgain').show();
            }, 5000);

        });

    });


    $('.replay').on('click', function () {
        $(document).ready(function () {
            $(".playAgain").hide();
            location.reload();
            $(".main").show();
        });
    });

    let input = document.querySelector('#input');
    let guess = document.querySelector('.guess');
    let correct = document.querySelector('#correct');
    guess.addEventListener('click', function (hello) {
        let inputResult = input.value
        console.log(inputResult);

        function getSameCount(str1, str2) {
            let count = 0;
            const obj = str2.split("");
            for (str of str1) {
                let idx = obj.findIndex(s => s === str);
                if (idx >= 0) {
                    count++;
                    obj.splice(idx, 1);
                }
            }
            return count;
        }
        let final = getSameCount(inputResult, guessResult);
        console.log(final)


        if (input.value < 1) {
            alert('Enter a Number');
        } else {
            correct.innerHTML = final + " " + "Guesses are correct";
            console.log(final.length);
        }

    });
})
