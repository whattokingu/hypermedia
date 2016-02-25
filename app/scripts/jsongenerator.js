var articleTitle=[
  '23 People Who Have No Idea What They Are Doing',
  '36 Atlanta Falcons Who Completely Screwed Up Their One Job',
  '47 Horses That Are Way More Important Than Work Right Now',
  'The 40 Most Wanted Investment Bankers From Christmas Songs',
  '25 Movie Scenes That Prove Cats Have Hearts Of Gold',
  'The 48 Biggest SAT Words Of All Time',
  'The 26 Slowest Computer Mouses Of 2013',
  "The 14 Illest Snapchat Filters From Britney Spears' Upcoming Documentary",
  'The 35 Most Beloved Potatoes From "Home Alone"',
  'The 10 Gowns That 2000s Teens Loved',
  'The 31 Cheesiest Corporations From "Forrest Gump"',
  '33 Celebrities Who Are Too Clever For Their Own Good',
  'The 37 Most Beautiful iPhone Apps Of This Century',
  'The 46 Halloween Costumes That You Will Want To Keep For Yourself',
  '41 Miners Who Have Performed For Dictators'
];

var authors=[
  {
    "_links": {"self": {"href": "/author/1"}},
    "name": "Foo Lim",
    "occupation": "student",
    "href": "/author/1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "http://lorempixel.com/200/300/animals"
  },
  {
    "_links": {"self": {"href": "/author/2"}},
    "name": "Baz Chua",
    "occupation": "driver",
    "href": "/author/2",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "http://lorempixel.com/200/300/animals"
  },
  {
    "_links": {"self": {"href": "/author/3"}},
    "name": "Quz Ali",
    "occupation": "clerk",
    "href": "/author/3",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "http://lorempixel.com/200/300/animals"
  },
  {
    "_links": {"self": {"href": "/author/4"}},
    "name": "Muhd. Norf",
    "occupation": "soldier",
    "href": "/author/4",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "http://lorempixel.com/200/300/animals"
  },
  {
    "_links": {"self": {"href": "/author/5"}},
    "name": "Fizz Smith",
    "occupation": "Opera Singer",
    "href": "/author/5",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "http://lorempixel.com/200/300/animals"
  },
  {
    "_links": {"self": {"href": "/author/6"}},
    "name": "Buzz Kumar",
    "occupation": "Electrician",
    "href": "/author/6",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "http://lorempixel.com/200/300/animals"
  },
  {
    "_links": {"self": {"href": "/author/7"}},
    "name": "Klux Mah",
    "occupation": "Teacher",
    "href": "/author/7",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "http://lorempixel.com/200/300/animals"
  },
  {
    "_links": {"self": {"href": "/author/8"}},
    "name": "Sizzlex",
    "occupation": "Rapper",
    "href": "/author/8",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "http://lorempixel.com/200/300/animals"
  }
];


var generateArticles = function(){
  articles = [];
  for(var i in articleTitle){
    var randomAuthor = authors[randInt(0, 7)];
    //console.log(randomAuthor);
    var article = {
      title: articleTitle[i],
      date: randomDate(new Date('2014-12-18'), new Date(), 10, 10).toDateString(),
      author: {
        name: randomAuthor.name,
        href: randomAuthor.href,
        image: randomAuthor.image,
        occupation: randomAuthor.occupation
      },
      href: '/article/' + i,
      text: 'Lorem ipsum dolor sit amet, vis in molestie appareat, et regione recusabo intellegam mea. Sed salutatus conceptam ne, essent corpora ne eum. Mei quas oporteat in, vero complectitur ex eam. Ius tollit decore aliquid ea. '+
      'Duo rebum delicata eu, an eos numquam pericula. Quo ea solet tempor, iudico scripserit ad per. Eam primis aliquando et, cu nec case mandamus iracundia, ne pro brute consul epicuri. Et his graece intellegat disputando. ' +
      'Eam ea summo vivendo petentium, mel omnis ignota at. Et vel quis nonumy dolores, pri minim insolens prodesset te, eu eos malis docendi. Ex vis elitr saepe mandamus, id sit enim summo. Vis ex minim mollis, eu wisi animal vix, eos tation melius eu. Eos dicam verterem adipiscing in, debet constituam nec ei, id elitr eloquentiam reprehendunt eam. ' +
      'Ea mea harum numquam consectetuer, tamquam placerat disputando in ius. Te clita facilisis vis, vim ad noster impetus rationibus. Nam et constituto contentiones consectetuer. Euismod detraxit petentium duo ei, at nam detracto laboramus disputationi. ' +
      'Aliquip platonem urbanitas et vim, ea aeque utinam doctus has. Mei ne euismod denique repudiandae, saperet labores ne quo, ius rebum debet reprimique te. An atqui elitr solet cum, mel id homero maiorum reprehendunt. Ut verterem voluptaria has. Esse everti neglegentur eam eu. ' +
      'Has fierent principes laboramus in, quot illud intellegam ei mea. In nam fastidii reprimique, et vim nihil forensibus eloquentiam. Te dicit verterem elaboraret sea. Cum delectus praesent cu, duo nostro consulatu ea. ' +
      'Assum urbanitas per an, et vel platonem repudiandae, meis assum ceteros at usu. Pro te rebum possim, eu eros everti mel. Novum dissentias an has, laoreet ocurreret has ne, ne natum autem euripidis usu. Nominavi instructior eam in, mea reque praesent an. Diam civibus sapientem id eum. ' +
      'Ut latine regione ullamcorper mea. Nam at nobis consul recusabo. Probo laudem mei ad, numquam minimum est no. Ex novum splendide dissentiet vel. ' +
      'Recusabo adolescens ea quo, sit eu graeco perfecto referrentur. No mel scaevola adversarium, option debitis veritus an his. In est fuisset alienum, et mei virtute posidonium eloquentiam. Graeci detraxit euripidis no quo. Sit altera cotidieque ut, his ne saperet pericula. '
    };
    articles.push(article);
  }
  console.log(JSON.stringify(articles, null, 4));
};


function randomDate(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

function randInt(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

generateArticles();