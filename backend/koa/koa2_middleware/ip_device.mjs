/**
 * Created by jinwyp on 4/19/17.
 */


import ipAddress from 'ipaddr.js';

export function getIP (ip){

    let resultIP = {
        ipv4 : '',
        ipv6 : ''
    }

    if (ipAddress.isValid(ip)){

        if (ipAddress.IPv4.isValid(ip)) {

            // ipString is IPv4
            let currentIPv4 = ipAddress.IPv4.parse(ip);
            resultIP.ipv4 = ip;
            resultIP.ipv6 = currentIPv4.toIPv4MappedAddress();

        } else if (ipAddress.IPv6.isValid(ip)) {

            resultIP.ipv6 = ip;

            let currentIPv6 = ipAddress.IPv6.parse(ip);
            if (currentIPv6.isIPv4MappedAddress()) {

                // ip.toIPv4Address().toString() is IPv4
                resultIP.ipv4 = currentIPv6.toIPv4Address().toString();

            } else {
                // ipString is IPv6
            }
        } else {
            // ipString is invalid
            return false
        }

    }else{
        // ipString is invalid
        return false
    }
    
    return resultIP;
}







const demoDataUserAgent = {
    _agent: {
      isYaBrowser: false,
      isAuthoritative: true,
      isMobile: false,
      isMobileNative: false,
      isTablet: false,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isiPhoneNative: false,
      isAndroid: false,
      isAndroidNative: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isEdge: false,
      isIECompatibilityMode: false,
      isSafari: false,
      isFirefox: false,
      isWebkit: false,
      isChrome: false,
      isKonqueror: false,
      isOmniWeb: false,
      isSeaMonkey: false,
      isFlock: false,
      isAmaya: false,
      isPhantomJS: false,
      isEpiphany: false,
      isDesktop: false,
      isWindows: false,
      isLinux: false,
      isLinux64: false,
      isMac: false,
      isChromeOS: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isBot: false,
      isCurl: false,
      isAndroidTablet: false,
      isWinJs: false,
      isKindleFire: false,
      isSilk: false,
      isCaptive: false,
      isSmartTV: false,
      isUC: false,
      isFacebook: false,
      isAlamoFire: false,
      isElectron: false,
      silkAccelerated: false,
      browser: 'unknown',
      version: 'unknown',
      os: 'unknown',
      platform: 'unknown',
      geoIp: {},
      source: 'unknown',
      isWechat: false,
      electronVersion: ''
    }
  }


const userDeviceType = {
    desktop : 'desktop', // desktop pc or linux
    mac : 'mac',  // Mac and MacBook
    iPad : 'ipad',
    tablet : 'tablet',  // tablet except iPad
    phone : 'phone',
    iphone : 'iphone',
    tv : 'tv',
    car : 'car',
    console : 'console', // game console
    bot : 'bot'
}


export function getUserDeviceType(ctx) {
    let device = userDeviceType.desktop

    if (ctx.userAgent){

        if (ctx.userAgent.isMobile) device = userDeviceType.phone
        if (ctx.userAgent.isTablet) device = userDeviceType.tablet

        if (ctx.userAgent.isMac) device = userDeviceType.mac
        if (ctx.userAgent.isiPad) device = userDeviceType.iPad
        if (ctx.userAgent.isiPhone) device = userDeviceType.iphone

        if (ctx.userAgent.isSmartTV) device = userDeviceType.tv

        if (ctx.userAgent.isBot) device = userDeviceType.bot

    }else{

        if (ctx.header['user-agent']){
            // 用户默认的 user agent

        }else{
            // No user agent.
            // https://github.com/rguerreiro/express-device/blob/master/lib/device.js

            if (ctx.header['cloudfront-is-mobile-viewer'] === 'true') device = userDeviceType.phone;
            if (ctx.header['cloudfront-is-tablet-viewer'] === 'true') device = userDeviceType.tablet;
            if (ctx.header['cloudfront-is-desktop-viewer'] === 'true') device = userDeviceType.desktop;
        }

    }

    return device;
}


function IPDeviceMiddleware(options) {

    return async function (ctx, next) {

        let currentIP = getIP(ctx.ip);

        if (currentIP){
            ctx.ipv4 = currentIP.ipv4;
            ctx.ipv6 = currentIP.ipv6;
        }

        ctx.userDevice = getUserDeviceType(ctx);

        return next();
    }
}




export default IPDeviceMiddleware





