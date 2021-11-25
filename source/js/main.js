import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {runLoaderWork} from './modules/loader';
import {showAudience} from './modules/main-content-show-audience';

// Utils
// ---------------------------------

ieFix();
iosVhFix();
runLoaderWork();
showAudience();

// Modules
// ---------------------------------

initModals();
