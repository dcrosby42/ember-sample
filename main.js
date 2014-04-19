App = Ember.Application.create();

App.Router.map(function() {
  this.resource('dash', {path: '/'});
});

App.DashRoute = Ember.Route.extend({
  model: function() {
    return App.Subject.create({

      debugs: [
        {name: "x", value: 5},
        {name: "y", value: 7},
      ]
    });
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
  }.property("points"),

  debugs: null
});


App.Button = Ember.View.extend({
  tagName: 'button',
  classNames: ['btn'],

  click: function() {
    this.get('controller').send(this.get('action'), this.get('model'))
  }
});

Ember.Handlebars.helper('button', App.Button);
