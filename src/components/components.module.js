import angular from "angular";

import sessions from "./sessions/sessions.module";
import hotels from "./hotels/hotels.module";

export default angular.module("components", [
  sessions,
  hotels
]).name;
