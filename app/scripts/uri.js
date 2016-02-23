var uri = function(uri){
  switch(true){
    case /\/api/.test(uri): return api;
    case /\/authors.*2/.test(uri): return authors2;
    case '/authors' === uri: return authors;
    case /\/author\/\d+/.test(uri): return getauthors(uri);
    case '/articles' === uri: return articles;
    case /\/articles.*2/.test(uri): return articles2;
  }
};

var api = {
  "_links": {
    "self": { "href": "/api"},
    "authors": {"href": "/authors"},
    "articles": {"href": "/articles"}
  },
  "description": "This is a api entry-point. It documents the resources that we can call."
};

var authors = {
  "_links": {
    "self": {"href": "/authors"},
    "next": {"href": "/authors?page=2"}
  },
  "authors": [
    {
      "name": "Foo Lim",
      "occupation": "student",
      "href": "/author/1"
    },
    {
      "name": "Baz Chua",
      "occupation": "driver",
      "href": "/author/2"
    },
    {
      "name": "Quz Ali",
      "occupation": "clerk",
      "href": "/author/3"

    },
    {
      "name": "Muhd. Norf",
      "occupation": "soldier",
      "href": "/author/4"
    }
  ]
};
var authors2 = {
  "_links": {
    "self": {"href": "/authors?page2"},
    "prev": {"href": "/authors"}
  },
  "authors": [
    {
      "name": "Fizz Smith",
      "occupation": "Opera Singer",
      "href": "/author/5"
    },
    {
      "name": "Buzz Kumar",
      "occupation": "Electrician",
      "href": "/author/6"
    },
    {
      "name": "Klux Mah",
      "occupation": "Teacher",
      "href": "/author/7"

    },
    {
      "name": "Sizzlex",
      "occupation": "Rapper",
      "href": "/author/8"
    }
  ]
};

var getauthors = function(uri) {
  console.log('getauthors');
  var authorNum = uri.split('/')[2];
  console.log(authorNum);
  switch(parseInt(authorNum)){
    case 1: return ({
      "_links": {"self": {"href": "/author/1"}},
      "name": "Foo Lim",
      "occupation": "student",
      "href": "/author/1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "image": "http://lorempixel.com/200/300/animals"
    });

    case 2: return ({
      "_links": {"self": {"href": "/author/2"}},
      "name": "Baz Chua",
      "occupation": "driver",
      "href": "/author/2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "image": "http://lorempixel.com/200/300/animals"
    });

    case 3: return ({
      "_links": {"self": {"href": "/author/3"}},
      "name": "Quz Ali",
      "occupation": "clerk",
      "href": "/author/3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "image": "http://lorempixel.com/200/300/animals"
    });

    case 4: return ({
      "_links": {"self": {"href": "/author/4"}},
      "name": "Muhd. Norf",
      "occupation": "soldier",
      "href": "/author/4",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "image": "http://lorempixel.com/200/300/animals"
    });

    case 5: return ({
      "_links": {"self": {"href": "/author/5"}},
      "name": "Fizz Smith",
      "occupation": "Opera Singer",
      "href": "/author/5",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "image": "http://lorempixel.com/200/300/animals"
    });

    case 6: return ({
      "_links": {"self": {"href": "/author/6"}},
      "name": "Buzz Kumar",
      "occupation": "Electrician",
      "href": "/author/6",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "image": "http://lorempixel.com/200/300/animals"
    });

    case 7: return ({
      "_links": {"self": {"href": "/author/7"}},
      "name": "Klux Mah",
      "occupation": "Teacher",
      "href": "/author/7",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "image": "http://lorempixel.com/200/300/animals"
    });

    case 8: return ({
      "_links": {"self": {"href": "/author/8"}},
      "name": "Sizzlex",
      "occupation": "Rapper",
      "href": "/author/8",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "image": "http://lorempixel.com/200/300/animals"
    });
    default: return({
      "error": "no such author."
    });
  }
};

var articles = {
  "_links": {
    "self": {"href": "/articles"},
    "next": {"href": "/articles?page=2"}
  },
  articles: [
    {
      "title": "A Methodology for the Typical Unification of Access Points and Redundancy",
      "date": "Wed Dec 23 2015",
      "author": {
        "name": "Baz Chua",
        "href": "/author/2",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "driver"
      },
      "href": "/article/0"
    },
    {
      "title": "Formulating\tInconsistent\tLabor\t: Foobar and/in\tthe Primitive",
      "date": "Sun Jan 17 2016",
      "author": {
        "name": "Klux Mah",
        "href": "/author/7",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Teacher"
      },
      "href": "/article/1"
    },
    {
      "title": "Set Upping\tGreedy\tQuill\t: Graphics and/in\tthe Proletariat",
      "date": "Sat Oct 17 2015",
      "author": {
        "name": "Muhd. Norf",
        "href": "/author/4",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "soldier"
      },
      "href": "/article/2"
    },
    {
      "title": "12 Cheeses That Will Make Your Skin Crawl",
      "date": "Sun Jul 19 2015",
      "author": {
        "name": "Klux Mah",
        "href": "/author/7",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Teacher"
      },
      "href": "/article/3"
    },
    {
      "title": "34 Punctuation Marks That Should Be Illegal",
      "date": "Sun Mar 08 2015",
      "author": {
        "name": "Muhd. Norf",
        "href": "/author/4",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "soldier"
      },
      "href": "/article/4"
    },
    {
      "title": "The 19 Most Successful Pack Animals From The Twelve Tables",
      "date": "Wed Feb 18 2015",
      "author": {
        "name": "Foo Lim",
        "href": "/author/1",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "student"
      },
      "href": "/article/5"
    },
    {
      "title": "26 Painful Truths Only Carthaginians Will Understand",
      "date": "Tue Mar 10 2015",
      "author": {
        "name": "Quz Ali",
        "href": "/author/3",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "clerk"
      },
      "href": "/article/6"
    },
    {
      "title": "30 Etruscan Miners Who Have No Idea What They Are Doing",
      "date": "Tue Aug 25 2015",
      "author": {
        "name": "Buzz Kumar",
        "href": "/author/6",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Electrician"
      },
      "href": "/article/7"
    },
    {
      "title": "The 38 Most Arrogant Satires Of The Punic Wars",
      "date": "Mon Apr 06 2015",
      "author": {
        "name": "Foo Lim",
        "href": "/author/1",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "student"
      },
      "href": "/article/8"
    },
    {
      "title": "The 20 Most Inspirational Proscriptions Of The Early Republic",
      "date": "Thu Jun 25 2015",
      "author": {
        "name": "Fizz Smith",
        "href": "/author/5",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Opera Singer"
      },
      "href": "/article/9"
    },
    {
      "title": "25 Praetorian Guards Who Are Too Clever For Their Own Good",
      "date": "Fri Feb 20 2015",
      "author": {
        "name": "Buzz Kumar",
        "href": "/author/6",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Electrician"
      },
      "href": "/article/10"
    },
    {
      "title": "The 19 Most Delicate VH1 Specials From Breaking Bad",
      "date": "Tue May 05 2015",
      "author": {
        "name": "Foo Lim",
        "href": "/author/1",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "student"
      },
      "href": "/article/11"
    },
    {
      "title": "A Camouflaged Swedish Navy Ship At Risk",
      "date": "Mon Mar 16 2015",
      "author": {
        "name": "Muhd. Norf",
        "href": "/author/4",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "soldier"
      },
      "href": "/article/12"
    },
    {
      "title": "So That's Why It's Really Cool, May Work or Not To Wear",
      "date": "Fri Feb 27 2015",
      "author": {
        "name": "Buzz Kumar",
        "href": "/author/6",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Electrician"
      },
      "href": "/article/13"
    },
    {
      "title": "13 Ways You Can Now Live in Tents",
      "date": "Thu Jan 22 2015",
      "author": {
        "name": "Quz Ali",
        "href": "/author/3",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "clerk"
      },
      "href": "/article/14"
    },
    {
      "title": "Iran Transport Minister: Agreement to Buy ADT for $6.9 Billion",
      "date": "Wed Oct 14 2015",
      "author": {
        "name": "Buzz Kumar",
        "href": "/author/6",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Electrician"
      },
      "href": "/article/15"
    }
  ]
};

var articles2 = {
  "_links": {
    "self": {"href": "/articles?page=2"},
    "prev": {"href": "/articles"}
  },
  "articles": [
    {
      "title": "23 People Who Have No Idea What They Are Doing",
      "date": "Sat Apr 25 2015",
      "author": {
        "name": "Muhd. Norf",
        "href": "/author/4",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "soldier"
      },
      "href": "/article/0"
    },
    {
      "title": "36 Atlanta Falcons Who Completely Screwed Up Their One Job",
      "date": "Wed Nov 25 2015",
      "author": {
        "name": "Baz Chua",
        "href": "/author/2",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "driver"
      },
      "href": "/article/1"
    },
    {
      "title": "47 Horses That Are Way More Important Than Work Right Now",
      "date": "Sat Jan 30 2016",
      "author": {
        "name": "Quz Ali",
        "href": "/author/3",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "clerk"
      },
      "href": "/article/2"
    },
    {
      "title": "The 40 Most Wanted Investment Bankers From Christmas Songs",
      "date": "Sat Jan 31 2015",
      "author": {
        "name": "Fizz Smith",
        "href": "/author/5",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Opera Singer"
      },
      "href": "/article/3"
    },
    {
      "title": "25 Movie Scenes That Prove Cats Have Hearts Of Gold",
      "date": "Tue Oct 27 2015",
      "author": {
        "name": "Klux Mah",
        "href": "/author/7",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Teacher"
      },
      "href": "/article/4"
    },
    {
      "title": "The 48 Biggest SAT Words Of All Time",
      "date": "Wed Jan 20 2016",
      "author": {
        "name": "Buzz Kumar",
        "href": "/author/6",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Electrician"
      },
      "href": "/article/5"
    },
    {
      "title": "The 26 Slowest Computer Mouses Of 2013",
      "date": "Mon Jun 29 2015",
      "author": {
        "name": "Buzz Kumar",
        "href": "/author/6",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Electrician"
      },
      "href": "/article/6"
    },
    {
      "title": "The 14 Illest Snapchat Filters From Britney Spears' Upcoming Documentary",
      "date": "Tue Jun 16 2015",
      "author": {
        "name": "Quz Ali",
        "href": "/author/3",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "clerk"
      },
      "href": "/article/7"
    },
    {
      "title": "The 35 Most Beloved Potatoes From \"Home Alone\"",
      "date": "Sun May 31 2015",
      "author": {
        "name": "Fizz Smith",
        "href": "/author/5",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Opera Singer"
      },
      "href": "/article/8"
    },
    {
      "title": "The 10 Gowns That 2000s Teens Loved",
      "date": "Sat May 09 2015",
      "author": {
        "name": "Fizz Smith",
        "href": "/author/5",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Opera Singer"
      },
      "href": "/article/9"
    },
    {
      "title": "The 31 Cheesiest Corporations From \"Forrest Gump\"",
      "date": "Sun Oct 18 2015",
      "author": {
        "name": "Fizz Smith",
        "href": "/author/5",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "Opera Singer"
      },
      "href": "/article/10"
    },
    {
      "title": "33 Celebrities Who Are Too Clever For Their Own Good",
      "date": "Fri Mar 06 2015",
      "author": {
        "name": "Quz Ali",
        "href": "/author/3",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "clerk"
      },
      "href": "/article/11"
    },
    {
      "title": "The 37 Most Beautiful iPhone Apps Of This Century",
      "date": "Sat Dec 05 2015",
      "author": {
        "name": "Muhd. Norf",
        "href": "/author/4",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "soldier"
      },
      "href": "/article/12"
    },
    {
      "title": "The 46 Halloween Costumes That You Will Want To Keep For Yourself",
      "date": "Mon Jun 15 2015",
      "author": {
        "name": "Quz Ali",
        "href": "/author/3",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "clerk"
      },
      "href": "/article/13"
    },
    {
      "title": "41 Miners Who Have Performed For Dictators",
      "date": "Mon Dec 21 2015",
      "author": {
        "name": "Baz Chua",
        "href": "/author/2",
        "image": "http://lorempixel.com/200/300/animals",
        "occupation": "driver"
      },
      "href": "/article/14"
    }
  ]
}


module.exports = uri;