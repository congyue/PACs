var _http_map = {
  'white': {
    'any': [],
    'bangumi.bilibili.com': [
      /^\/index\/ding\-count\.json$/i
    ]
  },
  'proxy': {
    'any': [
      /^[^/]*\.cupid\.iqiyi\.com\//i,
      /^[^/]*\.video\.qq\.com\/get/i,
      /^[^/]*\.video\.qq\.com\/fcgi\-bin\//i,
      /^[^/]*\.dpool\.sina\.com\.cn\/iplookup/i,
      /^[^/]*\.letv\.com\/mms\/out\/video\/play/i,
      /^[^/]*\.api\.tv\.itc\.cn\//i,
      /^[^/]*\.letv\.cn\/vod\/v2\//i
    ],
    'acs.youku.com': [
      /^\//i
    ],
    'pl-ali.youku.com': [
      /^\//i
    ],
    'list.youku.com': [
      /^\/category\//i,
      /^\/show\/module\?/i,
      /^\/show\/point\?/i,
      /^\/show\/episode\?/i
    ],
    'api.youku.com': [
      /^\/player\//i
    ],
    'play.youku.com': [
      /^\/play\/get\.json/i
    ],
    'play-dxk.youku.com': [
      /^\/play\/get\.json/i
    ],
    'play-ali.youku.com': [
      /^\/play\/get\.json/i
    ],
    'v.youku.com': [
      /^\/page\/playlist/i,
      /^\/v_show\//i
    ],
    'ups.youku.com': [
      /^\/ups\/get\.json/i
    ],
    'player.aplus.pptv.com': [
      /^\//i
    ],
    'api.aixifan.com': [
      /^\/plays\//i
    ],
    'www.acfun.cn': [
      /^\/video\/getVideo/i
    ],
    'video.tudou.com': [
      /^\/v\//i
    ],
    'www.tudou.com': [
      /^\/a\//i,
      /^\/v\//i,
      /^\/outplay\/goto\//i,
      /^\/tvp\/alist\.action/i,
      /^\/programs\/view\//i,
      /^\/albumplay\//i,
      /^\/listplay\//i
    ],
    's.plcloud.music.qq.com': [
      /^\/fcgi\-bin\/p\.fcg/i
    ],
    'i.y.qq.com': [
      /^\/.*\/fcg\-bin\//i,
      /^\/.*\/fcgi\-bin\//i
    ],
    'c.y.qq.com': [
      /^\/.*\/fcg\-bin\//i,
      /^\/.*\/fcgi\-bin\//i
    ],
    'api.unipay.qq.com': [
      /^\/cgi\-bin\/get_pay_info\.fcg\?/i
    ],
    'hot.vrs.sohu.com': [
      /^\//i
    ],
    'live.tv.sohu.com': [
      /^\/live\/player/i
    ],
    'pad.tv.sohu.com': [
      /^\/playinfo/i
    ],
    'my.tv.sohu.com': [
      /^\/play\/m3u8version\.do/i
    ],
    'hot.vrs.letv.com': [
      /^\//i
    ],
    'api.le.com': [
      /^\/mms\/out\/video\//i
    ],
    'player.pc.le.com': [
      /^\/mms\/out\/video\//i
    ],
    'player-pc.le.com': [
      /^\/mms\/out\/video\//i
    ],
    'data.video.qiyi.com': [
      /^\//i
    ],
    'data.video.iqiyi.com': [
      /^\//i
    ],
    'cache.vip.qiyi.com': [
      /^\//i
    ],
    'cache.video.qiyi.com': [
      /^\//i
    ],
    'cache.vip.iqiyi.com': [
      /^\//i
    ],
    'cache.video.iqiyi.com': [
      /^\//i
    ],
    'iplocation.geo.qiyi.com': [
      /^\/cityjson/i
    ],
    'iplocation.geo.iqiyi.com': [
      /^\/cityjson/i
    ],
    'v.api.hunantv.com': [
      /^\/player\/video/i
    ],
    'mobile.api.hunantv.com': [
      /^\/v5\/video\/getSource/i,
      /^\//i
    ],
    'v.api.mgtv.com': [
      /^\/player\/video/i
    ],
    'pcweb.api.mgtv.com': [
      /^\/player\/video/i
    ],
    'acc.music.qq.com': [
      /^\/base\/fcgi\-bin\/getsession/i
    ],
    '182.254.116.117': [
      /^\//i
    ],
    'api.appsdk.soku.com': [
      /^\//i
    ],
    'app.bilibili.com': [
      /^\/bangumi\//i
    ],
    'bangumi.bilibili.com': [
      /^\//i,
      /^\/api\//i
    ],
    '122.72.82.31': [
      /^\//i
    ],
    '211.151.158.155': [
      /^\//i
    ],
    'info.zb.qq.com': [
      /^\/\?/i
    ],
    'info.zb.video.qq.com': [
      /^\/\?/i
    ],
    'qzs.qq.com': [
      /^\/tencentvideo_v1\//i
    ],
    'vd.l.qq.com': [
      /^\//i
    ],
    'vi.l.qq.com': [
      /^\//i
    ],
    'dispatcher.video.sina.com.cn': [
      /^\//i
    ],
    'geo.js.kankan.com': [
      /^\//i
    ],
    'web-play.pptv.com': [
      /^\//i
    ],
    'v.pptv.com': [
      /^\/show\//i
    ],
    'web-play.pplive.cn': [
      /^\//i
    ],
    'tools.aplusapi.pptv.com': [
      /^\/get_ppi\?/i
    ],
    'live.pptv.com': [
      /^\/api\/subject_list\?/i
    ],
    'dyn.ugc.pps.tv': [
      /^\//i
    ],
    'v.pps.tv': [
      /^\/ugc\/ajax\/aj_html5_url\.php/i
    ],
    'inner.kandian.com': [
      /^\//i
    ],
    'ipservice.163.com': [
      /^\//i
    ],
    'so.open.163.com': [
      /^\/open\/info\.htm/i
    ],
    'zb.s.qq.com': [
      /^\//i
    ],
    'ip.kankan.com': [
      /^\//i
    ],
    'vxml.56.com': [
      /^\/json\//i
    ],
    'music.sina.com.cn': [
      /^\/yueku\/intro\//i,
      /^\/radio\/port\/webFeatureRadioLimitList\.php/i
    ],
    'play.baidu.com': [
      /^\/data\/music\/songlink/i
    ],
    'v.iask.com': [
      /^\/v_play\.php/i,
      /^\/v_play_ipad\.cx\.php/i
    ],
    'tv.weibo.com': [
      /^\/player\//i
    ],
    'wtv.v.iask.com': [
      /^\/.*\.m3u8/i,
      /^\/mcdn\.php$/i,
      /^\/player\/ovs1_idc_list\.php/i
    ],
    'video.sina.com.cn': [
      /^\/interface\/l\/u\/getFocusStatus\.php/i
    ],
    'www.yinyuetai.com': [
      /^\/insite\//i,
      /^\/main\/get\-/i
    ],
    'www.kugou.com': [
      /^\/interface\/geoip\//i
    ],
    'www.kuwo.cn': [
      /^\/yy\/PlayCheckIp\?callback=checkIpCallback&_=/i
    ],
    'antiserver.kuwo.cn': [
      /^\/anti\.s\?/i
    ],
    'ipcheck.kuwo.cn': [
      /^\/ip_check\.kuwo/i
    ],
    'api.letv.com': [
      /^\/streamblock/i,
      /^\/mms\/out\/video\/play/i,
      /^\/mms\/out\/common\/geturl/i,
      /^\/geturl/i,
      /^\/api\/geturl/i
    ],
    'api.www.letv.com': [
      /^\/mms\/out\/video\/playJson\?/i
    ],
    'st.live.letv.com': [
      /^\/live\//i
    ],
    'live.gslb.letv.com': [
      /^\/gslb\?/i
    ],
    'live.g3proxy.lecloud.com': [
      /^\/gslb\?/i
    ],
    'api.live.letv.com': [
      /^\/crossdomain\.xml$/i
    ],
    'static.itv.letv.com': [
      /^\/api/i
    ],
    'ip.apps.cntv.cn': [
      /^\/js\/player\.do/i
    ],
    'vdn.apps.cntv.cn': [
      /^\/api\/get/i
    ],
    'vdn.live.cntv.cn': [
      /^\/api2\//i
    ],
    'cctv1.vtime.cntv.cloudcdn.net': [
      /^\/cache\//i
    ],
    'cctv5.vtime.cntv.cloudcdn.net': [
      /^\/cache\//i
    ],
    'cctv5plus.vtime.cntv.cloudcdn.net': [
      /^\/cache\//i
    ],
    'cctv13.vtime.cntv.cloudcdn.net': [
      /^\/cache\//i
    ],
    'sports1pull.live.wscdns.com': [
      /^\/live\/aoyun2$/i
    ],
    'vip.sports.cntv.cn': [
      /^\/check\.do/i,
      /^\/play\.do/i,
      /^\/servlets\/encryptvideopath\.do/i
    ],
    '211.151.157.15': [
      /^\//i
    ],
    'www.youku.com': [
      /^\/show_page\//i
    ],
    'www.soku.com': [
      /^\/search_video\//i
    ],
    'search.api.3g.youku.com': [
      /^\//i
    ],
    'search.api.3g.tudou.com': [
      /^\//i
    ],
    'api.tv.sohu.com': [
      /^\//i
    ],
    'ac.qq.com': [
      /^\/Comic/i,
      /^\/Jump/i
    ],
    'live.api.hunantv.com': [
      /^\/pc\/getSourceById/i
    ],
    'www.qie.tv': [
      /^\//i
    ],
    'www.bilibili.com': [
      /^\/video\//i
    ],
    'api.bilibili.com': [
      /^\//i
    ],
    'interface.bilibili.com': [
      /^\//i
    ],
    'm10.music.126.net': [
      /^\//i
    ],
    'douban.fm': [
      /^\//i
    ],
    'www.xiami.com': [
      /^\//i
    ],
    'lixian.xunlei.com': [
      /^\//i
    ],
    'lixian.vip.xunlei.com': [
      /^\//i
    ],
    'dynamic.cloud.vip.xunlei.com': [
      /^\//i
    ],
    'cloud.vip.xunlei.com': [
      /^\//i
    ],
    'www.iqiyi.com': [
      /^\/dongman\/$/i
    ],
    '36.110.222.105': [
      /^\//i
    ],
    '36.110.222.119': [
      /^\//i
    ],
    '36.110.222.146': [
      /^\//i
    ],
    '36.110.222.156': [
      /^\//i
    ],
    '123.125.89.6': [
      /^\//i
    ],
    '123.125.89.101': [
      /^\//i
    ],
    '123.125.89.102': [
      /^\//i
    ],
    '123.125.89.103': [
      /^\//i
    ],
    '123.125.89.157': [
      /^\//i
    ],
    '123.125.89.159': [
      /^\//i
    ],
    '123.126.32.134': [
      /^\//i
    ],
    '123.59.122.75': [
      /^\//i
    ],
    '123.59.122.76': [
      /^\//i
    ],
    '123.59.122.77': [
      /^\//i
    ],
    '123.59.122.104': [
      /^\//i
    ],
    '111.206.208.36': [
      /^\//i
    ],
    '111.206.208.37': [
      /^\//i
    ],
    '111.206.208.38': [
      /^\//i
    ],
    '111.206.208.61': [
      /^\//i
    ],
    '111.206.208.62': [
      /^\//i
    ],
    '111.206.208.163': [
      /^\//i
    ],
    '111.206.208.164': [
      /^\//i
    ],
    '111.206.208.166': [
      /^\//i
    ],
    '111.206.211.145': [
      /^\//i
    ],
    '111.206.211.146': [
      /^\//i
    ],
    '111.206.211.147': [
      /^\//i
    ],
    '111.206.211.148': [
      /^\//i
    ],
    '111.206.211.129': [
      /^\//i
    ],
    '111.206.211.130': [
      /^\//i
    ],
    '111.206.211.131': [
      /^\//i
    ],
    '220.181.153.113': [
      /^\//i
    ],
    '14.152.77.32': [
      /^\//i
    ],
    '14.152.77.26': [
      /^\//i
    ],
    '14.152.77.25': [
      /^\//i
    ],
    '14.152.77.22': [
      /^\//i
    ],
    '183.232.229.22': [
      /^\//i
    ],
    '183.232.229.21': [
      /^\//i
    ],
    '183.232.229.25': [
      /^\//i
    ],
    '183.232.229.32': [
      /^\//i
    ],
    '115.182.200.51': [
      /^\//i
    ],
    '115.182.200.50': [
      /^\//i
    ],
    '115.182.200.54': [
      /^\//i
    ],
    '115.182.200.53': [
      /^\//i
    ],
    '115.182.200.52': [
      /^\//i
    ],
    '115.182.63.51': [
      /^\//i
    ],
    '115.182.63.93': [
      /^\//i
    ],
    'ark.letv.com': [
      /^\/s/i
    ],
    'search.lekan.letv.com': [
      /^\//i
    ],
    'pay.youku.com': [
      /^\/buy\/redirect\.html/i
    ],
    'pay.tudou.com': [
      /^\/buy\/redirect\.html/i
    ],
    'aid.video.qq.com': [
      /^\/fcgi\-bin\/userip\?/i
    ],
    'aidbak.video.qq.com': [
      /^\/fcgi\-bin\/userip\?/i
    ],
    'pay.video.qq.com': [
      /^\/fcgi\-bin\/paylimit/i
    ],
    'paybak.video.qq.com': [
      /^\/fcgi\-bin\/paylimit/i
    ],
    'chrome.2345.com': [
      /^\/dianhua\/index\.php\?m=call&f=check&/i
    ],
    'music.163.com': [
      /^\/eapi\//i
    ]
  }
};
var _https_map = {
  'white': {
    'any': []
  },
  'proxy': {
    'any': [
      /^[^/]*\.video\.qq\.com\//i
    ],
    'dmd-fifajs-h5-ikuweb.youku.com': [
      /^\//i
    ],
    'dmd-fifa-h5-ikuweb.youku.com': [
      /^\//i
    ],
    'acs.youku.com': [
      /^\//i
    ],
    'ups.youku.com': [
      /^\/$/i
    ],
    'ac.qq.com': [
      /^\//i
    ],
    'www.acfun.cn': [
      /^\//i
    ],
    'v.youku.com': [
      /^\//i
    ],
    'c.y.qq.com': [
      /^\//i
    ],
    'api.unipay.qq.com': [
      /^\//i
    ],
    'hot.vrs.sohu.com': [
      /^\//i
    ],
    'data.video.qiyi.com': [
      /^\//i
    ],
    'data.video.iqiyi.com': [
      /^\//i
    ],
    'cache.video.iqiyi.com': [
      /^\//i
    ],
    'v.api.mgtv.com': [
      /^\//i
    ],
    'pcweb.api.mgtv.com': [
      /^\//i
    ],
    'info.zb.qq.com': [
      /^\//i
    ],
    'info.zb.video.qq.com': [
      /^\//i
    ],
    'qzs.qq.com': [
      /^\//i
    ],
    'vd.l.qq.com': [
      /^\//i
    ],
    'vi.l.qq.com': [
      /^\//i
    ],
    'ppi.api.pptv.com': [
      /^\//i
    ],
    'zb.s.qq.com': [
      /^\//i
    ],
    'www.bilibili.com': [
      /^\//i
    ],
    'api.bilibili.com': [
      /^\//i
    ],
    'interface.bilibili.com': [
      /^\//i
    ],
    'bangumi.bilibili.com': [
      /^\//i
    ],
    'douban.fm': [
      /^\//i
    ],
    'www.iqiyi.com': [
      /^\/$/i
    ]
  }
};
var _proxy_str = 'HTTPS secure.uku.im:8443; HTTPS secure.uku.im:993; DIRECT;';

function _check_regex_list(regex_list, str) {
  if (str.slice(0, 4) === ':80/')
    str = str.slice(3);
  for (var i = 0; i < regex_list.length; i++)
    if (regex_list[i].test(str))
      return true;
  return false;
}

function _check_patterns(patterns, hostname, full_url, prot_len) {
  if (patterns.hasOwnProperty(hostname))
    if (_check_regex_list(patterns[hostname],
        full_url.slice(prot_len + hostname.length)))
      return true;
  if (_check_regex_list(patterns.any,
      full_url.slice(prot_len)))
    return true;
  return false;
}

function _find_proxy(url_map, host, url, prot_len) {
  if (_check_patterns(url_map.white, host, url, prot_len))
      return 'DIRECT';
  if (_check_patterns(url_map.proxy, host, url, prot_len))
    return _proxy_str;
  return 'DIRECT';
}

function FindProxyForURL(url, host) {
  var prot = url.slice(0, 6);
  if (prot === 'http:/')
    return _find_proxy(_http_map, host, url, 7);
  else if (prot === 'https:')
    return _find_proxy(_https_map, host, url, 8);
  return 'DIRECT';
}
