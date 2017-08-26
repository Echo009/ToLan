
/* global Jscex */

//alter by Echo0
//Email   : ech0.extreme@foxmail.com
//original author  ：http://blog.csdn.net/wuxia2001  
//2017年5月12日16:28:37

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();


function say(words, img, time) {
    swal(
            {
                title: words,
                imageUrl: img,
                timer: time||3000,
                showConfirmButton: false
            }
    );
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(window).resize(function () {  // handle view when current window has been resized .
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location); // reload the document .
    };
    
});

(function ($) {
    $.fn.typewriter = function (interval) { // print the words .
        this.each(function () { // traverse all mumber of  current element .
            var $ele = $(this), str = $ele.html(), progress = 0; // get the content of current element -> str .
            $ele.html(''); // empty current element .
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '|' : ' '));
                if (progress >= str.length) {
                    clearInterval(timer); // exit 
                }
            }, interval); // millisecond 71.9
        });
        return this;
    };
})(jQuery);
(function ($) {
    $.fn.typewriter_final = function (interval) { // print the words .
        this.each(function () { // traverse all mumber of  current element .
            var $ele = $(this), str = $ele.html(), progress = 0; // get the content of current element -> str .
            $ele.html(''); // empty current element .
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress = progress + 10;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '|' : ' '));
                if (progress >= str.length) {
                    clearInterval(timer); // exit 
                }
            }, interval); // millisecond 71.9
        });
        return this;
    };
})(jQuery);

function timeElapse(date) {
    var current = Date();
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = seconds % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var result = " <span class=\"digit\">" + days + "</span> day <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> min <span class=\"digit\">" + seconds + "</span> sec";
    $("#clock").html(result);
}
