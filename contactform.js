/// -------------- Contact form -, button clicks ---------->

$(".sendnoteBtn").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const verify = $("<h6>").text("Awesome!")
    $(verify).addClass("form-input")
})

$("form").append(verify)