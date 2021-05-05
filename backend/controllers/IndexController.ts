import {ControllerClass} from "xpresser";
import {Http} from "xpresser/types/http";

/**
 * IndexController
 */
class IndexController extends ControllerClass {

    homepage(http: Http) {
        return http.view( 'homepage')
    }

}

export = IndexController;
