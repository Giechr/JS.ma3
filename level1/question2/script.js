$(document).ready(function() {

	$.getJSON('https://api.myjson.com/bins/13kfyy', function(info){

			var output='';
			for (var i = 0; i <= info.data.length-1; i++) {
				for (key in info.data[i]) {
					if (info.data[i].hasOwnProperty(key)) {
						output += '<li>' + 
						'<a href = "' + info.links[i][key] +
						'">' + key + '</a>';
						'</li>';
			    }   
				}
			}
			
			var update = document.getElementById('links');
			update.innerHTML = output;

	}); //getJSON

}); 