const number = document.getElementById('number');
const check_btn = document.getElementById('check_btn');
const clear_btn = document.getElementById('clear_btn');
const number_validated_box = document.getElementById('number_validated_box');


// to certificate if there is a input a
// return is wrong
// if (number === '') {
//     alert("Please provide a phone number");
//     return; 
// }

// add label valid or not number
check_btn.addEventListener("click", () => {
    (number_validated_box.innerHTML += `
        <div class="number_validated_box">${number.value}</div>
    `);
    number_validated_box.style.display = "block";
});

// clear labels
clear_btn.addEventListener("click", () => {
    (number_validated_box.innerHTML = ` `)
    number_validated_box.style.display = "none";
});
