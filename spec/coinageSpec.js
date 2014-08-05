var CoinAge = require('../');

beforeEach(function() {
  this.game = new CoinAge();
});

afterEach(function() {});

describe('Constructor', function(){

  it('should initialize players', function(){

    expect(this.game.players.length).toBe(2);

    var player1 = this.game.players.findWhere({id: 'Player 1'}),
        player2 = this.game.players.findWhere({id: 'Player 2'});

    expect( player1.roll() ).toBe( 'Player 1 is rolling' );

    expect( player1.toJSON() ).toEqual({
      id: 'Player 1',
      name: 'Player 1',
      score: 0,
      color: 'Gold'
    });

    player1.set('name', 'John Doe');
    expect( player1.get('name') ).toBe('John Doe');

    expect( player2.toJSON() ).toEqual({
      id: 'Player 2',
      name: 'Player 2',
      score: 0,
      color: 'Silver'
    });

    expect(this.game.players.findWhere({id: 'Player 3'})).toBeUndefined();

  });

  it('should initialize coins', function() {
    expect(this.game.coins.length).toBe(20);
  });

});
