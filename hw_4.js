function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function checkProbabilityTheory(count) {
    let odd = 0;
    for (let index = 0; index < count; index++) {
        if (getRandomArbitrary(100, 1000) % 2) {
            ++odd;
        }
    }

    console.log('Кількість згенерованих чисел:', count);
    console.log('Парних чисел: ', count - odd);
    console.log('Не парних чисел: ', odd);
    console.log('Відсоток парних до не парних: ', 100 - Math.round(odd / count * 100) + '%');
}

checkProbabilityTheory(10);
checkProbabilityTheory(100);
checkProbabilityTheory(1000);
checkProbabilityTheory(10000);
checkProbabilityTheory(100000);