import Coin from './models/coin'
import Player from './models/player'
import Players from './collections/players'
import Coin from './models/coin'
import Coins from './collections/coins'

export default class Coinage
{
  constructor()
  {
    // Set players
    this.players = new Players([
      new Player({ id: 'Player 1', color: 'Gold' }),
      new Player({ id: 'Player 2', color: 'Silver' })
    ]);

    // Set Coins
    var coins = new Coins;
    this.players.each(function(player) {
      coins.add( new Coin({ player: player, value: 1 }) );
      coins.add( new Coin({ player: player, value: 1 }) );
      coins.add( new Coin({ player: player, value: 1 }) );
      coins.add( new Coin({ player: player, value: 1 }) );

      coins.add( new Coin({ player: player, value: 2 }) );
      coins.add( new Coin({ player: player, value: 2 }) );
      coins.add( new Coin({ player: player, value: 2 }) );

      coins.add( new Coin({ player: player, value: 3 }) );
      coins.add( new Coin({ player: player, value: 3 }) );

      coins.add( new Coin({ player: player, value: 4 }) );
    });
    this.coins = coins;
  }

}
