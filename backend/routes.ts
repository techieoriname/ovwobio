import {getInstanceRouter} from "xpresser";
/**
 * $.router - XpresserRouter
 */
const route = getInstanceRouter();

/**
 * Name in routes is not compulsory.
 * if action of controller name is === to route name
 * You can use the .actionAsName() function,
 * As seen in about route
 */
route.get('/', 'Index@homepage').name('home');
route.get('/about', http => http.view('about')).name('about');
route.get('/contact', http => http.view('contact')).name('contact');
route.get('/services', http => http.view('services')).name('services');
