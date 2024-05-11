// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');



  
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('クリックされました!');
  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {

    // 作成したli要素に「これはリスト要素です」というテキストを追加する
    text.textContent = 'ボタンをクリックしました';

    console.log('処理４(非同期処理)');
  },2000);

});

