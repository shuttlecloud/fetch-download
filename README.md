# fetch-download
A package to download files with javascript using the fetch interface


## Usage

**fetchDownload(url, options?)**    
Returns a promise, failing if the response has a error status or connection error. The second parameter is an options object that will be passed to the native [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

```js
fetchDownload=require('fetch-download');

fetchDownload(url).catch((err)=>{
    console.error(err); // {status: 404}
});

```
