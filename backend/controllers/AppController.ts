import {getInstance, ControllerClass} from "xpresser";
import {Http} from "xpresser/types/http";

const $ = getInstance();

/**
 * AppController
 * @class
 * @extends $.controller
 */
class AppController extends ControllerClass {

    /**
     * Boot Method
     *
     * Must be static.
     * Serves as a middleware for all roots
     *
     * Whatever is returned in boot method
     * is passed as the second arguments on all methods.
     *
     * @param {Xpresser.Http} http
     * @return {object|*}
     */
    static boot(http: Http): any {
        /**
         * Set a user variable that will be passed to all methods
         *
         * This should maybe come from a database.
         */
        const user = {
            name: "Developer",
            email: "developer@example.com",
        };

        let theme: string = http.query("theme");

        // Check if theme is bulma/bootstrap
        if (http.session) {
            if (["bulma", "bootstrap"].includes(theme)) {

                http.session.theme = theme;

            } else {
                if (http.session.theme) {

                    theme = http.session.theme

                } else {
                    theme = $.config.get('project.theme', null);

                    // If null we need a config.. we throw error.
                    if (theme === null) {
                        throw new Error("{project.theme} config is required! Use bulma/bootstrap")
                    }
                }
            }
        }


        /**
         * Return Values we want other methods to get on every request.
         *
         * Imagine writing this in every method because we need them? :)
         */
        return {
            user,
            theme,
        }
    }


    /**
     * Index Page
     *
     * can be static or direct..
     *
     * About Page action is static for test.
     * @param {Xpresser.Http} http - RequestEngine Instance
     * @param user  - Imported form boot method
     * @param template - Imported form boot method
     */
    index(http: Http, {user, theme}: any): Http.Response {
        // Return index view in views folder
        return http.view(theme + '/index', {
            user,
            // for footer.ejs
            theme,
        })
    }


    /**
     * About Page
     *
     * A static method also works depending on your preference.
     *
     * @param {Xpresser.Http} http - RequestEngine Instance
     * @param user - Imported from boot method
     * @param theme - Imported from boot method
     */
    static about(http: Http, {user, theme}: any): Http.Response {
        /**
         * Set contact details
         *
         * user is imported from the boot method.
         */
        const info = {
            email: user.email,
            company: 'Your Company',
            phone: '+123456789',
            address: "Somewhere on earth, maybe Astro world!"
        };


        return http.view(theme + '/about', {
            user,
            info,
            // Required by footer.ejs
            theme,
        });
    }

}

export = AppController;
