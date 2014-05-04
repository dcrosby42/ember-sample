(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var App;

App = Ember.Application.create();

Ember.Application.initializer({
  name: 'game-setup',
  initialize: function(container, application) {
    return window.subject = App.Subject.create({
      debugs: [
        {
          name: "x",
          value: 5
        }, {
          name: "y",
          value: 7
        }
      ]
    });
  }
});

App.Router.map(function() {
  return this.resource('dash', {
    path: '/'
  });
});

App.DashRoute = Ember.Route.extend({
  model: function() {
    return window.subject;
  }
});

App.DashController = Ember.ObjectController.extend({
  actions: {
    addPoint: function() {
      return this.set("points", this.get("points") + 1);
    },
    reset: function() {
      return this.set("points", 0);
    }
  }
});

App.Subject = Ember.Object.extend({
  points: 0,
  pointsString: (function() {
    var p;
    p = this.get('points');
    if (p === 0) {
      return 'no';
    } else if (p > 5) {
      return 'many';
    } else {
      return "" + p;
    }
  }).property("points"),
  debugs: null
});

App.GameState = Ember.Object.extend({
  entities: []
});

App.Button = Ember.View.extend({
  tagName: 'button',
  classNames: ['btn'],
  click: function() {
    return this.get('controller').send(this.get('action'), this.get('model'));
  }
});

Ember.Handlebars.helper('button', App.Button);


},{}]},{},[1])