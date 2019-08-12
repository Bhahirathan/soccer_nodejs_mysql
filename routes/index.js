module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `players` ORDER BY id ASC"; // query database to get all the players
		
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to Socka | View Players"
                ,players: result
            });
        });
    },
	 searchPage: (req, res) => {
				let query = "SELECT * FROM `players` ORDER BY id ASC",key;
				let position_s = req.body.position;
				let best="off";
				best=req.body.on;
				key=req.body.search;
				console.log(best);
				if(best=="on"){
					query='SELECT DISTINCT(position),id,first_name,last_name,user_name,number,image FROM players t1 where EXISTS(SELECT 1 FROM players t2 WHERE t1.position=t2.position AND t1.MATCHES_WON> t2.MATCHES_WON)';
					console.log(best);
				}
				else if(key==""){
					let query = "SELECT * FROM `players` ORDER BY id ASC"
				}
				else if(position_s=="By Number"){
				query = "SELECT * FROM `players` WHERE number = '" + key + "'";        
				}else if(position_s=="By Position"){
						query = "SELECT * FROM `players` WHERE position = '" + key + "'";        
				}else if(position_s=="By Username"){
						query = "SELECT * FROM `players` WHERE user_name = '" + key + "'";        
				}

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('search-player.ejs', {
				title: "Welcome to Socka | View Players"
                ,players: result
            });
        });
    },
};