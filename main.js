App = Ember.Application.create();

App.Router.map(function() {
  this.resource('dash', {path: '/'});
});

App.DashRoute = Ember.Route.extend({
  model: function() {
    return App.Subject.create()
  }
});

App.DashController = Ember.ObjectController.extend({
  actions: {
    addPoint: function() {
      this.set("points", this.get("points")+1);
    },
    reset: function() {
      this.set("points",0);
    }
  }
});

App.Subject = Ember.Object.extend({
  points: 0,
  pointsString: function() {
    var p = this.get('points');
    if (p == 0) {
      return 'no';
    } else if (p > 5) {
      return 'many';
    } else {
      return ""+p;
    }
  }.property("points")
});

// App.MyView = Ember.View.extend({
//   tagName: 'em'
// });
