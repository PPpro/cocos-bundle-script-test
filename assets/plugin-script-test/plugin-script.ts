import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { assert } from '../assert';

@ccclass('plugin_script')
export class plugin_script extends Component {
    start() {
        const testComp = this.addComponent('CompInPluginScript');
        assert(!!testComp, 'Failed to register component in plugin script');

        const testCompInEditorPlugin = this.addComponent('component_in_editor_plugin');
        assert(!!testCompInEditorPlugin, 'Failed to register component in editor plugin');
    }

    update(deltaTime: number) {
        
    }
}

