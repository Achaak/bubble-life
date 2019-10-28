$(window).on('load', function() {
    stay_down();
});


function stay_up() {
    $('.bubble').velocity({
        transform: ["scaleY(1)", "scaleY(0.8)"]
     }, {
        duration: 2000,
        complete: function() { stay_down() }
     });
}

function stay_down() {
    $('.bubble').velocity({
        transform: ["scaleY(0.8)", "scaleY(1)"]
     }, {
        duration: 2000,
        complete: function() { stay_up() }
     })
}