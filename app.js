const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize= require('./util/database');

const errorController = require('./controllers/error');

const Product = require('./models/product');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => console.log(err));
})

Product.belongsTo(User, {constraints:true, onDelete: 'CASCADE'});
User.hasMany(Product);


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize
.sync({force:true})
//.sync()
.then(result => {

    return User.findByPk(1);
    
})
.then(user => {
    if(!user){
        return User.create({name: 'ruchi', email: 'r123@gmail.com'});
    }
    return user;
})
.then(user => {
    //console.log(user);
    app.listen(3006);
})
.catch(err => {
    console.log(err);
})