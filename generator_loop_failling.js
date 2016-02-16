function camenbertPath(xo,yo,cote,rayon, alpha){
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

/* A103.7,103.7 0 0 1 207.83134910886957,180.19509867807903 */

function drawPie(alpha){
  var xo = 20;
  var yo = 20;
  var cote = 400;
  var rayon = 180;
  /*alpha = 4.0;*/
  var path = camenbertPath(xo, yo, cote, rayon, alpha);
/*  svg = "<svg width=\""+ (xo+cote) +"\" height=\""+ (yo+cote) +"\">;*/
  var svg = "<svg width=\""+ 420 +"\" height=\""+ 420 +"\">";
  svg +="<path data-id=\"s0\" stroke=\"#333333\" fill=\"#f23d3d\" style=\"stroke-width: 0;\" d=\""+ path +"\" ></path>";
  svg +="</svg>";
  document.getElementById("dessin").innerHTML = svg;
}

function timer(duration, start_date) {
	var remain = duration;
	while (remain > 0) {
		var a = 2 * Math.PI / duration * remain;
		drawPie(a);
		var now = new Date();
		remain = duration - (now.getTime() - start_date.getTime())/1000;
		console.info(remain);
	}
	drawCamenbert(0);
}

