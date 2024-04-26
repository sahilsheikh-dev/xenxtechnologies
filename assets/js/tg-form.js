document
    .querySelector("form.pure-form")
    .addEventListener("submit", function (e) {
        // to prevent.0
        e.preventDefault();

        // to get date and time
        var today = new Date();
        var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();

        // to get input values
        var nameInput = document.getElementById("name").value;
        var emailInput = document.getElementById("email").value;
        var numberInput = document.getElementById("number").value;
        var input_message = document.getElementById("message").value;
        var message = input_message.replace(/(\r\n|\n|\r|\n|\t)/gm, " "); //remove those line breaks for textarea

        if (nameInput === "") {
            document.getElementById("alert-message").value = "Invalid Name"
        } else if (nameInput.length < 3) {
            document.getElementById("alert-message").value = "Invalid Name"
        } else if (emailInput === "") {
            document.getElementById("alert-message").value = "Invalid Email"
        } else if (emailInput.length < 10) {
            document.getElementById("alert-message").value = "Invalid Email"
        } else if (numberInput === "") {
            document.getElementById("alert-message").value = "Invalid Number"
        } else if (numberInput.length < 10) {
            document.getElementById("alert-message").value = "Invalid Number"
        } else if (message === "") {
            document.getElementById("alert-message").value = "Invalid Message"
        } else if (message.length < 2) {
            document.getElementById("alert-message").value = "Invalid Message"
        } else {
            var send_message = "Hi Team,%0A%0A A new client reached out to you, please check with them and take a follow up.%0A%0A" +
                "<b>Name:</b> " + nameInput +
                "%0A<b>Email:</b> " + emailInput +
                "%0A<b>Number:</b> " + numberInput +
                "%0A<b>Message:</b> " + message +
                "%0A<b>Date:</b> " + date +
                "%0A<b>Time:</b> " + time +
                "%0A%0AThanks and Regards," +
                "%0ABegawo's Telegram Bot";

            // declearing bot token and chat id
            var bot_token = "7147880199:AAFJYKodu1HCPXAqCWsfzd-bDWfjGLWB_2A"; // bot token
            var chat_id = 788765432; // group chat id

            // creating url using bot token, chat id and message
            var url =
                "https://api.telegram.org/bot" +
                bot_token +
                "/sendMessage?chat_id=" +
                chat_id +
                "&text=" +
                send_message +
                "&parse_mode=html";

            // creating request
            var xhttp = new XMLHttpRequest();

            // loading status
            var loadingMsg = document.getElementById("loading-message");
            var sentMsg = document.getElementById("sent-message");
            var errorMsg = document.getElementById("error-message");

            sentMsg.style.display = "none";
            errorMsg.style.display = "none";
            loadingMsg.style.display = "block";

            // send a request
            xhttp.open("GET", url, true);
            xhttp.send();

            // response message
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    // printing the responses on console
                    console.log("xhttp.readyState=", xhttp.readyState);
                    console.log("xhttp.status=", xhttp.status);
                    console.log("response=", xhttp.responseText);

                    // storing the responses
                    var data = JSON.parse(xhttp.responseText);
                    var uploadResult = data["ok"];
                    console.log("uploadResult=", uploadResult);

                    // conditions to show response messages
                    if (uploadResult === true) {
                        loadingMsg.style.display = "none";
                        sentMsg.style.display = "block";
                        console.log("successfully uploaded file");
                    } else {
                        loadingMsg.style.display = "none";
                        errorMsg.style.display = "block";
                        console.log("failed to upload file");
                    }
                } else {
                    loadingMsg.style.display = "none";
                    errorMsg.style.display = "block";
                    console.log("failed to upload file");
                }
            };
        }
        
    });