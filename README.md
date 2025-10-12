# URL Shortener

The aim is to create a URL shorteners similar to the very popular BITly.\
 It is a service that takes in valid URLs and returns a shortened URL which redirects the User to the previously entered URL.\
 \
It also keeps a check on how many times and at what time stamps a link was accessed!

### Routes

1. **GET/** : Home page.

2. **POST/url** : Generates new shortened URL and returns the shortened-id, which can be used in the form abc.com/shortened-id.

3. **GET/url/:id** : Redirect from an id to the original URL.

4. **GET/url/analytics** : Displays the original link and the number of times it is clicked.

5. **GET/url/analytic/:id** : Returns the analytics, the timestamps and no. of times clicked.
