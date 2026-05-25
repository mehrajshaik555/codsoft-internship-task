const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

let expression = "";

/* Button Click Events */

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        /* Clear All */

        if(value === "C"){

            expression = "";
            display.value = "";

        }

        /* Backspace */

        else if(value === "⌫"){

            expression = expression.slice(0, -1);
            display.value = expression;

        }

        /* Calculate Result */

        else if(value === "="){

            try{

                expression = eval(expression).toString();
                display.value = expression;

            }

            catch(error){

                display.value = "Error";
                expression = "";

            }

        }

        /* Numbers and Operators */

        else{

            expression += value;
            display.value = expression;

        }

    });

});

/* Keyboard Support */

document.addEventListener("keydown", (event) => {

    const key = event.key;

    /* Numbers */

    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ){

        expression += key;
        display.value = expression;

    }

    /* Enter Key */

    else if(key === "Enter"){

        try{

            expression = eval(expression).toString();
            display.value = expression;

        }

        catch(error){

            display.value = "Error";
            expression = "";

        }

    }

    /* Backspace Key */

    else if(key === "Backspace"){

        expression = expression.slice(0, -1);
        display.value = expression;

    }

    /* Escape Key */

    else if(key === "Escape"){

        expression = "";
        display.value = "";

    }

});