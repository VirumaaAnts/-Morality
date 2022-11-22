var answers = [];

// Data response
async function getJsonAnswers (answersRes) {
    answers = await answersRes;
    initChat();
}

function initChat() {
    $('#message').keydown(function(e) {
        if($('#botStatus').hasClass('botTyping')) {
            $('#message').val('');
            $('#message').attr('disabled', 'disabled');
            return;
        }
        if(e.key === 'Enter') {
            getUserMessage();
        }
    });
    $('#sendMessage').click(() => {
        getUserMessage();
    });
    
    const getUserMessage = () => {
        const userInput = $('#message').val();
        if(userInput.trim() != '') {
            renderUserMessage(userInput);
        }
    };
    
    const renderUserMessage = (message) => {
        // Rendering user message
        const userMessageElem = document.createElement('div');
        const userNode = document.createTextNode(message);
        userMessageElem.classList.add('user_message');
        userMessageElem.append(userNode);
        $('.chat_field').append(userMessageElem);
    
        // Get answer from db
        const answer = answers.find(ans => ans.message == message);
        async function compareExsAnswers() {
            
            if(answer != null) {
                renderBotAnswer(answer.answer, message);
            } else {
                renderBotAnswer(null, message);
            }
        }
        compareExsAnswers();
    };
    
    // Rendering bot answer
    function renderBotAnswer(botAnswer, message) {  
        $('#botStatus').removeClass('whistBot');
        $('#botStatus').addClass('botTyping');
        $('#message').val('');
        setTimeout(() => {
            renderAnswer();
        }, 1000);
        function renderAnswer() {
            $('#botStatus').removeClass('botTyping');
            $('#botStatus').addClass('whistBot');
            $('#message').removeAttr('disabled');
            $('#message').focus();
    
            let botNode = '';
            const botMessageElem = document.createElement('div');
            if(botAnswer != null && botAnswer != '') {
                botNode = botAnswer;
            } 
            else {
                botNode = "I'm just robot, genius...";
            }
            botMessageElem.classList.add('bot_message');
            botMessageElem.innerHTML = botNode;
            $('.chat_field').append(botMessageElem);
            setTimeout(() => {
                if(message == 'bb'){
                    $('.assistant_chat').fadeOut();
                    $('.chat_field').html('<div class="bot_message">Choose your problem category:<br> <br>Depression<br>Relations<br>Dependencies<br>Fears<br>Violence<br>Family<br>Self-Rating<br>Sleeping</div>');
                    // $('.assistant_chat').hide();
                }
            }, 300);
            setTimeout(() => { document.querySelector('.chat_field').scrollTop = document.querySelector('.chat_field').scrollHeight;}, 50 );
        }
        document.querySelector('.chat_field').scrollTop = document.querySelector('.chat_field').scrollHeight;
    }
}
