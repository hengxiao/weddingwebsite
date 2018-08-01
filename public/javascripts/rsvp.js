var rsvp = function(rsvpForm, messageDiv) {
    var messageSpan;
    var formSubmitButton;
    var loaderImage;
    
    var sendRequest = function(form) {
	var url = form.attr('action');
	formSubmitButton.hide();
		
	$.ajax({
	    type: 'POST',
	    url: url,
	    data: form.serialize(),
	    success: function(data) {
		messageSpan.html("Thank you for your RSVP.<br>We look forward to seeing you soon.");
		rsvpForm.hide();
		messageDiv.show();
	    },
	    error: function(request, text, error) {
		var messageLastPart = "<br><br>Please try again later, or contact us by <a href='mailto:hengxiao@hengxiao.net'>email</a>.";
		if (request.status == 0) {
		    messageSpan.html("Your RSVP submission has failed. <br>Please check your network connection." + messageLastPart);
		} else {
		    messageSpan.html("Your RSVP submission has failed. <br>Website problem detected." + messageLastPart);
		}
		rsvpForm.hide();
		messageDiv.show();
	    }
	});
    };
    
    $(document).ready(function() {
	rsvpForm = $(rsvpForm);
	messageDiv = $(messageDiv);
	messageSpan = messageDiv.find("span");
	formSubmitButton = rsvpForm.find("input[name=submit]");
	loaderImage = rsvpForm.find("img.loader");
	messageDiv.hide();
	loaderImage.hide();
	rsvpForm.submit(function(event) {
	    var form = $(this);
	    sendRequest(form);
	    loaderImage.show();
	    event.preventDefault();
	    return false;
	});
	messageDiv.find("input").click(function(event) {
	    formSubmitButton.show();
	    loaderImage.hide();
	    rsvpForm.show();
	    messageDiv.hide();
	    event.preventDefault();
	    return false;
	});
    });
};
