const key = {
    keyDown : {},
    keyValue : {
        37 : 'left',
        39 : 'right',
        38 : 'up',
        88 : 'attack'    // 키보드 자판 x키
    }
}

const windowEvent = () => {
    window.addEventListener('keydown', e=> {
        // console.log(key.keyValue[e.which]);
        // keyDown의 키값은 keyValue의 value 값으로
        key.keyDown[key.keyValue[e.keyCode]] = true;
        hero.keyMotion();
    });
    window.addEventListener('keyup', e=> {
        key.keyDown[key.keyValue[e.which]] = false;
        hero.keyMotion();
    });
}

let hero;
const init = () => {
    hero = new Hero('.hero');
    windowEvent();
}

// 모든 요소 로드 후 게임 실행 → onload 이벤트 사용
window.onload = () => {
    init();
}
