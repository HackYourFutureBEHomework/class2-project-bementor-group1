import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "normalize.css";
import "./assets/css/index.css";
import "./assets/css/user-profile.css";
import "./assets/css/skills.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
