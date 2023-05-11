System.register("chunks:///_virtual/bundleA",["./bundleA.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/bundleA.ts",["cc","./index.ts"],(function(){var n,e;return{setters:[function(e){n=e.cclegacy},function(n){e=n.index}],execute:function(){n._RF.push({},"dc264pg4FFKb6mLSbx9vnij","bundleA",void 0),console.log("A",e),n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/bundleA', 'chunks:///_virtual/bundleA'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});