var clock = document.getElementById("Clock");

var width = 300;
var height = 300;
var svg = d3.select("#svgcontainer")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

svg.append("rect").attr("x", 20).attr("y", 20)
	.attr("width", 200).attr("height", 100)
	.attr("fill", "green");

function updateTime()
{
	var currentDate = new Date().toLocaleTimeString();
	clock.innerHTML = "Current Time: " + currentDate;
}

updateTime();
window.setInterval(updateTime, 1000);