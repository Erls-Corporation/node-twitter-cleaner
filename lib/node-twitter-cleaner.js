
/*!
  Core Modules
 */

var twitterLib = require('twitter');

var twitter = new twitterLib({
  consumer_key        :'',
  consumer_secret     : '',
  access_token_key    : '',
  access_token_secret : ''
});

/*!
  Find 200 most recent tweets
 */

twitter.get('/statuses/user_timeline.json', { count : 200, include_rts : 1 }, function(data) {
  // go through 200, grab their ids, then destroy them
  for (item in data) {
    var tweet = data[item];
    var id = tweet.id_str;
    twitter.destroyStatus(id, function(data) {
      console.log('status:', data);
    });
  };
});

/* EOF */