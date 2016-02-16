function piePath(xo,yo,cote,rayon, alpha){
  var cx = xo + cote/2;
  var cy = yo + cote/2;
  var Mx = cx + rayon * Math.sin(alpha);
  var My = cy - rayon * Math.cos(alpha);
  var axis_rot = 0;
  var large_arc_flag = Math.floor(alpha / Math.PI) % 2;
  var sweep_arc_flag = 1;
  var path  = "M" + cx +","+ cy ;
  path +=" L" + cx +","+ (cy-rayon);
  path +=" A" + rayon +","+ rayon +" "+axis_rot+" "+large_arc_flag+" "+sweep_arc_flag+" "+Mx+","+My;
  path +=" Z";
  return path;
}


function drawPie(alpha){
  var xo = 20;
  var yo = 20;
  var cote = 400;
  var rayon = 180;
  var path = piePath(xo, yo, cote, rayon, alpha);
  var svg = "<svg width=\""+ (xo+cote) +"\" height=\""+ (yo+cote) +"\">";
  svg +="<path data-id=\"s0\" stroke=\"#333333\" fill=\"#f23d3d\" style=\"stroke-width: 0;\" d=\""+ path +"\" ></path>";
  svg +="</svg>";
  document.getElementById("pie").innerHTML = svg;
}

function timer(duration, start_date) {
	var now = new Date();
	var remain = duration - (now.getTime() - start_date.getTime())/1000;
	console.info(remain);
	if (remain > 0) {
		var a = 2 * Math.PI / duration * remain;
		drawPie(a);
		setTimeout(function(){timer(duration, start_date)},50)
	}else{
		drawPie(0);
	}
}

