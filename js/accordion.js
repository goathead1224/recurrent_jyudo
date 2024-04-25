
// Created by Nakakuki Nobuaki
'use-strict';

// dtタグの取得、それからappearクラスでアンサーの表示と＋マークの回転を付与▼▼▼
{
    const dts = document.querySelectorAll('dt');
    dts.forEach(dt => {
        dt.addEventListener('click', () => {
            dt.parentNode.classList.toggle('appear');

            // 一つを開くと他を閉じる記述▼▼▼
            dts.forEach(el =>{
                if(dt != el){
                    el.parentNode.classList.remove('appear');
                }
            });
        });
    });

}