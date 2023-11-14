

// ===========For Sticky Form ===========

$(window).load(function () {
    $("#sticker").sticky({ topSpacing: 80, center: true, className: "hey", zindex: 10 });
});


// ===========For Mobile Form ============

$(document).ready(function () {

    $(".urduapplybtn").on('click', function () {

        var x = $(this).text();

        if (x == "ابھی اپلائی کریں" || x == "ابھی اندراج کروائیں") {
            $("#sticker").css("display", "block");
            $("#applybtn").text("X");
            $("#applybtn").css("font-family","mont");
            $("#applybtn").css("background-color","#20325a");
            $("#applybtn").css("color","white");
        }
        else {
            $("#sticker").css("display", "none");
            $("#applybtn").text("ابھی اپلائی کریں");
            $("#applybtn").css("font-family","urdut");
            $("#applybtn").css("padding","3px 15px 10px");
            $("#applybtn").css("background-color","#ef4b4c");
            $("#applybtn").css("color","white");
        }
        });
        $(".applybtn").on('click', function () {

            var x = $(this).text();

            if (x == "Apply Now" || x == "Get Enrolled Now") {
                $("#sticker").css("display", "block");
                $("#applybtn").text("X");
                //$("#applybtn").css("background-color", "#20325a");
            $("#applybtn").css("background-color","#ef4b4c");
                $("#applybtn").css("color", "white");
            }
            else {
                $("#sticker").css("display", "none");
                $("#applybtn").text("Apply Now");
                //$("#applybtn").css("background-color", "#ef4b4c");
            $("#applybtn").css("background-color","#ef4b4c");
                $("#applybtn").css("color", "white");
            }
        });

    $('.show-modal').on('click', function () {
        $("#financial-popup").modal('show');
    })
    $('.form-modal').on('click', function () {
        $("#form-popup").modal('show');
    })

    $('.close-modal').on('click', function () {
        $("#thankyouModal").modal('hide');
    })
    $('.close-modal').on('click', function () {
        $("#financial-popup").modal('hide');
    })
    $('.close-modal2').on('click', function () {
        $("#form-popup").modal('hide');
    })
    $('#continue').on('click', function () {
        $("#financial-popup").modal('hide');
        $("#form-popup").modal('show');
    })
    $('.close-form').on('click', function () {
        $("#form-popup").modal('hide');
    })


    // for First Modal 

    let aac = document.getElementById("accinfo");
    let comm = document.getElementById("comfin");
    let cont = document.getElementById("#continue");
    const termsacc = document.getElementById("#abterms");
    // $('#continue').on('click', function(){

    aac.addEventListener('click', () => {
        if (aac.checked) {
            cont.disabled = true;
        }
        else {
            cont.disabled = false;
        }
    });




    // For FInancial aid first form disable button

    $('#continue').prop("disabled", true);

    $('input:checkbox').click(function () {
        if ($('#accinfo').is(':checked') && $('#comfin').is(':checked') && $('#check3').is(':checked') && $('#abterms').val() === "I agree to the terms above") {
            $('#continue').prop("disabled", false);

        } else {
            if ($('.formsecCheck').filter(':checked').length < 2) {
                $('#continue').attr('disabled', true);
            }
        }
    });
});
// $('#frmsubmit').prop("disabled", true)
// $('input:textarea').click(function(){
//     if ($('#appfa').val().length >2){
//             $('#frmsubmit').prop("disabled", false);
//             console.log($('#appfa').val().length);

//         } else {
//             if ($('.formsecCheck').filter(':checked').length < 2) {
//                 $('#continue').attr('disabled', true);
//             }
//         }
// });
// ===========For Form BACKGROUND=================??

$(".enrollbtn").click(function () {
    $("#sticker").css("background-color", "#c3c3c3")
});

// =============FOR sEE mORE bUTTON===========

// $(".crslist").slice(0, 3).show();
// $(".see-c-list").on('click', function () {
//     $(".crslist:hidden").slice(0, 5).slideDown();
//     $(".see-c-list").css("display", "none");
// });


// $(".faqlist").slice(0, 3).show()
// $(".see-faq-list").click(function () {
//     $(".faqlist:hidden").slice(0, 5).slideDown()
//     $(".see-faq-list").css("display", "none")
// })


//     $(function($){
//   var contents = $('.collapse');
//   var titles = $('.accordion-header');
//   titles.on('click',function(){
//     var title = $(this);
//     contents.filter(':visible').slideUp(function(){
//       $(this).prev('.accordion-header').removeClass('is-opened');
//     });  

//     var content = title.next('.collapse'); 

//     if (!content.is(':visible')) {
//       content.slideDown(function(){title.addClass('is-opened')});
//     } 
//   });
// })