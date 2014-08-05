var Coin = require('../../lib-cjs/models/coin').default;

describe('Constructor', function(){
  it('should instantiate default values', function(){
    var coin = new Coin();
    expect(coin.get('value')).toEqual(1);
  });
});
