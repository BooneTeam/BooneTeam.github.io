App = Ember.Application.create();

App.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

App.Router.map(function() {
	this.resource("projects", function(){
		this.resource("project", { path: ':post_id'});
	});
	this.resource("about");
});

App.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo('projects')
	}
})

App.ProjectsRoute = Ember.Route.extend({
	model: function(){
		return App.Post.find();
	}
});

App.ProjectController = Ember.ObjectController.extend({
	isEditing: false,
	doneEditing: function(){
		this.set('isEditing', false);
	},
	edit: function(){
		this.set('isEditing', true);
	}
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

App.Post.FIXTURES = [{
	id: 1,
	title: "DBConnect",
  author: "Garrett Boone, Henry Wang, Earl Wagner",
  intro:  "DBConnect keeps alumni, students, staff, and employers within reach of each other as we grow. \
  				Whether you're looking for employment or to catch up with an old boot, DBConnect will help continue the collaboration.",
  extended: "This was a final project at DBC and will eventually be used as the new alumni and employer network \
  				This code needs to be refactored and most of the features are only accesible to approved accounts. \
					Below are links to a quick walkthrough of the app.",
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

Ember.Handlebars.registerBoundHelper('date',function(date){
	return moment(date).fromNow();
});
// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return ['red', 'yellow', 'blue'];
//   }
// });
