function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../source.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
              callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function initializeSource(source)
{

}

loadJSON(function(response) {
    initializeSource(JSON.parse(response));
})

