/**
 * Created by zouxudong on 15-5-10.
 */

var appId = '9gjslunrzskq7ql7jv75boux71h6lv6ywnn7litgg16l90gz';
var appKey = 'ymx60j11dq360op3xadwrj9284o60vxi40k42rvsilijl3hf';
AV.initialize(appId, appKey);

/*获取URL参数*/
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

