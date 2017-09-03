/// example //
// var googleURL = "https://docs.google.com/forms/u/0/d/11TDFzQJLlhxsfv9tN29NSCMwxsdzb1ZVIw4Uep-S_Zk/formResponse"
// var data = {
//  "entry.1180294877": "John",
//  "entry.1180294874": "Doe"
// }
// postToGoogle(googleURL,data);


function postToGoogle(googleURL,data) {
    $.ajax({
        url: googleURL,
        data: data,
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function() {
                //Success message
            },
            200: function() {
                //Success Message
            }
        }
    });
}
