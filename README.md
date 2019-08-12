# soccer_nodejs_mysql
//Query for Database and Table creation 
CREATE DATABASE soccer;
CREATE TABLE IF NOT EXISTS `players` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  `MATCHES_WON` int NOT NULL,
  `total_matches` int NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;


//Query for Data Insertion(samples)
insert into players value(1,"Hugo","Lloris","GK",5,"1.jpeg","hugo",7,15);
insert into players value(2,"Alphonse","Areola","RFB",15,"2.jpeg","alp",2,10);
insert into players value(3,"Lee","Grant","LFB",100,"3.jpeg","lee",18,54);
insert into players value(4,"Mike","Maignan","CB",42,"4.jpeg","mike",20,27);
insert into players value(5,"Benjamin","Pavard","CBS",42,"5.jpeg","benj",20,27);
insert into players value(6,"Ferland","Mendy","DMF",42,"6.jpeg","ferl",20,27);
insert into players value(7,"Paul","Pogba","RMF",42,"7.jpeg","paul",20,27);
insert into players value(8,"Antoine","Griezmann","BBMF",43,"8.jpeg","ant",20,27);
insert into players value(9,"Thomas","Lemar","STR",42,"9.jpeg","thom",20,27);
insert into players value(10,"Olivier","Giroud","AMF",45,"10.jpeg","oliv",20,27);
insert into players value(11,"Kylian","Mbappé","LMF",1,"11.jpeg","kyl",20,27);
insert into players value(12,"Raphaël","Varane","GK",5,"12.jpeg","rap",9,20);
insert into players value(13,"Samuel","Umtiti","RFB",15,"13.jpeg","sam",5,40);
insert into players value(14,"Lucas","Digne","LFB",10,"14.jpeg","luc",5,9);
insert into players value(15,"Kurt","Zouma","CB",12,"15.jpeg","kurt",34,50);
insert into players value(16,"Léo","Dubois","CBS",42,"16.jpeg","leo",5,15);
insert into players value(17,"Clément","Lenglet","DMF",4,"17.jpeg","clem",25,57);
insert into players value(18,"Blaise","Matuidi","RMF",6,"18.jpeg","bla",34,44);
insert into players value(19,"Moussa","Sissoko","BBMF",5,"19.jpeg","mou",30,70);
insert into players value(20,"Tanguy","Ndombele","STR",2,"20.jpeg","tang",30,56);
insert into players value(21,"Kingsley","Coman","AMF",3,"21.jpeg","king",5,14);
insert into players value(22,"Florian","Thauvin","LMF",7,"22.jpeg","flor",45,87);
