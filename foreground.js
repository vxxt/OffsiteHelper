
var phrase = "";
var message = "";
var counter;
//first do nothing button
//document.querySelector("#internal-tools > div > div > div:nth-child(2) > div.info > div.user-controls > div.flagged-user > div > div > button:nth-child(1)").style. color = 'c5c5c5';
document.addEventListener('keydown', function(event) {
    counter = 0;
    //var selection = "#internal-tools > div > div > div:nth-child(2) > div.info > div.user-controls > div.flagged-user > div > div > button:nth-child(";
    if(event.key == " ") {
        if (document.querySelector("#internal-tools > div > div > div:nth-child(2) > div.info > div.user-controls > div.flagged-user > div > div > button:nth-child(1)") != null){
          document.querySelector("#internal-tools > div > div > div:nth-child(2) > div.info > div.user-controls > div.flagged-user > div > div > button:nth-child(1)").click();
          counter++;
        }
        else {
          document.querySelector("#internal-tools > div > div > div:nth-child(2) > div.info > div.user-controls > div.other-user > div > div > button:nth-child(1)").click();
          counter++;
        }
    }
    console.log(counter);
    /*
    else if(event.keyCode == 67) {
        alert('C')
        document.querySelector("#internal-tools > div > div > div:nth-child(2) > div.info > div.user-controls > div.flagged-user > div > div > button:nth-child(2)").click();
    }
    else if(event.keyCode == 86) {
        alert('V')
        document.querySelector("#internal-tools > div > div > div:nth-child(2) > div.info > div.user-controls > div.flagged-user > div > div > button:nth-child(3)").click();
    }
    else if(event.keyCode == 66) {
        alert('B')
        document.querySelector("#internal-tools > div > div > div:nth-child(2) > div.info > div.user-controls > div.flagged-user > div > div > button:nth-child(4)").click();
    }
    else if(event.keyCode == 78) {
        alert('N')
        document.querySelector("#internal-tools > div > div > div:nth-child(2) > div.info > div.user-controls > div.flagged-user > div > div > button:nth-child(5)").click();
    }
    */
})

/*
for (var i = 2; i < 12; i++)
{
  phrase = document.querySelector("#internal-tools > div > div > div:nth-child(" + i + ") > div.info > div.flag-info > div > div.metadata > div.flag-offending-phrases > ul > li").innerText;
  message = document.querySelector("#internal-tools > div > div > div:nth-child(" + i + ") > div.info > div.flag-info > div > div.messages > div > pre").innerText;
  var newPhrase = "<mark>" + phrase + "<\/mark>";
  document.querySelector("#internal-tools > div > div > div:nth-child(" + i + ") > div.info > div.flag-info > div > div.messages > div > pre").innerText = message.replace(phrase, phrase.toUpperCase());
  // NEED TO CHANGE FONT COLOR OF PHRASE
}
*/
