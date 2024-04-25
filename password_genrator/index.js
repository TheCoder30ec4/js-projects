function passwordGenrator(passwordLength,upperCase,lowerCase,symbols,numbers){
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    const symbol = '!@#$%^&*()_+-/{}[]?';
    let allowedChars = "";
    let password = "";

    allowedChars += upperCase ? upper : "";
    allowedChars += lowerCase ? lower : "";
    allowedChars += numbers ? number: "";
    allowedChars += symbols ? symbol: "";

    if(passwordLength<=0){
        return 'Password must be atleast 1'
    }
    if(allowedChars.length === 0){
        return 'At least 1 set of char needs to be selected';
    }
    for(let i=0;i<passwordLength;i++){
        const randIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randIndex];
    }
    return password;
}


const upperCase = true;
const lowerCase = false;
const passwordLength = 12;
const symbols = true;
const numbers = false;

const password = passwordGenrator(passwordLength,
                                upperCase,
                                lowerCase,
                                symbols,
                                numbers);

console.log(`Genrated Password: ${password}`);
window.alert(`Password: ${password}`);
