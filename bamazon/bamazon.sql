DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Iphone7", "Mobiles",600,50);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Ipad Air","Tablets",800,100);

INSERT INTO products (product_name, department_name, price,stock_quantity)
 VALUES ("Macbook Pro","Laptops", 1500,150);


INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Macbook Air", "Laptops",1000,100);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Iphone8", "Mobiles", 700,50);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Iphone8 plus", "Mobiles", 800,250);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("IphoneX", "Mobiles", 1000,300);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Ipad 2", "Tablets", 400,80);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Iphone7 plus", "Mobiles", 600,200);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Galaxy note 8", "Mobiles", 800,350);


