# PhoneGap-Ajax-Example

PhoneGap example using Ajax to retrieve information from coderbits profile information.
* The initialize() function loads when the body in wwww/index.html has loaded.

```javascript

// www/js/index.js

function initialize() {
    document.addEventListener('deviceready', function() {

        retrieveData("https://coderbits.com/brianborge.json");

    }, false);
}


function retrieveData(url) {
    var request = new XMLHttpRequest();

    request.onload = function() {
        if (request.readyState === 4 && request.status === 200) {
            alert(request.responseText);
        } else {
            alert(request.statusText);
        }
    };
    
    request.open("get", url, true);
    request.send();
}
```
