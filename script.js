const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
// addEventListener('click', outsideClose);
// function outsideClose(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }

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
  downloadCanvas();
  
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
    var link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "test.png";
    link.click();
}
