import * as Backbone from 'backbone'
import Coin from '../models/coin'

var Coins = Backbone.Collection.extend({

  model: Coin

});

export default Coins
