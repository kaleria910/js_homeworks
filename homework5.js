var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

parseInt("60 грн") // → 60

services.price = function() {
  let sum = 0;

  for (let key in this) {
    if (typeof this[key] === "string") {
      sum += parseInt(this[key]);
    }
  }

  return sum + " грн";
};

services.minPrice = function() {
  let min = Infinity;

  for (let key in this) {
    if (typeof this[key] === "string") {
      let price = parseInt(this[key]);
      if (price < min) {
        min = price;
      }
    }
  }

  return min + " грн";
};

services.maxPrice = function() {
  let max = 0;

  for (let key in this) {
    if (typeof this[key] === "string") {
      let price = parseInt(this[key]);
      if (price > max) {
        max = price;
      }
    }
  }

  return max + " грн";
};

console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());


