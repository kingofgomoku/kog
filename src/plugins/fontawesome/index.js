import Vue from "vue";
Vue.component("font-awesome-icon", FontAwesomeIcon);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//attachments
import {
  faFileImage,
  faFileVideo,
  faEyeSlash,
  faDesktop,
  faFile
} from "@fortawesome/free-solid-svg-icons";
library.add(faFileImage, faFileVideo, faEyeSlash, faDesktop, faFile);

// Twitter
import {
  faMapMarkerAlt,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
library.add(faMapMarkerAlt, faCalendarAlt);

// UI
import {
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faCaretSquareLeft,
  faBell,
  faCheck,
  faShareAlt,
  faFilter,
  faList,
  faInfoCircle,
  faSave,
  faLink,
  faEnvelope,
  faPen,
  faCopy,
  faSearch,
  faSpinner,
  faThList,
  faTimes,
  faHome,
  faGasPump,
  faRss
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faCaretSquareLeft,
  faShareAlt,
  faBell,
  faCheck,
  faLink,
  faEnvelope,
  faPen,
  faCopy,
  faFilter,
  faList,
  faInfoCircle,
  faSave,
  faSearch,
  faSpinner,
  faThList,
  faTimes,
  faHome,
  faGasPump,
  faRss
);

// User
import {
  faUser,
  faAddressCard,
  faStar,
  faDiceD6,
  faEllipsisV,
  faBars,
  faUsers,
  faPenSquare,
  faPlus,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faUser,
  faAddressCard,
  faStar,
  faDiceD6,
  faEllipsisV,
  faCircle,
  faPenSquare,
  faPlus,
  faUsers,
  faBars
);

// brands
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
library.add(faTwitter, faFacebook);
