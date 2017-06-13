import 'express';
var bodyParser = require('body-parser');
var logger = require('morgan');
import 'mongoose';

var Article = require('./models/Article.js')(mongoose);

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static('public'));

var databaseUri = 'mongodb://localhost/reacttimes';

if(process.env.MONGODB_URI){
	mongoose.connect(process.env.MONGODB_URI);
}else{
	mongoose.connect(databaseUri);
}
var port = process.env.PORT || 3000;

var db = mongoose.connection;

db.on('error', err=>{
	console.error("Mongoose connection error: " + err);
});

db.on('open', ()=>{
	console.log('Mongoose successfully connected');
});

require('./controllers/router.js')(app, Article);

app.listen(port , function(){
	console.log('Server listening on port ' + port);
});