function previewCanvasImage(){
  var popup2 = document.getElementById('js-popup2');
  popup2.classList.add('is-show2');
  CanvasToImage();
}

window.onload = function() {
  var popup = document.getElementById('js-popup');
  
  loadImage('preview');
  
  if(!popup) return;
  popup.classList.add('is-show');

  // var blackBg = document.getElementById('js-black-bg');
  // var closeBtn = document.getElementById('js-close-btn');

  // closePopUp(blackBg);
  // closePopUp(closeBtn);

  // function closePopUp(elem) {
  //   if(!elem) return;
  //   elem.addEventListener('click', function() {
  //     popup.classList.remove('is-show');
  //   })
  // }
}


//キャンバスに画像を描画する
function loadImage(id)
{
	//画像を読み込んでImageオブジェクトを作成する
	var image = new Image();
	image.src = 'https://robodone-dev.github.io/hyou-show/format.png';
	image.onload = (function () {
		//画像ロードが完了してからキャンバスの準備をする
		var canvas = document.getElementById(id);
		var ctx = canvas.getContext('2d');
		//キャンバスのサイズを画像サイズに合わせる
		canvas.width = image.width;
		canvas.height = image.height;
		//キャンバスに画像を描画（開始位置0,0）
		ctx.drawImage(image, 0, 0);
    console.log("load");
	});
}
//キャンバスに文字を描く
function drawText(canvas_id, text_id)
{
	var canvas = document.getElementById(canvas_id);
	var ctx = canvas.getContext('2d');
	var text = document.getElementById(text_id);
   
  //時刻データを取得して変数jikanに格納する
  var jikan= new Date();

  //時・分・秒を取得する
  var year = jikan.getFullYear();
  var month = jikan.getMonth();
  var day = jikan.getDay();
  
  var data = year + "年" + month + "月" + day + "日";
  //console.log(data);
  
	//文字のスタイルを指定
	ctx.font = '32px serif';
	ctx.fillStyle = '#404040';
	//文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
	ctx.textBaseline = 'center';
	ctx.textAlign = 'center';
	//座標を指定して文字を描く（座標は画像の中心に）
	var x = (canvas.width / 2);
  var y = 486;
	//var y = (canvas.height / 2.46);
	ctx.fillText(text.value, x, y);
  drawDate('preview', data);
  
  // downloadCanvas();
  previewCanvasImage();
}

function drawDate(canvas_id, text_id)
{
	var canvas = document.getElementById(canvas_id);
	var ctx = canvas.getContext('2d');
	//var text = document.getElementById(text_id);
  var text = text_id;
  //console.log(text);
	//文字のスタイルを指定
	ctx.font = '32px serif';
	ctx.fillStyle = '#404040';
	//文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
	ctx.textBaseline = 'center';
	ctx.textAlign = 'center';
	//座標を指定して文字を描く（座標は画像の中心に）
	var x = (canvas.width / 2);
	//var y = (canvas.height / 1.465);
	var y = 810;
  ctx.fillText(text, x, y);
}


function downloadCanvas(){
    var canvas = document.getElementById("preview");
    //console.log(canvas);
    var link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "test.png";
    link.click();
}

function CanvasToImage(){
    var cvs = document.getElementById("preview");
    var png = cvs.toDataURL();
    //console.log(canvas);
    document.getElementById("newImg").src = png;
}
