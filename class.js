// 캐릭터 기본 모션 키에 반응하도록 만들기
class Hero {
	constructor(el) {
        this.el = document.querySelector(el);
        this.movex = 0;   // 히어로가 이동할 거리
        this.speed = 16;  // 히어로의 스피드
	}
	keyMotion() {
        if(key.keyDown['left']) {
            this.el.classList.add('run');
            this.el.classList.add('flip');

            this.movex = this.movex - this.spped;

        } else if(key.keyDown['rignt']){
            this.el.classList.add('run');
            this.el.classList.remove('flip');

            this.movex = this.movex + this.spped;
        }
        if(key.keyDown['attack']) {
            this.el.classList.add('attack');
        }
        if(!key.keyDown['left'] && !key.keyDown['right']) {
            this.el.classList.remove('run');
        }
        if(!key.keyDown['attack']) {
            this.el.classList.remove('attack');
        }
        
        this.el.parentNode.style.transform = `translateX(${this.movex}px)`;
        // 키눌림 딜레이 차이로 캐릭터의 움직임이 자연스럽지 못함.
	}
}