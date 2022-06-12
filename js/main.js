var SendUsingWhatsAppAPI = false
var SendUsingWhatsAppWEB = false

function ResetValues() {
    SendUsingWhatsAppAPI = false
    SendUsingWhatsAppWEB = false
}

function SendMessage() {
    var protocol
    if (SendUsingWhatsAppAPI) {
        protocol = 'https://api.whatsapp.com/'
    } else if (SendUsingWhatsAppWEB) {
        protocol = 'https://web.whatsapp.com/'
    } else {
        protocol = 'whatsapp://'
    }
    window.open(protocol + 'send?phone=' + document.getElementById('prefix').value + document.getElementById('phone').value + '&text=' + document.getElementById("text").value)
    ResetValues()
}