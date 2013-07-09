App = Ember.Application.create();

App.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

//Main Resources

App.Router.map(function() {
	this.resource("projects", function(){
		this.resource("project", { path: ':post_id'});
	});
	this.resource("about");
	this.resource("rubyAnswers", function(){
		this.resource("rubyAnswer", { path: ':answer_id'});
	});
	this.resource("basics");
});

//Individual Routes

App.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo('projects');
	}
});

App.BasicsRoute = Ember.Route.extend({
	model: function(){
		return App.Basic.find();
	}
});

App.RubyAnswersRoute = Ember.Route.extend({
	model: function(){
		return App.Answer.find();
	}
});

App.ProjectsRoute = Ember.Route.extend({
	model: function(){
		return App.Post.find();
	}
});

// Models

App.Answer = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	gist: DS.attr('string')
});

App.Post = DS.Model.extend({
	title: DS.attr('string'),
	author: DS.attr('string'),
	intro: DS.attr('string'),
	extended: DS.attr('string'),
	image: DS.attr('string'),
	url: DS.attr('string'),
	publishedAt: DS.attr('date')
});

App.Basic = DS.Model.extend({
	title: DS.attr('string'),
	url:  DS.attr('string')
});

// FIXTURES

	//basics

App.Basic.FIXTURES = [{
		id:1,
		title:"Ruby Trivia",
		url:"https://github.com/gregstallings/ruby-trivia"
	},
	{
		id:2,
		title:"Always Be Coding",
		url:"https://medium.com/tech-talk/d5f8051afce2"
	},
	{
		id:3,
		title:"JS class",
		url:"http://www.phpied.com/3-ways-to-define-a-javascript-class/"
		},
	{
		id:4,
		title:"Big O",
		url:"http://bigocheatsheet.com/"
	},
	{
		id:5,
		title:"Gentle Intro to Algorithm Complexity Analysis",
		url: "http://discrete.gr/complexity/"
	}];

	//answers
App.Answer.FIXTURES = [{
	id: 1,
	title: "Factorials",
	description: "Recursive Factorials",
	gist: "https://gist.github.com/BooneTeam/5921637"
},
{
	id: 2,
	title: "Prime Factors",
	description: "Prime Factorization Recursively",
	gist: "https://gist.github.com/BooneTeam/5922180"
	},
{
	id: 3,
	title: "Largest Product In a Series",
	description: "Project Euler Problem 8",
	gist: "https://gist.github.com/BooneTeam/5953666"
	},
{
	id: 4,
	title: "Binary Search",
	description: "Binary Search",
	gist: "https://gist.github.com/BooneTeam/5953831"
		},
{
	id: 5,
	title: "Linear vs Binary Search",
	description: "Testing Linear Searc Vs. Binary with Fibonacci",
	gist: "https://gist.github.com/BooneTeam/5953870"
}];

	//posts - Need to Change to Projects
App.Post.FIXTURES = [{
	id: 1,
	title: "DBConnect",
  author: "Garrett Boone, Henry Wang, Earl Wagner",
  intro:  "DBConnect keeps alumni, students, staff, and employers within reach of each other as we grow. \
  				Whether you're looking for employment or to catch up with an old boot, DBConnect will help continue the collaboration.",
  extended: "This was a final project at DBC and will eventually be used as the new alumni and employer network \
  				This code needs to be refactored and most of the features are only accesible to approved accounts.",
  image: 'images/dbconnect.png',
  url: "http://dbconnect.herokuapp.com",
  publishedAt: new Date('6-21-13')
},
{
id: 2,
	title: "Capital Races",
  author: "Garrett Boone",
  intro:  "This is a work in progress and was started 4 weeks into Dev Bootcamp.",
  extended: " Similar to a mini kickstarter but where the funds for projects come from the people who participate in the scavenger hunt \
  						and the money raised would go to the idea or product with the most votes.",
  image: 'images/capraces.png',
  url: "http://scavengeforideas.herokuapp.com" ,
  publishedAt: new Date('6-15-13')
},
{
id: 3,
	title: "Web Dev Flash",
  author: "Garrett Boone",
  intro:  "A flashcard type application I made to study ruby prior to attending Dev Bootcamp.",
  extended: "This is unfinished. I would like to finish it at some point and most likely scrap this code \
  					 to make it much better from the start.",
  image: 'images/flash_cards.png',
  url: "http://flashcardstest.herokuapp.com" ,
  publishedAt: new Date('1-10-13')
}];

//Controllers

App.ProjectController = Ember.ObjectController.extend({
	isEditing: false,
	doneEditing: function(){
		this.set('isEditing', false);
	},
	edit: function(){
		this.set('isEditing', true);
	}
});

// Helpers

Ember.Handlebars.registerBoundHelper('date',function(date){
	return moment(date).fromNow();
});
