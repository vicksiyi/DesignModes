const obj = {
    weakLight: {
        press() {
            console.log('打开强光');
            this.currentState = obj.strongLight;
        }
    },
    strongLight: {
        press() {
            console.log('关灯');
            this.currentState = obj.offLight;
        }
    },
    offLight: {
        press() {
            console.log('打开弱光');
            this.currentState = obj.weakLight;
        }
    }
};

const Light = function () {
    this.currentState = obj.offLight;
}

Light.prototype.init = function () {
    const btn = document.createElement('button');
    btn.innerHTML = '按钮';
    document.body.append(btn);
    const self = this;
    btn.addEventListener('click', function () {
        self.currentState.press.call(self);
    });
};

const light = new Light();
light.init();