let menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  addDishToCourse: function (courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    if (courseName === "appetizers") {
      menu.courses.appetizers.push(dish);
    } else if (courseName === "mains") {
      menu.courses.mains.push(dish);
    } else {
      menu.courses.desserts.push(dish);
    }
  },
  getRandomDishFromCourse: function (courseName) {
    let dishes = menu.courses[courseName];
    let index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
};

let generateRandomMeal = () => {
  let appetizer = menu.getRandomDishFromCourse("appetizers");
  let main = menu.getRandomDishFromCourse("mains");
  let dessert = menu.getRandomDishFromCourse("desserts");
  console.log(`Your appetizer is ${appetizer.name}.
   Your main dish is ${main.name}.
   Your dessert is ${dessert.name}.
   The total cost of your meal is ${
     appetizer.price + main.price + dessert.price
   }.`);
};

menu.addDishToCourse("appetizers", "calamari", 16);
menu.addDishToCourse("appetizers", "egg rolls", 14);
menu.addDishToCourse("appetizers", "chips", 10);
menu.addDishToCourse("mains", "steak", 25);
menu.addDishToCourse("mains", "fish", 25);
menu.addDishToCourse("mains", "lobster", 45);
menu.addDishToCourse("desserts", "cake", 5);
menu.addDishToCourse("desserts", "pie", 6);
menu.addDishToCourse("desserts", "cookie", 7);
