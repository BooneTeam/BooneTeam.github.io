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
	publishedAt: DS.attr('date')
});

App.Post.FIXTURES = [{
	id: 1,
	title: "My First Ember App",
  author: "Garrett Boone",
  intro: "I Really need a job",
  extended: "This is an attempt at learning more to get ajob",
  publishedAt: new Date('7-2-13')
}];

Ember.Handlebars.registerBoundHelper('date',function(date){
	return moment(date).fromNow();
});
// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return ['red', 'yellow', 'blue'];
//   }
// });
