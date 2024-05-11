// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('クリックされました!');
  // textというidを持つHTML要素を取得し、定数に代入する
  const text = document.getElementById('text');

  // 作成したli要素に「これはリスト要素です」というテキストを追加する
  text.textContent = 'ボタンをクリックしました';
});

