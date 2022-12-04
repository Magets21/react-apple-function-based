////After installing mysql and express modules from npm using the terminal as
////npm i mysql & npm i express, we import them here in our code as follows
////Installing nodemon is also a plus b/c whenever there is a change in our code, we don't need to run our terminal, it will automatically refresh it.

///in order to hide passwords, usernames, keys..., we meed to install npm i dotenv
let express = require("express");
let mysql = require("mysql");
const cors = require("cors");

//Initialize express so that we can use it
let app = express();

// Optional - cross origin resource sharing

//It means allow requests only from the localhost
// const corsOption = {
//   origin: ["http://localhost:3000"],
// };
// app.use(cors(corsOption));

////cors - cross origin resource sharing
////we use cors() as a middleware in app.use() so that information in the database can be shared to other apps (so that the backend and frontend applications share resources/data)
app.use(cors());

// Question 1:
// Create a MySQL database by the name "myDB" and create a database user by
// the name "myDBuser" with a permissions to connect with the "myDB" database. Use the
// "mysql" module to create a connection with the newly created database. Display console
// message if the connection is successful or if it has an error.
// Please find further instructions under the “Instructions for question 1” below.

//  you need a MySQL driver, a
// module that creates a connection between Node and the MySQL database you created
//  Make sure to install the "mysql" driver module from npm and import it in your
// “app.js”

//Next the server create connection with the database
// let mysqlConnection = mysql.createConnection({
//   ////socketPath is not needed for windows, its for Mac users
//   //// socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
//   user: "myDBuser",
//   password: "1234",
//   host: "localhost",
//   database: "myDB",
//   port: "1234",
// });
const port = process.env.PORT
let mysqlConnection = mysql.createConnection({
  ////socketPath is not needed for windows, its for Mac users
  //// socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
  user: "myDBuser",
  password: "1234",
  host: "localhost",
  database: "myDB",
});

////when connected, call callback function confirming its connected
mysqlConnection.connect((err) => {
  if (err) console.log(err);
  console.log("Connected");
});
////the server need to create/have port so that requests from client be listened/heared
app.listen(port, () => {
  console.log("Server listening");
});

// Question 2:
// Here is a link to a document that contains the tables we need to create and
// convert the apple.com/iphones page into a dynamic page with a database. As you can see
// from the document, there are 5 tables that are needed (please scroll horizontally and
// vertically over the document to see all the 5 tables). Write a SQL query to create the
// apple.com tables inside of the "myDB" database you created above. Once you write the
// queries, use the "mysql" module to execute the queries on the database. Try both of these
// methods to initiate the execution of the queries:
// ● Include the execution code directly in the module to be executed as you run the app
// ● Use the Express module to receive requests. Configure your module in a way that it
// executes the queries when the "/install" URL is visited.
// Please find further instructions under the “Instructions for question 2” below.

//Install: Create the tables necessary
////If we need to create d/t routes and d/t responses, we can use get request method
// app.get("/", (req, res) => {
//   res.end("This is the home page of the website in port: 1234");
// });
// app.get("/install/productsPage", (req, res) => {
//   res.end("This is the products Page. Shop here!!!");
// });
app.get("/install", (req, res) => {
  let message = "Tables Created";
  let createProducts = `CREATE TABLE if not exists Products(
      product_id int auto_increment,
      product_url varchar(255) not null,
      product_name varchar(255) not null,
      PRIMARY KEY (product_id)
  )`;

  let createProductDescription = `CREATE TABLE if not exists ProductDescription(
    description_id int auto_increment,
    product_id int not null,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)

  )`;

  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
    price_id int auto_increment,
    product_id int not null,
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;

  let createUser = `CREATE TABLE if not exists User(
    user_id int auto_increment,
    user_name varchar(255) not null,    
    user_password varchar(255) not null,
    PRIMARY KEY (user_id)
      )`;

  let createOrders = `CREATE TABLE if not exists Orders(
    order_id int auto_increment,
    product_id int not null,
    user_id int not null,
    PRIMARY KEY (order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
  )`;

  //     // show either an error message or a message showing creation of tables when the "/install" URL is   // visited.

  mysqlConnection.query(createProducts, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createUser, (err, results, fields) => {
    if (err) console.log(err);
  });

  mysqlConnection.query(createProductDescription, (err, results, fields) => {
    if (err) console.log(err);
  });

  mysqlConnection.query(createProductPrice, (err, results, fields) => {
    if (err) console.log(err);
  });

  mysqlConnection.query(createOrders, (err, results, fields) => {
    if (err) console.log(err);
  });
  res.end(message);
});

// Question 3:
//Create an HTML file called, “index.html” with a form to populate the
// "products" table you created above.
// ● The form on the HTML page should send a POST request to a URL named
// "/add-product"
// ● Use Express to receive the POST request
// ● Use the body-parser module to parse the POST request sent to your Express server
// ● Write an SQL query to insert the data received from the HTML form into the
// "products" table
// Please find further instructions under the “Instructions for question 3” below.
//////////////////////////////
/////////////////////////////
// Middle ware to extract info from the html
app.use(
  express.urlencoded({
    extended: true,
  })
);
////an end point that when the html form is submitted, the inserted data will be posted into.
app.post("/add-product", (req, res) => {
  console.table(req.body);

  //// deconstruction from the html form/from the fronend/. It means extracting data directly from html form specififically from "name" attribute of <input> tag
  const {
    iphoneName,
    product_img,
    product_url,
    product_link,
    StartPrice,
    priceRange,
    briefDescription,
    fullDescription,
    userName,
    userPassword,
  } = req.body;
  console.log(req.body, "Req Body object");

  ///////////insert statement into Products table and assign it to a variable

  const insertProduct = `INSERT INTO Products (product_name, product_url) VALUES ('${iphoneName}', '${product_url}')`;

  //////////Insert/execute insertion statement/ values to Products table

  mysqlConnection.query(insertProduct, (err, results, fields) => {
    if (err) console.log(`error Found: ${err}`);
  });

  ///////////insert statement into User table and assign it to a variable

  const insertUser = `INSERT INTO User (user_name, user_password) VALUES ('${userName}', '${userPassword}')`;

  //////////Insert/execute insertion statement/ values to User table

  mysqlConnection.query(insertUser, (err, results, fields) => {
    if (err) console.log(`error Found: ${err}`);
  });

  ///////////////
  mysqlConnection.query(
    /////////////selecting product id from product table so that we can insert it later into other tables where product id is a foreign key
    `SELECT * FROM Products WHERE product_url = "${product_url}"`,
    (err, result, fields) => {
      if (err) console.log(`error Found: ${err}`);

      const getProductId = result[0].product_id;

      ///////////insert statement into productdescription table and assign it to a variable

      const descreptionInserted = `INSERT INTO productdescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ("${getProductId}", "${briefDescription}", "${fullDescription}", "${product_img}", "${product_link}")`;

      //////////Insert/execute insertion/ values to productdescription table

      mysqlConnection.query(descreptionInserted, (err, result, fields) => {
        if (err) console.log(`error Found: ${err}`);
      });

      ///////////insert statement into productprice table and assign it to a variable

      const productpriceInserted = `INSERT INTO productprice (product_id, starting_price, price_range) VALUES ("${getProductId}", "${StartPrice}", "${priceRange}")`;

      //////////Insert/execute insertion/ values to productprice table

      mysqlConnection.query(productpriceInserted, (err, result, fields) => {
        if (err) console.log(`error Found: ${err}`);
      });

      mysqlConnection.query(
        /////////////selecting user id from User table so that we can insert it later into orders table where user id is a foreign key
        `SELECT * FROM user WHERE user_name = "${userName}"`,

        (err, result, fields) => {
          if (err) console.log(`error Found: ${err}`);

          const getUserID = result[0].user_id;

          /////Insert statements of both product id and user id into orders table and assign a variable
          const ordersProductIDUserIDInserted = `INSERT INTO orders (product_id, user_id) VALUES ("${getProductId}", "${getUserID}")`;

          ////// insert user ID and product ID which are foreign key to orders at the same time

          mysqlConnection.query(
            ordersProductIDUserIDInserted,
            (err, result, fields) => {
              if (err) console.log(`error Found: ${err}`);
            }
          );
        }
      );
    }
    // );
  );
  res.end("Records inserted into a database");
});

//Get all iphones
app.get("/iphones", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      let iphones = { products: [] };
      iphones.products = rows;
      var stringIphones = JSON.stringify(iphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});
