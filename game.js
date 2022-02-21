const key = {
    keyDown : {},
    keyValue : {
        37 : 'left',
        39 : 'right',
        38 : 'up'
    }
}

const windowEvent = () => {
    window.addEventListener('keydown', e=> {
        // console.log(key.keyValue[e.which]);
        // keyDown의 키값은 keyValue의 value 값으로
        key.keyDown[key.keyValue[e.which]] = true;
    });
    window.addEventListener('keyup', e=> {
        key.keyDown[key.keyValue[e.which]] = false;
    });
}

const init = () => {
    windowEvent();
}

// 모든 요소 로드 후 게임 실행 → onload 이벤트 사용
window.onload = () => {
    init();
}
