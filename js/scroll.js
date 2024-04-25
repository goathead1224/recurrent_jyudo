// 対象の要素を全て取得（共通のクラス名がついている要素）
const allTarget = document.querySelectorAll('.animate__animated');

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation(){
    // 取得した全ての対して処理を繰り返すためにforEach関数を使って処理する
    allTarget.forEach(function(target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            target.classList.add('animate__fadeInUp'); // yourClassNameは付与したいクラス名に置き換えてください
        } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove('animate__fadeInUp');
        }
    });
};

// スクロールイベントを追加
window.addEventListener('scroll', observation);