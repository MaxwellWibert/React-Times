var Article = function(mongoose){
	var Schema = mongoose.Schema;

	var PageSchema = new Schema({
		title:{
			type: String
			required: true
		},
		date: {
			type: Date
		},
		url: {
			type: String,
			required: true
		}
	});

	return mongoose.model('Article', ArticleSchema);
}

export default Article;