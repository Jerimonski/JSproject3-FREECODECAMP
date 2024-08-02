const number = document.getElementById('number');
const check_btn = document.getElementById('check_btn');
const clear_btn = document.getElementById('clear_btn');
const number_validated_box = document.getElementById('number_validated_box');


const check_valid_number = input => {
    if (input === ''){
        alert("Please provide a phone number");
    }
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );
    const newDiv = document.createElement('div');
    newDiv.className = 'number_validated_box'; 
    phoneRegex.test(input)
    ? (newDiv.style.color = '#00471b')
    : (newDiv.style.color = '#4d3800');
    newDiv.appendChild(
    document.createTextNode(
        `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
    );
    number_validated_box.appendChild(newDiv);
};


// add label valid or not number
check_btn.addEventListener("click", () => {
    check_valid_number(number.value);
    number.value = '';
});

// clear labels
clear_btn.addEventListener("click", () => {
    number_validated_box.textContent = '';
});
