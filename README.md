[![Build Status](https://travis-ci.org/simpleviewinc/util-browser.svg?branch=master)](https://travis-ci.org/simpleviewinc/util-browser)

# util-browser

`npm install util-browser`

Node `util` browserified and wrapped in require UMD to be usable in node and browser environments. It can be used in the browser with requirejs or without requirejs. In addition it can be used on the server.

# In the Browser

- Standalone: If you aren't using requirejs simply add a script tag to index.min.js and it will be exported to window.util.
- RequireJS: Add an entry to your requirejs config which points to index.min.js and export it on whatever name you desire.