const chatBody = document.querySelector('.chat_field');
const input = document.querySelector('#message');

const getUserMessage = () => {
    const userInput = input.value;
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
    chatBody.append(userMessageElem);
};

// Rendering bot answer
function renderBotAnswer(botAnswer) {  
    $('#botStatus').removeClass('whistBot');
    $('#botStatus').addClass('botTyping');
    $('.chat_body').css('height', '272px');
    // while ($('#botStatus').hasClass('botTyping')) {
    //     $('#input').keypress(function(e) {
    //         return false;
    //     });
    // }
    setTimeout(() => {
        $('#botStatus').removeClass('botTyping');
        $('#botStatus').addClass('whistBot');
        $('.chat_body').css('height', '300px');
        let botNode = '';
        const botMessageElem = document.createElement('div');
        if(botAnswer != null && botAnswer != '') {
            botNode = document.createTextNode(botAnswer);
        } 
        else {
            botNode = document.createTextNode("I'm just robot eblivii!");
        }
        botMessageElem.classList.add('chatbot_message');
        botMessageElem.append(botNode);
        chatBody.append(botMessageElem);

        input.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
    
}