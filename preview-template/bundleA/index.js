System.register("bundle://bundleA/_virtual/bundleA",["./bundleA.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("bundle://bundleA/_virtual/bundleA.ts",["cc","./index.ts"],(function(){var e,n;return{setters:[function(n){e=n.cclegacy},function(e){n=e.index}],execute:function(){e._RF.push({},"dc264pg4FFKb6mLSbx9vnij","bundleA",void 0),console.log("pptest A",n),e._RF.pop()}}}));

System.register("bundle://bundleA/_virtual/cjs-imported.cjs",["./cjs-loader.mjs"],(function(e,t){var n;return{setters:[function(e){n=e.default}],execute:function(){var r=e("__cjsMetaURL",t.meta.url);n.define(r,(function(e,t,n,r,s){console.log("cjs-imported"),n.exports}),{})}}}));

System.register("bundle://bundleA/_virtual/cjs-imported.mjs_cjs=&original=.cjs",["./cjs-imported.cjs","./cjs-loader.mjs"],(function(e,t){var r,s;return{setters:[function(t){r=t.__cjsMetaURL,e("__cjsMetaURL",t.__cjsMetaURL)},function(e){s=e.default}],execute:function(){r||s.throwInvalidWrapper("./cjs-imported.cjs",t.meta.url),s.require(r)}}}));

System.register("bundle://bundleA/_virtual/cjs-loader.mjs",[],(function(e){return{execute:function(){e("default",new(function(){function e(){this._registry={},this._moduleCache={}}var r=e.prototype;return r.define=function(e,r,t){this._registry[e]={factory:r,resolveMap:t}},r.require=function(e){return this._require(e)},r.throwInvalidWrapper=function(e,r){throw new Error("Module '"+e+"' imported from '"+r+"' is expected be an ESM-wrapped CommonJS module but it doesn't.")},r._require=function(e,r){var t=this._moduleCache[e];if(t)return t.exports;var o={id:e,exports:{}};return this._moduleCache[e]=o,this._tryModuleLoad(o,e),o.exports},r._resolve=function(e,r){return this._resolveFromInfos(e,r)||this._throwUnresolved(e,r)},r._resolveFromInfos=function(e,r){var t,o;return e in cjsInfos?e:r&&null!=(t=null==(o=cjsInfos[r])?void 0:o.resolveCache[e])?t:void 0},r._tryModuleLoad=function(e,r){var t=!0;try{this._load(e,r),t=!1}finally{t&&delete this._moduleCache[r]}},r._load=function(e,r){var t=this._loadWrapper(r),o=t.factory,n=t.resolveMap,i=this._createRequire(e),u=n?this._createRequireWithResolveMap("function"==typeof n?n():n,i):i;o(e.exports,u,e)},r._loadWrapper=function(e){return e in this._registry?this._registry[e]:this._loadHostProvidedModules(e)},r._loadHostProvidedModules=function(e){return{factory:function(r,t,o){if("undefined"==typeof require)throw new Error("Current environment does not provide a require() for requiring '"+e+"'.");try{o.exports=require(e)}catch(r){throw new Error("Exception thrown when calling host defined require('"+e+"').",{cause:r})}}}},r._createRequire=function(e){var r=this;return function(t){return r._require(t,e)}},r._createRequireWithResolveMap=function(e,r){return function(t){var o=e[t];if(o)return r(o);throw new Error("Unresolved specifier "+t)}},r._throwUnresolved=function(e,r){throw new Error("Unable to resolve "+e+" from "+parent+".")},e}()))}}}));

System.register("bundle://bundleA/_virtual/ext-imported.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"5dfb1QGzwxAV7RVUYI/EjeY","ext-imported",void 0),console.log("ext-imported"),e._RF.pop()}}}));

System.register("bundle://bundleA/_virtual/index.ts",["cc","./js-imported.mjs_cjs=&original=.js","./mjs-imported.mjs","./cjs-imported.mjs_cjs=&original=.cjs","./ext-imported.ts"],(function(e){var i;return{setters:[function(e){i=e.cclegacy},null,null,null,null],execute:function(){i._RF.push({},"70d4f8XF2dO16GXigk/cD/R","index",void 0);e("index","index");i._RF.pop()}}}));

System.register("bundle://bundleA/_virtual/js-imported.js",["./cjs-loader.mjs"],(function(e,t){var n;return{setters:[function(e){n=e.default}],execute:function(){var r=e("__cjsMetaURL",t.meta.url);n.define(r,(function(e,t,n,r,s){console.log("js-imported"),n.exports}),{})}}}));

System.register("bundle://bundleA/_virtual/js-imported.mjs_cjs=&original=.js",["./js-imported.js","./cjs-loader.mjs"],(function(e,t){var r,s;return{setters:[function(t){r=t.__cjsMetaURL,e("__cjsMetaURL",t.__cjsMetaURL)},function(e){s=e.default}],execute:function(){r||s.throwInvalidWrapper("./js-imported.js",t.meta.url),s.require(r)}}}));

System.register("bundle://bundleA/_virtual/mjs-imported.mjs",[],(function(){return{execute:function(){console.log("mjs-imported")}}}));

(function(r) {
  r('virtual:///prerequisite-imports/bundleA', 'bundle://bundleA/_virtual/bundleA'); 
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