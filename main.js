function generateDonuts() {
    iterator = 0;
    $($(".donut").get().reverse()).each(function() {
        this.append("Donut! " + iterator);
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