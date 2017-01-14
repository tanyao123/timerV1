module.exports = {  

	
	index: function(req, res) { 
		//res.send("sssss");
		res.render('main');
	},    
	about: function(req, res) {      
		res.render('about');
   },
   loginForm: function(req, res) {      
		res.render('loginform');
   },
    logout: function(req, res) {      
		res.render('main');
   },
    loginFormSubmit: function(req, res) {
		var body=req.body;
		if(body.password=='test'){
			var loginid={loginid:body.username};
			res.render('timer',loginid);
		}      
		console.log(body);
   }
   
}; 
 console.log("sssshome");

