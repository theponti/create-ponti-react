export { default as ROUTES } from './routes';

export const IS_CLIENT_SIDE = typeof window !== 'undefined';

const OUT_OF_RANGE = -1;

const getQuery = (name: string) => (IS_CLIENT_SIDE
  ? window.URLSearchParams && new URLSearchParams(window.location.search).get(name)
  : undefined);

const isIpad13 = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > OUT_OF_RANGE;

export const APP_NAME = 'Ponti UI';

export const USER_AGENT = navigator.userAgent || '';

export const IS_IPAD = navigator.platform === 'iPad' || isIpad13;

export const IS_IOS = (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
  || IS_IPAD
  || !!getQuery('isiOS');

export const IS_ANDROID = /Android/.test(USER_AGENT) || !!getQuery('isAndroid');

// Detection based on the answers here: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
export const IS_MOBILE = IS_IOS
  || IS_ANDROID
  || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(
    USER_AGENT,
  )
  || !!getQuery('isMobile');

export const IS_SAMSUNG = IS_ANDROID
    && /SAMSUNG|SGH-[I|N|T]|GT-[I|P|N]|SM-[N|P|T|Z|G]|SHV-E|SCH-[I|J|R|S]|SPH-L/i.test(
      USER_AGENT,
    );

export const IS_CYPRESS = IS_CLIENT_SIDE ? Object.hasOwn(window, 'Cypress') : false;

export const IS_MAC = !!navigator.platform && navigator.platform.toLowerCase().indexOf('mac') >= 0;
export const IS_WINDOWS = !!navigator.platform && navigator.platform.indexOf('Win') > OUT_OF_RANGE;
export const IS_LINUX = !!navigator.platform && navigator.platform.indexOf('Linux') > OUT_OF_RANGE;
export const IS_WINDOWS_10 = IS_WINDOWS && USER_AGENT.indexOf('Windows NT 10.0') > OUT_OF_RANGE;

// Returns the semver version of Safari as a string. Unfortunately, iPad 13 versioning detection
// doesn't actually detect the semver version of iOS. Don't think it's possible to get the exact
// iOS semver version on iPad 13's.
function getiOSVersion() {
  // 3rd digit (patch) is only included if non-zero, but minor version seems to always be
  // included. Should still make it optional just in case.
  const v = isIpad13
    ? navigator.appVersion.match(/Version\/(\d+)\.?(\d+)?\.?(\d+)?/)
    : navigator.appVersion.match(/OS (\d+)_?(\d+)?_?(\d+)?/);

  if (!v) {
    return null;
  }
  return v
    /* eslint-disable-next-line @typescript-eslint/no-magic-numbers */
    .slice(1, 4)
    .filter((val) => val)
    .join('.');
}

export const IOS_SEMVER_VERSION = IS_IOS && getiOSVersion();

// Useragent detection can be easily spoofed with things like Chrome dev tools. For our purposes
// this is fine. This should not be 100% relied upon but can be used to show custom messages and
// instructions for each browser.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
// https://developer.chrome.com/multidevice/user-agent#webview_user_agent
function getBrowser() {
  // These checks are in a specific order. Many ua's contain names of other browsers.
  if (USER_AGENT.indexOf('FBAN') > OUT_OF_RANGE || USER_AGENT.indexOf('FBAV') > OUT_OF_RANGE) {
    return 'facebook';
  }
  if (USER_AGENT.indexOf('Opera') > OUT_OF_RANGE || USER_AGENT.indexOf('OPR') > OUT_OF_RANGE) {
    return 'opera';
  }
  if (
    USER_AGENT.indexOf('Chrome') > OUT_OF_RANGE
    && USER_AGENT.indexOf('Chromium') === OUT_OF_RANGE
    // ' Version/' is used in chromium webviews
    && USER_AGENT.indexOf(' Version/') === OUT_OF_RANGE
  ) {
    return 'chrome';
  }
  if (
    USER_AGENT.indexOf('Safari') > OUT_OF_RANGE
    && USER_AGENT.indexOf('Chrome') === OUT_OF_RANGE
    && USER_AGENT.indexOf('Chromium') === OUT_OF_RANGE
  ) {
    return 'safari';
  }
  if (USER_AGENT.indexOf('Firefox') > OUT_OF_RANGE && USER_AGENT.indexOf('Seamonkey') === OUT_OF_RANGE) {
    return 'firefox';
  }
  return null;
}

export const BROWSER = getBrowser();

export const isIOSChrome = /CriOS/.test(USER_AGENT);

// iPads may not have this identifier if system is defaulting to desktop
// view, if so it will return safari.
export const isIOSFireFOX = /FxiOS/.test(USER_AGENT);

// Fallback to sans-serif in English.
// Fallbacks for missing glyphs, from other languages:
// Japanese and Thai
export const FONT_FAMILY_FALLBACK = '"Noto Sans JP", "Prompt", sans-serif';

export const fontFamilies = {
  defaultFont: `"Inter-Regular", ${FONT_FAMILY_FALLBACK}`,
  medium: `"Inter-Medium", ${FONT_FAMILY_FALLBACK}`,
  bold: `"Inter-Bold", ${FONT_FAMILY_FALLBACK}`,
};

// window.location.origin doesn't have great browser support
export const ORIGIN = IS_CLIENT_SIDE
  ? `${window.location.protocol}//${window.location.host}`
  : undefined;

export const COLLECTION_NAMES = {
  SURVEYS: 'surveys',
  USERS: 'users',
};
