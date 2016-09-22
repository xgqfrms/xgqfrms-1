# $(document).ready(function() {
		$("#getMessage").on("click", function() {
			$.getJSON("./json/cats.json", function(json) {
				var html = "";
				// Only change code below this line.
				json.forEach(function(val) {
					var keys = Object.keys(val);
					html += "<div class = 'cat'>";
					keys.forEach(function(key) {
						html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
						//
					});
					html += "</div><br>";
				});
				// Only change code above this line.
    		$(".message").html(html);
			});
		});
	});
