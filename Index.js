
$(document).ready(function(){
var results = [];

var head = $("#head");
var form = $("#form");
head.hover(function(){
    $(this).css("background-color","lightgrey");
    $(this).css("color","blue");
},function(){
 $(this).css("background-color","cornsilk");
 $(this).css("color","black");
});

$("#signup").hover(function(){
    $(this).css("background-color","lightgrey");
    $(this).css("color","blue");
},function(){
 $(this).css("background-color","white");
 $(this).css("color","black");
});

head.on("click",function(){
    $("#form").show();
    $("#signupform").hide();
   // $(this).css("background-color","blue");
});

var footer = $("#footer");

var togglebutton = $("#togglebutton");
togglebutton.on("click",function(){
    console.log("buttom clicked");
    footer.toggle(500);
    if(togglebutton.text()==="Hide"){
        togglebutton.text("show");
    }else{
        togglebutton.text("Hide");
    }

});
footer.empty();
$.each(results, function(i,item){
    var newresult = $("<div class='result'>"+
    "<div class='title'>"+item.title+"</div>"+
    "<div >"+"author: " + item.author+"</div>"+
    "</div>"
    );
    footer.append(newresult);

    // newresult.hover(function(){
    //        $(this).css("background-color","lightgrey");
    //        $(this).css("border","2px solid blue");
    //        $(this).css("color","blue");
    // },function(){
    //     $(this).css("background-color","transparent");
    //     $(this).css("border","2px solid black");
    //     $(this).css("color","white");
    // })
});

var result = $(".result");
result.hover(function(){
    $(this).css("background-color","lightgrey");
    $(this).css("border","2px solid blue");
    $(this).css("color","blue");
},function(){
 $(this).css("background-color","transparent");
 $(this).css("border","2px solid black");
 $(this).css("color","white");
});

function displayresult(results){
    footer.empty();
    $.each(results, function(i,item){
        var newresult = $("<div class='result'>"+
        "<div class='title'>"+item.title+"</div>"+
        "<div >"+"author: " + item.author+"</div>"+
        "</div>"
        );
        footer.append(newresult);

        newresult.hover(function(){
                   $(this).css("background-color","lightgrey");
                   $(this).css("border","2px solid blue");
                   $(this).css("color","blue");
            },function(){
                $(this).css("background-color","transparent");
                $(this).css("border","2px solid black");
                $(this).css("color","white");
            });
});
};

$("#loginform").on("submit",function(){
   $.post("/api/login",{},function(data){
       console.log(data);
       displayresult(data);
       $("#loginform").hide(500);
       $("#logoutsection").show();
   })
   .fail(function(){
       console.log("something went wrong");
   })
   .done(function(){

   });
   
    return false;
});

$("#logoutbutton").on("click",function(){
    $("#logoutsection").hide(500);
    $("#loginform").show();
    footer.empty();
    footer.text("log in to view the courses");
});

$("#signup").on("click",function(){
    $("#head").css("background-color","white");
    $("#signup").css("background-color","cornsilk");
    $("#form").hide();
    $("#signupform").show();
});

});