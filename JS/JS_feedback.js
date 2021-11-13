function msg(){
    var feed = document.getElementById("feed").value;

    var Feedback = [];

    Feedback.push(feed);
 
    storage = window.localStorage;
    var FeedbackStorage = JSON.parse(JSON.stringify(Feedback));

   localStorage.setItem('FeedbackStorage',JSON.stringify(FeedbackStorage));

    if (FeedbackStorage != ""){
        print("Agradecemos o seu feedback");
    }
        
    window.localStorage.clear;
}
