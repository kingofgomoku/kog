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
  faUser,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
library.add(faMapMarkerAlt, faUser, faCalendarAlt);

// Tabs
import {
  faColumns,
  faGlobeAmericas,
  faGlobeAfrica,
  faGlobeAsia,
  faCity,
  faChartArea,
  faTree,
  faTruck,
  faWarehouse,
  faDotCircle
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faColumns,
  faGlobeAmericas,
  faDotCircle,
  faGlobeAfrica,
  faGlobeAsia,
  faCity,
  faChartArea,
  faTree,
  faTruck,
  faWarehouse
);

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
  faBars,
  faBell,
  faCheck,
  faEllipsisV,
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
  faPlus,
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
  faBars,
  faShareAlt,
  faBell,
  faCheck,
  faLink,
  faEnvelope,
  faPen,
  faCopy,
  faEllipsisV,
  faFilter,
  faList,
  faInfoCircle,
  faSave,
  faSearch,
  faSpinner,
  faThList,
  faTimes,
  faPlus,
  faHome,
  faGasPump,
  faRss
);

// brands
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
library.add(faTwitter, faFacebook);

// scope
import {
  facScopeLocal,
  facScopeNational,
  facScopeGlobal
} from "@/helpers/fontawesome/custom";
library.add(facScopeLocal, facScopeNational, facScopeGlobal);

// category
import {
  faBuilding,
  faFutbol,
  faMedkit,
  faMoneyBill,
  faShieldAlt,
  faTrafficLight,
  faUmbrella,
  faBasketballBall,
  faHockeyPuck,
  faFilm,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBuilding,
  faFutbol,
  faMedkit,
  faMoneyBill,
  faShieldAlt,
  faTrafficLight,
  faUmbrella,
  faBasketballBall,
  faHockeyPuck,
  faFilm,
  faQuestion
);
