import * as Backbone from 'backbone'

var Player = Backbone.Model.extend({

  defaults: {
    id: 'No id',
    name: 'No name',
    score: 0,
    color: 'Gold'
  },

  initialize: function() {
    this.set('name', this.get('id'));
  },

  validate: function(attrs) {
    if (!attrs.name) {
      return 'Every player must have a name';
    }

    if (attrs.score < 0) {
      return 'Score may not be negative';
    }
  },

  roll: function() {
    return this.get('name') + ' is rolling';
  }

});

export default Player
