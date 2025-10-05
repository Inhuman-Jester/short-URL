# URL Shortener

The aim is to create a URL shorteners similar to the very popular BITly.\
 It is a service that takes in valid URLs and returns a shortened URL which redirects the User to the previously entered URL.\
 \
It also keeps a check on how many times and at what time stamps a link was accessed!

### Routes

1. **POST/url** : Generates new shortened URL and returns the shortened-id, which can be used in the form abc.com/shortened-id.

2. **GET/:id** : Redirect from an id to the original URL.

3. **GET/url/analytic/:id** : Returns the analytics, the timestamps and no. of times clicked.
