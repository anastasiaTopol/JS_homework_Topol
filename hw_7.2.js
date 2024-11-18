function price(obj) {
    let result = 0;

    for (key in obj) {
        if (
            !obj.hasOwnProperty(key) ||
            typeof obj[key] === 'function'
        ) {
            continue;
        }
        
        var price = Number.parseFloat(obj[key]);

        if (Number.isNaN(price)) {
            throw new Error(`Invalid price: ${obj[key]}`);
        }

        result += price;
    }

    return result;
}

function minPrice(obj) {
    let result;

    for (key in obj) {
        if (
            !obj.hasOwnProperty(key) ||
            typeof obj[key] === 'function'
        ) {
            continue;
        }
        
        var price = Number.parseFloat(obj[key]);

        if (Number.isNaN(price)) {
            throw new Error(`Invalid price: ${obj[key]}`);
        }

        if (result > price || result === undefined) {
            result = price;
        }
    }

    return result;
}

function maxPrice(obj) {
    let result;

    for (key in obj) {
        if (
            !obj.hasOwnProperty(key) ||
            typeof obj[key] === 'function'
        ) {
            continue;
        }
        
        var price = Number.parseFloat(obj[key]);

        if (Number.isNaN(price)) {
            throw new Error(`Invalid price: ${obj[key]}`);
        }

        if (result < price || result === undefined) {
            result = price;
        }
    }

    return result;
}

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price() {
        return price(this);
    },
    minPrice() {
        return minPrice(this);
    },
    maxPrice() {
        return maxPrice(this);
    }
};

services['Розбити скло'] = "200 грн";

console.log(services);
console.log(price(services), services.price());
console.log(minPrice(services), services.minPrice());
console.log(maxPrice(services), services.maxPrice());
