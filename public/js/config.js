/**
 * Created by zouxudong on 15-5-10.
 */

var appId = '7w25ol9vos571m9r9vz6cobpmi85smwyywenol0bhez3fbyb';
var appKey = '2sz6a5fhupgvro5xqk0tbd4b6hogye5d25pgommibrq679e1';
AV.initialize(appId, appKey);

/*获取URL参数*/
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

