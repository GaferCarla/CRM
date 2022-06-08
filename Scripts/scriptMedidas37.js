

$(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $('#datos').hide();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        $('#datos').show();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function () {
        return false;
    })

});


function showQ1A() {
    document.getElementById('div1').style.display = 'none';
}
function showQ1B() {
    document.getElementById('div1').style.display = 'block';
}



function showQ2A() {
    document.getElementById('div2').style.display = 'none';
}
function showQ2B() {
    document.getElementById('div2').style.display = 'block';
}

function showQ3A() {
    document.getElementById('div3').style.display = 'none';
}
function showQ3B() {
    document.getElementById('div3').style.display = 'block';
}

function showQ4A() {
    document.getElementById('div4').style.display = 'none';
}
function showQ4B() {
    document.getElementById('div4').style.display = 'block';
}

function showQ5A() {
    document.getElementById('div5').style.display = 'none';
}
function showQ5B() {
    document.getElementById('div5').style.display = 'block';
}

function showQ6A() {
    document.getElementById('div6').style.display = 'none';
}
function showQ6B() {
    document.getElementById('div6').style.display = 'block';
}


function showQ7A() {
    document.getElementById('div7').style.display = 'none';
}
function showQ7B() {
    document.getElementById('div7').style.display = 'block';
}

function showQ8A() {
    document.getElementById('div8').style.display = 'none';
}
function showQ8B() {
    document.getElementById('div8').style.display = 'block';
}
12
function showQ9A() {
    document.getElementById('div9').style.display = 'none';
}
function showQ9B() {
    document.getElementById('div9').style.display = 'block';
}

function showQ10A() {
    document.getElementById('div10').style.display = 'none';
}
function showQ10B() {
    document.getElementById('div10').style.display = 'block';
}

function showQ11A() {
    document.getElementById('div11').style.display = 'none';
}
function showQ11B() {
    document.getElementById('div11').style.display = 'block';
}

function showQ12A() {
    document.getElementById('div12').style.display = 'none';
}
function showQ12B() {
    document.getElementById('div12').style.display = 'block';
}

function showQ13A() {
    document.getElementById('div13').style.display = 'none';
}
function showQ13B() {
    document.getElementById('div13').style.display = 'block';
}


function showQ14A() {
    document.getElementById('div14').style.display = 'none';
}
function showQ14B() {
    document.getElementById('div14').style.display = 'block';
}


function showQ15A() {
    document.getElementById('div15').style.display = 'none';
}
function showQ15B() {
    document.getElementById('div15').style.display = 'block';
}

function showQ16A() {
    document.getElementById('div16').style.display = 'none';
}
function showQ16B() {
    document.getElementById('div16').style.display = 'block';
}

function showQ17A() {
    document.getElementById('div17').style.display = 'none';
}
function showQ17B() {
    document.getElementById('div17').style.display = 'block';
}


function showQ18A() {
    document.getElementById('div18').style.display = 'none';
}
function showQ18B() {
    document.getElementById('div18').style.display = 'block';
}

function showQ19A() {
    document.getElementById('div19').style.display = 'none';
}
function showQ19B() {
    document.getElementById('div19').style.display = 'block';
}


function showQ20A() {
    document.getElementById('div20').style.display = 'none';
}
function showQ20B() {
    document.getElementById('div20').style.display = 'block';
}


function showQ21A() {
    document.getElementById('div21').style.display = 'none';
}
function showQ21B() {
    document.getElementById('div21').style.display = 'block';
}

function showQ22A() {
    document.getElementById('div22').style.display = 'none';
}
function showQ22B() {
    document.getElementById('div22').style.display = 'block';
}

function showQ23A() {
    document.getElementById('div23').style.display = 'none';
}
function showQ23B() {
    document.getElementById('div23').style.display = 'block';
}

function showQ24A() {
    document.getElementById('div24').style.display = 'none';
}
function showQ24B() {
    document.getElementById('div24').style.display = 'block';
}

function showQ25A() {
    document.getElementById('div25').style.display = 'none';
}
function showQ25B() {
    document.getElementById('div25').style.display = 'block';
}

function showQ26A() {
    document.getElementById('div26').style.display = 'none';
}
function showQ26B() {
    document.getElementById('div26').style.display = 'block';
}


function showQ27A() {
    document.getElementById('div27').style.display = 'none';
}
function showQ27B() {
    document.getElementById('div27').style.display = 'block';
}


function showQ28A() {
    document.getElementById('div28').style.display = 'none';
}
function showQ28B() {
    document.getElementById('div28').style.display = 'block';
}

function showQ29A() {
    document.getElementById('div29').style.display = 'none';
}
function showQ29B() {
    document.getElementById('div29').style.display = 'block';
}

function showQ30A() {
    document.getElementById('div30').style.display = 'none';
}
function showQ30B() {
    document.getElementById('div30').style.display = 'block';
}

function showQ31A() {
    document.getElementById('div31').style.display = 'none';
}
function showQ31B() {
    document.getElementById('div31').style.display = 'block';
}

function showQ32A() {
    document.getElementById('div32').style.display = 'none';
}
function showQ32B() {
    document.getElementById('div32').style.display = 'block';
}


function showQ33A() {
    document.getElementById('div33').style.display = 'none';
}
function showQ33B() {
    document.getElementById('div33').style.display = 'block';
}

function showQ34A() {
    document.getElementById('div34').style.display = 'none';
}
function showQ34B() {
    document.getElementById('div34').style.display = 'block';
}

function showQ35A() {
    document.getElementById('div35').style.display = 'none';
}
function showQ35B() {
    document.getElementById('div35').style.display = 'block';
}

function showQ36A() {
    document.getElementById('div36').style.display = 'none';
}
function showQ36B() {
    document.getElementById('div36').style.display = 'block';
}

function showQ37A() {
    document.getElementById('div37').style.display = 'none';
}
function showQ37B() {
    document.getElementById('div37').style.display = 'block';
}