// Based on GraphAPI Explorer, Make a call to get a user's friends

FB.api(
  '/me',
  'GET',
  {"fields":"friends{name,birthday,posts.limit(1){message,type}}"},
  function(response) {
      // Insert your code here
  }
);

// Grab last status update with terms "feeling" or with an indicated feeling associated
