App = Ember.Application.create()

Ember.Application.initializer
  name: 'game-setup'
  initialize: (container, application) ->
    window.subject = App.Subject.create
      debugs: [
        {name: "x", value: 5}
        {name: "y", value: 7}
      ]

App.Router.map ->
  @resource 'dash', path: '/'

App.DashRoute = Ember.Route.extend
  model: -> window.subject

App.DashController = Ember.ObjectController.extend
  actions:
    addPoint: ->
      @set("points", @get("points")+1)
    reset: ->
      @set("points",0)

App.Subject = Ember.Object.extend
  points: 0

  pointsString: (->
    p = @get('points')
    if p == 0
      return 'no'
    else if (p > 5)
      return 'many'
    else
      return ""+p
  ).property("points")

  debugs: null

App.GameState = Ember.Object.extend
  entities: []
  
App.Button = Ember.View.extend
  tagName: 'button',
  classNames: ['btn'],

  click: ->
    @get('controller').send(this.get('action'), @get('model'))

Ember.Handlebars.helper('button', App.Button)

