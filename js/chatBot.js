var json = [];
var answers = [];
const getJsonData = () => {
    answers = json;
}

$('#message').keydown(function(e) {
    if(e.key === 'Enter') {
        getUserMessage();
    }
});

const getUserMessage = () => {
    const userInput = $('#message').val();
    if(userInput.trim() != '') {
        renderUserMessage(userInput);
    }
};

// Rendering user message
const renderUserMessage = (message) => {
    const userMessageElem = document.createElement('div');
    const userNode = document.createTextNode(message);
    userMessageElem.classList.add('user_message');
    userMessageElem.append(userNode);
    $('.chat_field').append(userMessageElem);
};

// Rendering bot answer
function renderBotAnswer(botAnswer) {  
    $('#botStatus').removeClass('whistBot');
    $('#botStatus').addClass('botTyping');
    $('.chat_field').css('height', '272px');

    setTimeout(() => {
        $('#botStatus').removeClass('botTyping');
        $('#botStatus').addClass('whistBot');
        $('.chat_field').css('height', '300px');
        let botNode = '';
        const botMessageElem = document.createElement('div');
        if(botAnswer != null && botAnswer != '') {
            botNode = document.createTextNode(botAnswer);
        } 
        else {
            botNode = document.createTextNode("I'm just robot, genius...");
        }
        botMessageElem.classList.add('bot_message');
        botMessageElem.append(botNode);
        $('.chat_field').append(botMessageElem);

        $('#message').value = '';
        $('.chat_field').scrollTop() = document.querySelector('.chat_field').scrollHeight;
    }, 1000);
}