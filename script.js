var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){ 
    for(tablink of tablinks){ 
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){ 
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

/*----------------for smaller screeens of 600 and below-------*/
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

/*-------------External code used for Google sheet */
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzzJ5tcKGvZG0J9tJUvtbWs9xaJlb48HknQm9MCl3EKBPXhEYnYD5YLtFBfxXwuHaqwzg/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },6000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  /*-------------Google Translator Script */
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en-US'},
        'google_translate_element'
    );
}

    // Load the Google Translate API script
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

// Append the script to the document body
document.body.appendChild(script);
    