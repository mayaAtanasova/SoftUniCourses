function result() {
    let firstEl, secondEl, resultEl;

    return {
        init: (selector1, selector2, resultSelector) => {
            firstEl = document.querySelector(selector1);
            secondEl = document.querySelector(selector2);
            resultEl = document.querySelector(resultSelector);
        },
        add: () => {
            resultEl.value = Number(firstEl.value) + Number(secondEl.value);
        },
        subtract: () => {
            resultEl.value = Number(firstEl.value) - Number(secondEl.value);
        },
    };
}

const calculate = result(); 
calculate.init ('#num1', '#num2', '#result'); 




