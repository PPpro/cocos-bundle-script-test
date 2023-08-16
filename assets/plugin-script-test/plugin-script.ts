import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('plugin_script')
export class plugin_script extends Component {
    start() {
        const testComp = this.addComponent('CompInPluginScript');
        console.log(testComp)
    }

    update(deltaTime: number) {
        
    }
}

