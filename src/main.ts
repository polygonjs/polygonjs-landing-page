import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { FontAwesomeIcon } from "./Icons";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
