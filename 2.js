const is_username_valid = username =>
    /^[a-z][a-z0-9]{8,12}/.test(username);

const is_password_valid = password =>
    /{9,}/.test(password) && password.includes("!@#$%^&*_=.,+?");

console.log(is_username_valid("adminivan"));
console.log(is_username_valid("adm1n1v4n"));
console.log(is_password_valid("4dM1n!v4n"));
console.log(is_password_valid("1V4n@dmin"));
