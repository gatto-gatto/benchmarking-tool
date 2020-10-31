function fxx() {
    var link = document.getElementById('link').value
    var time = document.getElementById('time').value
    console.log(link)
    console.log(time)

    var meet = window.open("https://www.google.com/");

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // alert(parseInt(time) + 1)
    for (var i = 0; i < parseInt(time); i++) {
        sleep(2000).then(() => {
            // meet.window.close();
            // meet.document.getElementsByClassName("Q8LRLc")[0].style.color = "red";
            // meet.console.log(723852380)
            // meet.alert("hasglha")
            window.open(link);


        });

    }

}