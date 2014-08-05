import * as Backbone from 'backbone'

var Coin = Backbone.Model.extend({

  defaults: {
    value: 1,
    player: null
  },

  validate: function(attrs) {

    if (attrs.value < 1 || attrs.value > 4) {
      return 'Coin value must be in range of 1-4';
    }

  }

});

export default Coin
