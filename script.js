window.addEventListener('load', function() {
	var cnv = document.getElementById("logo");
	var ctx = cnv.getContext('2d');
	/*
	var base = ctx.createRadialGradient(182.5, 90.5, 10, 300, 200, 360);

	base.addColorStop(0, "#FFFFFF"); // Color fix?
	base.addColorStop(0.3, "#C2D6D7");
	base.addColorStop(1, "#3E4D4F");*/
	var base = "#FFFFFF"

	ctx.beginPath();
	ctx.fillStyle = "#9DBBD8";
	ctx.arc(162.5, 137.5, 112.5, 0, Math.PI*2, true)
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = base;
	ctx.arc(162.5, 137.5, 102.5, 0, Math.PI*2, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#14C7DE";
	ctx.arc(162.5, 137.5, 102.5, 0, Math.PI*2, true);
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.fillStyle = "#25AFDC";
	ctx.arc(162.5, 137.5, 102.5, Math.PI*0.8, Math.PI*2, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#2DA3DC";
	ctx.arc(162.5, 137.5, 102.5, Math.PI*0.5, Math.PI*3.5, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#3498DB";
	ctx.arc(162.5, 137.5, 102.5, Math.PI*0.2, Math.PI*3.6, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#2585C5";
	ctx.arc(162.5, 137.5, 102.5, 0, Math.PI*3.5, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath(); // TODO: make it curve inwards (bezier curve??)
	ctx.fillStyle = "#FFFFFF";
	ctx.ellipse(165.5, 128.5, 80, 90, 0, Math.PI*2, 0, true);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "#444FAD"; // Sets color
	ctx.font = '30px "Cascadia Code Italic"'; // Sets font -- 5px is too small to read
	ctx.fillText('h w', 70, 120); // Text

/*
	ctx.beginPath();
	ctx.strokeStyle = "#6AA0AA"
	ctx.arc(100, 100, 80, 0, Math.PI*2, true);
	ctx.lineWidth = "10";
	ctx.stroke();
	ctx.closePath();

	ctx.fillStyle = "#444FAD";
	ctx.font = '30px "Albertus MT"';
	ctx.fillText('H', 90, 90); // PLACEHOLDER VALUES
	ctx.fillText('W', 110, 110);*/
})