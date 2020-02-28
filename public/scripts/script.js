'use strict';
(function(){
    $('#start-btn').click(function(){
        $.ajax({
            url:"/start", 
            type:"POST",
            data:"some data here", 
            success: function(res) {
                alert(res);
            }
        });
    });
})();