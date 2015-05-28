/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$.fn.ttip = function (settings) {
    settings = $.extend({
        bground: "#fff",
        fcolor: "#000",
        border: "3px #666666 solid",
        bradius: 8,
        fadeintime: 300,
        fadeouttime: 300,
        effect: "fadeIn", //fadeIn,toogle,fadeToggle,show,slideDown,slideToggle
        style: "none",
        stylecolor: "none",
        direction: "none" //right,top,left,bottom
    }, settings);

    $(this).each(function () {
        //kein klicken möglich
        $(this).click(function (e) { e.preventDefault(); });
        //old
        //var inhalt = $(this).attr("title");
        var n = '"#' + $(this).attr("name") + '"';
        //var str = '"#'+name+'"';
        var w = $("body").find(n).html();
        //var b = '"#'+$(this).attr("name")+'"';
        var i = $("body").find(n);
        var t = i.css("height");
        var u = i.css("width");

        var relativeX = this.offsetLeft;
        var relativeY = this.offsetTop;
        var width = this.offsetWidth;
        var height = this.offsetHeight;
        var showtipright = [relativeX + width, relativeY + height - height / 2];
        var showtiptop = [relativeX + width / 2, relativeY];
        var showtipbottom = [relativeX + width / 2, relativeY + height];
        var tttoptop = relativeY - t.replace("px", "");
        var tttopleft = relativeX + width - u.replace("px", "") - 3;
        $(this)
			.mouseenter(function (evt) {
			    if ($("#ttip").css("opacity") != 0) {
			        $("#ttip").stop().remove();
			    }
			    if (settings.direction != "none") {
			        var d = settings.direction;


			        if (d == "right") {
			            $("#ttip").css({
			                left: showtipright[0],
			                top: showtipright[1]
			            });
			        }
			        else if (d == "top") {
			            $("#ttip").css({
			                left: showtiptop[0],
			                top: showtiptop[1]
			            });
			        }
			        else if (d == "bottom") {
			            $("#ttip").css({
			                left: showtipbottom[0],
			                top: showtipbottom[1]
			            });
			        }
			    }
			    else {
			        $("#ttip").css({
			            left: evt.pageX + 20,
			            top: evt.pageY + 20
			        });

			    }
			    showTTip(evt, settings.fadeintime, w);
			})
			.mouseleave(function () {
			    $("#ttip").fadeOut(
					settings.fadeouttime,
					function () {
					    $(this).remove();
					}
				);
			})
			.mousemove(function (evt) {
			    $(this).css("cursor", "pointer");

			    if (settings.direction != "none") {
			        var d = settings.direction;


			        if (d == "right") {
			            $("#ttip").css({
			                left: showtipright[0],
			                top: showtipright[1]
			            });
			        }
			        else if (d == "top") {
			            $("#ttip").css({
			                left: tttopleft / 2,
			                top: tttoptop,
			                width: u,
			                height: t
			            });
			        }
			        else if (d == "bottom") {
			            $("#ttip").css({
			                left: showtipbottom[0],
			                top: showtipbottom[1]
			            });
			        }
			    }
			    else {
			        $("#ttip").css({
			            left: evt.pageX + 20,
			            top: evt.pageY + 10,
			            width: u,
			            height: t
			        });

			    }







			    //                                var x = $(this.id);
			    //                                var y = this.id;
			    //
			    //
			    //                                var a = x.position();
			    //                                var aaa = a.offset();
			    //                                var b = $(a).position();
			    //                                var c = $(y).position();
			    //                                var d = $(this.id).position();

			    //alert(this.id.offsetTop);
			    //                                var p = $(this.id);
			    //                                //alert(p.toString());
			    //                                alert($("'"+this.id+"'").position().top);
			    //
			    //                                alert($(this.id).position().top)
			    //                                var position = $(p).offset();
			    //                                $(alert("top: " + $(position).position().top + ", left: " + $(p).position().left ));
			    //this.offsetLeft;
			    //var y = e.pageY - this.offsetTop
			});
    });
    function showTTip(evt, fadeintime, inhalt) {
        $("<div>")
			.attr("id", "ttip")
			.css({
			    position: "absolute",
			    left: evt.pageX + 20,
			    top: evt.pageY + 20,
			    //padding: "10px",
			    fontFamily: "arial, sans-serif",
			    fontSize: "13px",
			    background: settings.bground,
			    color: settings.fcolor,
			    border: settings.border,
			    cursor: "pointer",
			    display: "none",
			    "-moz-border-radius": settings.bradius,
			    "-webkit-border-radius": settings.bradius
			})
			.html(inhalt)
			.appendTo("body")
                        [settings.effect](fadeintime);
    }
}























  .on("mouseover", function (e) {
      var bodyOffsets = document.body.getBoundingClientRect();
      tempX = e.pageX - bodyOffsets.left;
      tempY = e.pageY;
      console.log("tempy " + tempY);
      $(this).find(".cards-tooltip").css({ 'top': mouseY, 'left': mouseX }).show();
  });
$(".animated")
.on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    //console.log(mouseX);
    $(this).find(".cards-tooltip").css({ 'top': pageY, 'left': pageX });
});