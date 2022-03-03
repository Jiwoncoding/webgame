const key = {
    keyDown : {},
    keyValue : {
        37 : 'left',
        39 : 'right',
        38 : 'up',
        88 : 'attack'    // 키보드 자판 x키
    }
}

const renderGame = () => {
    // 재귀함수
    // 초당 약 60프레임을 그리는 무한반복! 키 눌림의 딜레이없이 캐릭터가 부드럽게 잘 움직임
    hero.keyMotion();
    window.requestAnimationFrame(renderGame);
}

const windowEvent = () => {
    window.addEventListener('keydown', e=> {
        // console.log(key.keyValue[e.which]);
        // keyDown의 키값은 keyValue의 value 값으로
        key.keyDown[key.keyValue[e.keyCode]] = true;
    });
    window.addEventListener('keyup', e=> {
        key.keyDown[key.keyValue[e.which]] = false;
    });
}

const loadImg = () => {
    const preLoadImgSrc = ['../../lib/images/ninja_attack.png', '../../lib/images/ninja_run.png'];
    // 이미지 길이만큼 반복하는 반복문 만들기
    // 반복문을 만들어 배열에 있는 모든 이미지가 로드되도록 추가
    preLoadImgSrc.forEach(arr => {
        const img = new Image();
        img.src = arr;
    });
}

let hero;
const init = () => {
    hero = new Hero('.hero');
    loadImg();
    windowEvent();
    renderGame();
}

// 모든 요소 로드 후 게임 실행 → onload 이벤트 사용
window.onload = () => {
    init();
}
