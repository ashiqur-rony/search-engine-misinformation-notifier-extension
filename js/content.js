const words = ['covid', 'COVID', 'covid19', 'COVID19', 'hydroxychloroquin', 'alcohol'];
const filtered_words = words.filter( word => {
    return $( 'body:contains(' + word + ')' ).length > 0;
} );
if ( filtered_words !== undefined && filtered_words.length > 0 ) {
    let html = "<span class='close-popup'>&times;</span>";
    html += "<p>Please visit " +
        "<a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public' target='_blank'>" +
        "WHO website</a> for update public health advisory.</p>";
    html += "<p>Misinformation trigger keywords on the website:</p>";
    html += "<ul class='misinformation-list'>";
    for ( const word of filtered_words ) {
        html += "<li>" + word + "</li>";
    }
    html += "</ul>";

    $( 'body' ).append( "<div class='misinformation-popup'>" + html + "</div>" );
    console.log( filtered_words );
}

$( '.misinformation-popup .close-popup' ).on( 'click', function () {
    $( '.misinformation-popup' ).hide();
} );
