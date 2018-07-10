$(document).ready(function () {
	$("button").click(function () {


		$.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
			newdiv = document.createElement("div");
			$(".container").append(newdiv);
			$(".container").children('div').attr('id', 'dane-programisty');
			$.each(data, function (value, item) {
				$(".container").children('div').last().append(value + ' ' + item + "<br>");
			});

		});


	});

});
