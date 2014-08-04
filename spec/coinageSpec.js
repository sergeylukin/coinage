var CoinAge = require('../');

describe('message', function(){
  it('should pass', function(){
    var game = new CoinAge('Welcome to CoinAge!');
    expect(game.log()).toEqual('Welcome to CoinAge!');
  });
});
