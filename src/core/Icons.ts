// https://fontawesome.com/docs/web/use-with/vue/add-icons
//
// alternatives:
// - https://www.svgrepo.com/

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

/* import specific icons */
// import {
// 	faPlay,
// 	faPause,
// 	faChevronLeft,
// 	faChevronRight,
// 	faChevronUp,
// 	faChevronDown,
// 	faInfinity,
// 	faRecycle,
// 	faExclamationTriangle,
// 	faClock,
// 	faXmark,
// 	faRepeat,
// 	faRotate,
// 	faAlignLeft,
// 	faSquare,
// 	faCircle,
// 	faCheck,
// 	faExpand,
// 	faUsers,
// 	faCodeFork,
// 	faCloudArrowDown,
// 	faExpandAlt,
// 	faArrowPointer,
// } from "@fortawesome/free-solid-svg-icons";
import {faReact, faVuejs, faGit, faYoutube, faDiscord, faDiscourse} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faReact, faVuejs, faGit, faYoutube, faDiscord, faDiscourse);

export {FontAwesomeIcon};
