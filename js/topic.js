var time = 300
var clicked_button = ""
$(document).ready(function () {
    for(let i of $(".blocks_topic").children().children()){
        $(i).click(function (e) { 
            e.preventDefault();
            let button = this
            let button_text = $($(button).children()[0]).text()
            if ( clicked_button != button){
                $.getJSON("../data/topic_description.json",
                    function (data, text, request) {
                        for(let j of data){
                            if (j.category == button_text && Object.keys(j.info).length != 0){
                                clicked_button = button
                                let description = document.createElement("div")
                                description.className = "topic_description"
                                let head = document.createElement("h2")
                                head.className = "topic_name after"
                                head.innerHTML= button_text
                                description.appendChild(head)
                                for (let q in j.info){
                                    let block = document.createElement("div")
                                    block.className = "description_block"
                                    let header = document.createElement("h4")
                                    header.className = "topic_caption"
                                    header.innerHTML = q
                                    let text = document.createElement("p")
                                    text.innerHTML = j.info[q]
                                    block.appendChild(header)
                                    block.appendChild(text)
                                    description.appendChild(block)
                                }
                                $(".topic_solution").slideUp(time,function () {
                                    $(".topic_solution").empty();
                                    $(".topic_solution").addClass("no-before");
                                    $(".topic_container").addClass("topic_click");
                                    $(".topic_solution").append(description)
                                    $(".topic").css("background", "linear-gradient(#F7FFEE,"+$(button).css("background-color")+"20%,#F7FFEE 90%");
                                    $(".topic_solution").slideDown(time);
                                });
                                
                            }
                        }
                    }
                );
            }else{
                clicked_button = ""
                $(".topic_solution").slideUp(time,function () {
                    $(".topic_solution").removeClass("no-before");
                    $(".topic_container").removeClass("topic_click");
                    $(".topic_solution").html("<p>After choosing you will be sent to our main block of web-sites where you can read about your topic and it's solution.</p>")
                    $(".topic").css("background", "#F7FFEE")
                    $(".topic_solution").slideDown(time);
                });
            }
        });
    }
});