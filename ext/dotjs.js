(function($) {
    var url_base = 'http://localhost:3131/' + window.location.host.replace(/^www\./, '');
    
    $.ajax({
        url: url_base + '.js',
        dataType: 'text',
        success: function(data) {
            $(function() {
                eval(data);
            });
            $('<link>').attr({
                rel: 'stylesheet',
                type: 'text/css',
                href: url_base + '.css'
            }).appendTo('head');
        },
        error: function(){
            console.log('no dotjs server found at localhost:3131');
        }
    });
})(jQuery);
