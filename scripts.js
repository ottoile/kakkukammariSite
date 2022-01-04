function resizeFBPlugin() {
    //calculate parent box width
    var container_width = (Number($('.fb-column').width()) - Number($('.fb-column').css('padding-left').replace("px", ""))).toFixed(0);
    // set the src and replace the actual width with the calculated width. 
    document.getElementById("fb-column").src = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100071824121894&tabs=timeline&width=' + container_width + '&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1011788745900961';
    //paster link from iFrame here. Be sure to keep everything as it is, only replace the number after &width= with container_width
    // it should look something like this: 'https://www.facebook.com....&width='+container_width+'&height=......';
    // NOTE: take note of the use of apostrophes and + signs
    //set the width of the iframe
    document.getElementById("fb-column").width = container_width;
};

// call the function on resize and on window load

$(window).on('resize', function () {
    setTimeout(function () { resizeFBPlugin() }, 500);
});

$(window).on('load', function () {
    setTimeout(function () { resizeFBPlugin() }, 1500);
});