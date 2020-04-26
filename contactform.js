/// -------------- Contact form -, button clicks ---------->

$(".sendnoteBtn").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(".sendnoteBtn").css("display", "none")

    const confirm = $("<p>").text("Awesome")
    $(confirm).addClass("form-group")
})

$("form").append(confirm)