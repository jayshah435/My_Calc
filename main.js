var string = " ";
var buttons = document.querySelectorAll('.button');
console.log(buttons);
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {

        if(e.target.innerHTML == 'AC'){
            console.log(e.target);
            document.querySelector('input').value = '';
            string = document.querySelector('input').value

        }

        else if (e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else {
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }

    });

});