Router = function(app, Article){
	app.get('/', (req, res)=>{
		res.sendFile('../public/index.html');
	});

	app.post('/api', (req, res)=>{
		Article.save(req.body)
	});

	app.get('/api', (req, res)=>{
		Article.find({}).then((err, articles)=>{
			if(err){
				console.error(err);
			}else{
				res.json(doc);
			}
		});
	});

	app.get('/api/:id', (req, res)=>{
		Article.findById(req.params.id).then((err, article)=>{
			if(err){
				console.error(err);
			}else{
				res.json(doc);
			}
		});
	});

	app.delete('/api/:id', (req, res)=>{
		Article.findByIdAndRemove(req.params.id).then((err, article)=>{
			if(err){
				console.error(err);
			}else{
				res.json(article[_id]);
			}
		})
	})
}