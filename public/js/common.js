$(`#postTextarea`).keyup(event=>{
    var textbox = $(event.target);
    var value = textbox.val().trim();
    var submitButton = $(`#submitPostButton`);
    if(submitButton.length == 0){
        return alert("No submit button found!")
    }
    if(value == ""){
        submitButton.prop('disabled', true);
        return;
    }
    submitButton.prop('disabled', false);
})

$(`#submitPostButton`).click(()=>{
    var button = $(event.target);
    var textbox = $(`#postTextarea`);
    var data = {
        content: textbox.val()
    }
    $.post("/api/posts",data, postData=>{
        var html = createPostHtml(postData);
        $(`.postContainer`).prepend(html);
        textbox.val("");
        button.prop("disabled", true);
    })
})

function createPostHtml(postData){
    var postedBy = postData.postedBy;
    console.log(postData)
    return `<div class="post">
                <div class="mainContentContainer">
                    <div class="userImageContainer">
                        <img src='${postedBy.profilePic}'/>
                    </div>
                </div>

            </div>`;
}//di funcion call tae place pya