var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

const trustedEmailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@([a-zA-Z]+\.)?(gmail|yahoo)\.com$/;

const trustedEmails = arr.filter(user => trustedEmailPattern.test(user.email)).map(user => user.email);

console.log("Гідні довіри адреси:", trustedEmails);