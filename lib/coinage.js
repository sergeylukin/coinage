var CoinAge = function(message)
{
  var message = message || 'welcome!';
  this.message = message;
}

CoinAge.prototype.log = function()
{
  return this.message;
}

module.exports = CoinAge;
