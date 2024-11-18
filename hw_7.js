let obj = {
    name: 'Nastia',
    age: 30,
    male: false,
    getInfo() {
        for (let key in this) {
            if (
                !this.hasOwnProperty(key) ||
                typeof this[key] === 'function'
            ) {
                continue;
            }

            console.log(`${key}: `, this[key]);
        }
    }
};

obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.