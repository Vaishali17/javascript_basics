// window -> location, history, document, navigator, screen
// document -> forms, images, links

var newWindow = window.open("http://www.google.com", "new window", height=100,width=200);
newWindow.moveTo(200,150);

//window.close();
document.write("<br> starting with navigator properties");

function navigatorProperties () {
    document.write(navigator.appCodeName);
    document.write("<br>");
    document.write(navigator.cookieEnabled);
    document.write("<br>" +navigator.platform);
}

navigatorProperties();

document.write("<br> starting with location properties");

function locationProperties(){
    document.write(location.href);
}

locationProperties();

history.forward("http://www.google.com");