colors = ["red", "yellow", "brown"]

function generateDonuts() {
    iterator = 0;
    $($(".donut").get().reverse()).each(function() {
        $(this).find("circle").css("fill", colors[Math.floor(Math.random() * colors.length)]);
        if(++iterator >= 3) {
            return false;
        }
    });
}

$(document).ready(function() {
    $('#donuts').jscroll({
        padding: 2000,
        loadingHtml: ''
    });
});