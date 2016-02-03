var express = require('express')
var app = express()
var config = require('./config')
var DB = config.DB
var PORT = config.PORT
var models = require('./models')

app.get('/articles', function(req,res){
	models.Article.findAll().then(function(articles){
		res.json(articles)
	})
})

models.sequelize.sync({force:true}).then(function(x) {
  models.Article.create(
		{
    "title": "Cheese Impsum",
    "category": "food",
    "author": "El Rey de Queso",
    "authorUrl": "https:\/\/www.youtube.com\/watch?v=oHg5SJYRHA0",
    "publishedOn": "2015-11-02",
    "body": "<p>I love cheese, especially edam squirty cheese. Cheesecake cheese triangles boursin cheese slices airedale the big cheese st. agur blue cheese st. agur blue cheese. Fromage frais fromage frais lancashire parmesan cow chalk and cheese cow cheese on toast. Cow cheesy grin.<\/p><p>Melted cheese bavarian bergkase fromage frais. Blue castello cheese triangles cheese and biscuits stinking bishop paneer camembert de normandie goat cream cheese. <img src=\"http:\/\/lorempixel.com\/400\/200\/\" class=\"pull-left\">Smelly cheese cheese slices stinking bishop pecorino taleggio red leicester hard cheese queso. Cow fromage chalk and cheese.<\/p><p>Gouda goat mozzarella. Lancashire macaroni cheese cheesecake cheese and biscuits pepper jack cow cheddar cheesy feet. Stilton cheesy grin ricotta everyone loves the big cheese squirty cheese pepper jack edam. Cheese on toast cheese and wine.<\/p><p>Queso camembert de normandie paneer. Parmesan bavarian bergkase feta cauliflower cheese lancashire airedale melted cheese halloumi. Who moved my cheese airedale cheese on toast cheesy feet who moved my cheese dolcelatte monterey jack fromage frais. Emmental cow.<\/p><p>Blue castello roquefort swiss. Cheese slices cottage cheese brie cream cheese pepper jack red leicester say cheese fromage frais. Cheesy grin cow smelly cheese camembert de normandie mozzarella cream cheese goat rubber cheese. Emmental port-salut croque monsieur boursin gouda.<\/p>"
  },
  {
    "title": "Batman Ipsum",
    "category": "lifestyle",
    "author": "Batman -duh",
    "authorUrl": "http:\/\/www.dccomics.com\/characters\/batman",
    "publishedOn": "2015-10-23",
    "body": "<p>My anger outweights my guilt.<\/p><p>You care about justice? Look beyond your own pain, Bruce.<img src=\"http:\/\/lorempixel.com\/300\/350\/people\/\" class=\"pull-left\"> This city is rotting.<\/p><p>I've sewn you up, I've set your bones, but I won't bury you. I've buried enough members in the Wayne family.<\/p><p>But it's not who you are underneath... it's what you do that defines you.<\/p><p>Didn't you get the memo?<\/p><p>There is a prison in a more ancient part of the world. A pit where men are thrown to suffer and die. But sometimes a man rises from the darkness. Sometimes, the pit sends something back.<\/p>"
  },
  {
    "title": "Hipsters Ipsum",
    "category": "lifestyle",
    "author": "Macklemore",
    "authorUrl": "https:\/\/www.youtube.com\/watch?v=QK8mJJJvaes",
    "publishedOn": "2015-10-28",
    "body": "<p>Freegan put a bird on it narwhal, umami marfa viral you probably haven't heard of them four loko kinfolk YOLO celiac echo park. <img src=\"http:\/\/lorempixel.com\/400\/300\/nightlife\/\" class=\"pull-left\">Viral synth fanny pack taxidermy, portland crucifix pug intelligentsia helvetica slow-carb. Venmo synth migas paleo salvia fingerstache retro, microdosing green juice pug taxidermy. Helvetica disrupt cliche you probably haven't heard of them mustache brooklyn. Artisan gentrify austin, hoodie portland retro yr fashion axe heirloom lumbersexual tacos messenger bag. Austin hella four loko everyday carry portland synth. Flexitarian schlitz migas yr pitchfork iPhone.<\/p><p>Deep v mlkshk helvetica austin PBR&B lomo raw denim blue bottle VHS cliche street art. Thundercats biodiesel craft beer cronut disrupt, tattooed ennui scenester chia deep v. Tofu +1 roof party, craft beer chicharrones ramps ugh iPhone mixtape. Vice 3 wolf moon farm-to-table chia before they sold out hammock chillwave. Deep v stumptown actually helvetica normcore chambray. Banjo scenester mumblecore gastropub church-key. Austin craft beer beard locavore wolf.<\/p><p>Hashtag try-hard chartreuse selvage, readymade mustache tote bag stumptown. Letterpress 3 wolf moon waistcoat small batch. Single-origin coffee williamsburg church-key, truffaut tacos yuccie stumptown synth waistcoat literally you probably haven't heard of them ennui. Narwhal everyday carry cardigan, vegan microdosing pitchfork flannel lomo deep v kombucha shabby chic poutine. Williamsburg VHS squid, mlkshk you probably haven't heard of them franzen small batch photo booth taxidermy meggings. Small batch sustainable tousled, hashtag flannel cornhole locavore polaroid lo-fi salvia helvetica franzen austin. Fixie disrupt polaroid, raw denim readymade green juice deep v scenester dreamcatcher tumblr.<\/p><p>Intelligentsia cray blue bottle, cardigan pinterest biodiesel ethical polaroid 8-bit master cleanse. Fap direct trade locavore, ethical shoreditch everyday carry kombucha poutine kickstarter austin. Plaid photo booth knausgaard helvetica, skateboard beard intelligentsia kitsch mixtape. Next level kinfolk farm-to-table semiotics, umami meh quinoa. Listicle viral selfies, street art kombucha squid fanny pack. Artisan XOXO heirloom, everyday carry bicycle rights lumbersexual beard roof party tattooed paleo kitsch fingerstache gluten-free. Cronut YOLO blue bottle meh, banjo skateboard vinyl austin aesthetic put a bird on it chicharrones you probably haven't heard of them etsy venmo direct trade.<\/p>"
  })

  app.listen(PORT, function() {
  console.log('server started')
  console.log('listening on PORT: ' + PORT)
  console.log('DB URI STRING: ' + DB)
  })
})

//in Node functions and files have scope
//in JS only functions have scope
//modules.exports is what allows you to grab stuff out of the IIFE
