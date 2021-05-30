	// Array of products, each product is an object with different fieldset
	// A set of ingredients should be added to products		 

	var products = [{
	        name: "brocoli",
	        vegetarian: true,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 1.99
	    },
	    {
	        name: "bread",
	        vegetarian: true,
	        glutenFree: false,
	        nutFree: true,
	        lactoseFree: true,
	        price: 2.35
	    },
	    {
	        name: "salmon",
	        vegetarian: false,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 10.00
	    },
	    {
	        name: "milk",
	        vegetarian: false,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: false,
	        price: 10.00
	    },
	    {
	        name: "nut butter",
	        vegetarian: true,
	        glutenFree: false,
	        nutFree: false,
	        lactoseFree: true,
	        price: 10.00
	    },
	    {
	        name: "water bottle",
	        vegetarian: true,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 10.00
	    },
	    {
	        name: "nut butter",
	        vegetarian: true,
	        glutenFree: true,
	        nutFree: false,
	        lactoseFree: true,
	        price: 10.00
	    },
	    {
	        name: "tomato",
	        vegetarian: true,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 10.00
	    },
	    {
	        name: "bacon",
	        vegetarian: false,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 10.00
	    },
	    {
	        name: "chicken wings",
	        vegetarian: false,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 10.00
	    }

	];



	// given restrictions provided, make a reduced list of products
	// prices should be included in this list, as well as a sort based on price

	function restrictListProducts(prods, restriction) {
	    let product_names = [];
	    for (let i = 0; i < prods.length; i += 1) {
	        if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
	            product_names.push(prods[i].name);
	        } else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
	            product_names.push(prods[i].name);
	        } else if ((restriction == "NutFree") && (prods[i].nutFree == true)) {
	            product_names.push(prods[i].name);
	        } else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)) {
	            product_names.push(prods[i].name);
	        } else if (restriction == "None") {
	            product_names.push(prods[i].name);
	        }
	    }
	    return product_names;
	}

	// Calculate the total price of items, with received parameter being a list of products
	function getTotalPrice(chosenProducts) {
	    totalPrice = 0;
	    for (let i = 0; i < products.length; i += 1) {
	        if (chosenProducts.indexOf(products[i].name) > -1) {
	            totalPrice += products[i].price;
	        }
	    }
	    return totalPrice;
	}