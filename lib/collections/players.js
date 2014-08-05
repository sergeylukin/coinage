import * as Backbone from 'backbone'
import Player from '../models/player'

var Players = Backbone.Collection.extend({

  model: Player

});

export default Players
