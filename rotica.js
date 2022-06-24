const displayPswd = document.querySelector('.password-output');
const copyPswd = document.querySelector('.copy-password');
const generateBtn = document.querySelector('.btn');
const length = document.querySelector('.length');
const lowercase = document.querySelector('.lowercase');
const uppercase = document.querySelector('.uppercase');
const numbers = document.querySelector('.numbers');
const symbols = document.querySelector('.symbols');
const passwordPara = document.querySelector('.pswd');
const progressBar = document.querySelector('.progress-bar');
const pswdStrengthText = document.querySelector('.password-strength-text');
const time = document.querySelector('.time');


let lineBreak = document.createElement('br');
let randomNum;
let pswdStrength;
let password;
let index = 4;
let pswdLength = 20;
let characters = ['abcdefghijklmnopqrestuvwxyz', 'ABCDEFGHIJKLMNOPQRESTUVWXYZ','abcdefghijklmnopqrestuvwxyzABCDEFGHIJKLMNOPQRESTUVWXYZ', '1234567890', 'abcdefghijklmnopqrestuvwxyz1234567890', 'ABCDEFGHIJKLMNOPQRESTUVWXYZ1234567890','abcdefghijklmnopqrestuvwxyzABCDEFGHIJKLMNOPQRESTUVWXYZ1234567890', '!@#$%^&*()_+{}":><?/*-,./;[]=-`~', 'abcdefghijklmnopqrestuvwxyz!@#$%^&*()_+{}":><?/*-,./;[]=-`~', 'ABCDEFGHIJKLMNOPQRESTUVWXYZ!@#$%^&*()_+{}":><?/*-,./;[]=-`~', 'abcdefghijklmnopqrestuvwxyzABCDEFGHIJKLMNOPQRESTUVWXYZ!@#$%^&*()_+{}":><?/*-,./;[]=-`~', '!@#$%^&*()_+{}":><?/*-,./;[]=-`~1234567890','abcdefghijklmnopqrestuvwxyzABCDEFGHIJKLMNOPQRESTUVWXYZ1234567890!@#$%^&*()_+{}":><?/*-,./;[]=-`~1234567890', 'ABCDEFGHIJKLMNOPQRESTUVWXYZ1234567890!@#$%^&*()_+{}":><?/*-,./;[]=-`~1234567890']

//Password Control
lowercase.onchange = () => {
    if (lowercase.checked == true && uppercase.checked == false && numbers.checked == false && symbols.checked == false) {
        index = 0;
        console.log(index)
    } else if (lowercase.checked == true && uppercase.checked == true && numbers.checked == false && symbols.checked == false) {
        index = 2;
        console.log(index)
    } else if (lowercase.checked == true && numbers.checked == true && uppercase.checked == false && symbols.checked == false) {
        index = 4;
        console.log(index)
    } else if (uppercase.checked == true && numbers.checked == true && lowercase.checked == false && symbols.checked == false) {
        index = 5;
        console.log(index)
    } else if (numbers.checked == true && lowercase.checked == true && uppercase.checked == true && symbols.checked == false) {
        index = 6;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == false && uppercase.checked == false && numbers.checked == false) {
        index = 7;
        console.log(index)
    } else if (numbers.checked == true && lowercase.checked == false && uppercase.checked == false && symbols.checked == false) {
        index = 3;
        console.log(index);
    } else if (uppercase.checked === true && lowercase.checked === false && numbers.checked === false && symbols.checked === false) {
        index = 1;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == true && uppercase.checked == false && numbers.checked == false) {
        index = 8;
        console.log(index)
    } else if (symbols.checked == true && uppercase.checked == true && lowercase.checked == false && numbers.checked == false) {
        index = 9;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == true && uppercase.checked == true && numbers.checked == false) {
        index = 10;
        console.log(index)
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == false && uppercase.checked == false) {
        index = 11;
        console.log(index, characters[12])
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == true && uppercase.checked == true) {
        index = 12;
        console.log(index)
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == false && uppercase.checked == true) {
        index = 13;
        console.log(index)
    }
};

uppercase.onchange = () => {
    if (lowercase.checked == true && uppercase.checked == false && numbers.checked == false && symbols.checked == false) {
        index = 0;
        console.log(index)
    } else if (lowercase.checked == true && uppercase.checked == true && numbers.checked == false && symbols.checked == false) {
        index = 2;
        console.log(index)
    } else if (lowercase.checked == true && numbers.checked == true && uppercase.checked == false && symbols.checked == false) {
        index = 4;
        console.log(index)
    } else if (uppercase.checked == true && numbers.checked == true && lowercase.checked == false && symbols.checked == false) {
        index = 5;
        console.log(index)
    } else if (numbers.checked == true && lowercase.checked == true && uppercase.checked == true && symbols.checked == false) {
        index = 6;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == false && uppercase.checked == false && numbers.checked == false) {
        index = 7;
        console.log(index)
    } else if (numbers.checked == true && lowercase.checked == false && uppercase.checked == false && symbols.checked == false) {
        index = 3;
        console.log(index);
    } else if (uppercase.checked === true && lowercase.checked === false && numbers.checked === false && symbols.checked === false) {
        index = 1;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == true && uppercase.checked == false && numbers.checked == false) {
        index = 8;
        console.log(index)
    } else if (symbols.checked == true && uppercase.checked == true && lowercase.checked == false && numbers.checked == false) {
        index = 9;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == true && uppercase.checked == true && numbers.checked == false) {
        index = 10;
        console.log(index)
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == false && uppercase.checked == false) {
        index = 11;
        console.log(index, characters[12])
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == true && uppercase.checked == true) {
        index = 12;
        console.log(index)
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == false && uppercase.checked == true) {
        index = 13;
        console.log(index)
    }
};

numbers.onchange = () => {
    if (lowercase.checked == true && uppercase.checked == false && numbers.checked == false && symbols.checked == false) {
        index = 0;
        console.log(index)
    } else if (lowercase.checked == true && uppercase.checked == true && numbers.checked == false && symbols.checked == false) {
        index = 2;
        console.log(index)
    } else if (lowercase.checked == true && numbers.checked == true && uppercase.checked == false && symbols.checked == false) {
        index = 4;
        console.log(index)
    } else if (uppercase.checked == true && numbers.checked == true && lowercase.checked == false && symbols.checked == false) {
        index = 5;
        console.log(index)
    } else if (numbers.checked == true && lowercase.checked == true && uppercase.checked == true && symbols.checked == false) {
        index = 6;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == false && uppercase.checked == false && numbers.checked == false) {
        index = 7;
        console.log(index)
    } else if (numbers.checked == true && lowercase.checked == false && uppercase.checked == false && symbols.checked == false) {
        index = 3;
        console.log(index);
    } else if (uppercase.checked === true && lowercase.checked === false && numbers.checked === false && symbols.checked === false) {
        index = 1;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == true && uppercase.checked == false && numbers.checked == false) {
        index = 8;
        console.log(index)
    } else if (symbols.checked == true && uppercase.checked == true && lowercase.checked == false && numbers.checked == false) {
        index = 9;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == true && uppercase.checked == true && numbers.checked == false) {
        index = 10;
        console.log(index)
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == false && uppercase.checked == false) {
        index = 11;
        console.log(index, characters[12])
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == true && uppercase.checked == true) {
        index = 12;
        console.log(index)
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == false && uppercase.checked == true) {
        index = 13;
        console.log(index)
    }
};

symbols.onchange = () => {
    if (lowercase.checked == true && uppercase.checked == false && numbers.checked == false && symbols.checked == false) {
        index = 0;
        console.log(index)
    } else if (lowercase.checked == true && uppercase.checked == true && numbers.checked == false && symbols.checked == false) {
        index = 2;
        console.log(index)
    } else if (lowercase.checked == true && numbers.checked == true && uppercase.checked == false && symbols.checked == false) {
        index = 4;
        console.log(index)
    } else if (uppercase.checked == true && numbers.checked == true && lowercase.checked == false && symbols.checked == false) {
        index = 5;
        console.log(index)
    } else if (numbers.checked == true && lowercase.checked == true && uppercase.checked == true && symbols.checked == false) {
        index = 6;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == false && uppercase.checked == false && numbers.checked == false) {
        index = 7;
        console.log(index)
    } else if (numbers.checked == true && lowercase.checked == false && uppercase.checked == false && symbols.checked == false) {
        index = 3;
        console.log(index);
    } else if (uppercase.checked === true && lowercase.checked === false && numbers.checked === false && symbols.checked === false) {
        index = 1;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == true && uppercase.checked == false && numbers.checked == false) {
        index = 8;
        console.log(index)
    } else if (symbols.checked == true && uppercase.checked == true && lowercase.checked == false && numbers.checked == false) {
        index = 9;
        console.log(index)
    } else if (symbols.checked == true && lowercase.checked == true && uppercase.checked == true && numbers.checked == false) {
        index = 10;
        console.log(index)
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == false && uppercase.checked == false) {
        index = 11;
        console.log(index)
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == true && uppercase.checked == true) {
        index = 12;
        console.log(index)
    } else if (symbols.checked == true && numbers.checked == true && lowercase.checked == false && uppercase.checked == true) {
        index = 13;
        console.log(index)
    }
}

//Generate Random Number
generateBtn.onclick = () => {
    password = '';
    copyPswd.innerHTML = 'Copy Password';
    pswdLength = length.value;
    if (pswdLength > 100) {
        alert('Password length should be less than 100.');
        pswdLength = 18;
    } else if (pswdLength < 1) {
        alert('Password length should be more than 0');
        pswdLength = 18;
    }
    for (i=0; i<pswdLength; i++) {
        randomNum = Math.trunc(Math.random() * characters[index].length);
        password += characters[index][randomNum];
    } 

    if (pswdLength > 50) {
        passwordPara.innerHTML = password.substring(0, 50) + '<br>' + password.substring(50, password.length);
        displayPswd.style.padding = '45px 50px';
    } else {
        passwordPara.innerHTML = password;
    }

    if (pswdLength < 6) {
        pswdStrength = 10;
        console.log(pswdStrength);
        progressBar.style.width = `${pswdStrength}%`;
        progressBar.style.background = 'red';
        pswdStrengthText.innerHTML = 'Weak';
        time.innerHTML = '0.362 seconds'
    } else if (pswdLength < 9) {
        pswdStrength = 40;
        console.log(pswdStrength);
        progressBar.style.width = `${pswdStrength}%`;
        progressBar.style.background = '#fce803';
        pswdStrengthText.innerHTML = 'Moderate';
        time.innerHTML = '16 days'
    } else if (pswdLength < 13) {
        pswdStrength = 70;
        console.log(pswdStrength);
        progressBar.style.width = `${pswdStrength}%`;
        progressBar.style.background = '#7aff78';
        pswdStrengthText.innerHTML = 'Strong';
        time.innerHTML = '5432 years'
    } else if (pswdLength < 16) {
        pswdStrength = 80;
        console.log(pswdStrength);
        progressBar.style.width = `${pswdStrength}%`;
        progressBar.style.background = '#04ff00';
        pswdStrengthText.innerHTML = 'Very Strong';
        time.innerHTML = '2 million years'
    } else if (pswdLength > 16) {
        pswdStrength = 100;
        console.log(pswdStrength);
        progressBar.style.width = `${pswdStrength}%`;
        progressBar.style.background = '#1572A1';
        pswdStrengthText.innerHTML = 'Robust And Hack Resistant';
        time.innerHTML = '5 billion years'
    }


}

//Copy Password
copyPswd.onclick = () => {
    navigator.clipboard.writeText(passwordPara.innerHTML);
    copyPswd.innerHTML = 'Password Copied! enjoy';
}