// This script is meant to be used for a 300 x 600 widget.
// It will get the top 5 headlines from Reddit, display them, and link to them.
// The page displaying the widget must have:
// 1. A functioning jQuery link.  For example: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
// 2. A div with the ID:forumcommWorldnewsWidget.  Example: <div id=forumcommWorldnewsWidget></div>
// 3. A link to this script.  For example: <script src=./jQuery_widget.js></script>
// Note: step #3 must be lower on the page (executed after) step #2

//The headlines are restricted to a max height, this variable is used in a few places.
var RMHeight = '66px';

//Put some limits to deal with long headlines
document.getElementById('forumcommWorldnewsWidget').style.overflow='auto';
document.getElementById('forumcommWorldnewsWidget').style.maxWidth='288px';
document.getElementById('forumcommWorldnewsWidget').style.maxHeight='588px';
document.getElementById('forumcommWorldnewsWidget').style.padding='6px';


//Allow restricted headlines to expand
function expandMH(x) {x.style.maxHeight = "300px";}
function contractMH(x) {x.style.maxHeight = RMHeight;} //

//Get JSON headlines
$.getJSON("worldnews.json", function(worldnewsdata){
	var tmptext = '<hr>';

//Style a little, but mostly allow for matched local styling.
	tmptext += '<style>';

		tmptext += '.forumcommWorldnewsWidgetTitle {';
			tmptext += 'max-height:' + RMHeight + ';';
			tmptext += 'margin-top:4px;';
			tmptext += 'margin-bottom:4px;';
			tmptext += 'font-size:18px;';
			tmptext += 'overflow:hidden;';
		tmptext += '}';

		tmptext += '.forumcommWorldnewsWidgetURL {';
			tmptext += 'font-size:12px;';
			tmptext += 'overflow-wrap:anywhere;';
		tmptext += '}';

	tmptext += '</style>';	

//A Loop for the 5 headlines and links.
	for (i = 0; i < 5; i++) {
		tmptext += '<a href=' + worldnewsdata.data.children[i].data.url + ' target=_blank style=text-decoration:none;>';

			tmptext += '<div class=forumcommWorldnewsWidgetURL>';
				tmptext += worldnewsdata.data.children[i].data.domain;
			tmptext += '</div>';

			tmptext += '<h3 class=forumcommWorldnewsWidgetTitle onmouseover="expandMH(this)" onmouseout="contractMH(this)">';
				tmptext += worldnewsdata.data.children[i].data.title;
			tmptext += '</h3>';

			tmptext += '<div class=forumcommWorldnewsWidgetURL>';
				tmptext += worldnewsdata.data.children[i].data.url;
			tmptext += '</div>';

		tmptext += '</a>';

		tmptext += '<hr>';
	}

//Request the DOM to put the content in the box.
	document.getElementById('forumcommWorldnewsWidget').innerHTML += tmptext;
});
 
