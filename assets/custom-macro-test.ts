import { _decorator, Component, Node } from 'cc';
import { WECHAT } from 'cc/env';
import { TEST1 } from 'cc/userland/macro';
const { ccclass, property } = _decorator;
WECHAT

console.log(TEST1)

@ccclass('custom_macro_test')
export class custom_macro_test extends Component {
    start() {
    }

    update(deltaTime: number) {
        
    }
}

