//dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

//establishing connection to database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  displayinventory();
});

//Displaying everything
function displayinventory() {
    connection.query("SELECT * FROM products", function(err, res) {
    //   for (var i = 0; i < res.length; i++) {
        if (err) throw err;
        console.table(res)
        // console.log("ID = "+res[i].item_id + " | " + "Name= "+res[i].product_name + " | " + "Department= "+res[i].department_name + " | " + "Price= " +res[i].price + " | "+ "Quantity available="+res[i].stock_quantity);
    //   }
      console.log("-----------------------------------");
      
    });
  }


  //Input validation
  function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);
    

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}
  //questions for prompt
  inquirer.prompt([
  {
      message: "What's the id of the product you want to order?",
      type: "input",
      name: "id",
      validate: validateInput
  },{
      message: "Quantity needed?",
      type: "input",
      name: "quantity",
      validate: validateInput
  },
  
  ])
  .then(function(input) {

    var item=input.id;
    var quantity=input.quantity;

    var querystr = "SELECT * FROM products"
    connection.query(querystr,{id:item},function(err, results) {
        if (err) throw err;
    if(results.length===0){
        console.log("Invalid item id");
        displayinventory();
        // console.log("Insufficient Quantity");
    }
    else{
        var productdata=results[0];
        if(quantity<=productdata.stock_quantity){
            console.log('Congratulations, the product you requested is in stock! Placing order!');

        // Construct the updating query string
            var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productdata.stock_quantity - quantity) + ' WHERE item_id = ' + item;
            // console.log('updateQueryStr = ' + updateQueryStr);

            // Update the inventory
            connection.query(updateQueryStr, function(err, results) {
                if (err) throw err;

                console.log('Your order has been placed! Your total is $' + productdata.price * quantity);
                console.log('Thank you for shopping with us!');
                console.log("\n---------------------------------------------------------------------\n");

                // End the database connection
                connection.end();
            })
        }
        else {
            console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
            console.log('Please modify your order.');
            console.log("\n---------------------------------------------------------------------\n");

            displayinventory();
        }
        
    }
});

  })



  
  
  
