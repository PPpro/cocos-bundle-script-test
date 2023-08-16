const ccclass = cc._decorator.ccclass;

class CompInPluginScript extends cc.Component {
    onEnable () {
        console.log('CompInPluginScript on ennable')
    }
}

ccclass('CompInPluginScript')(CompInPluginScript)