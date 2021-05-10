/*
 * @ Routing
      $ Angular Router is a mechanism in which navigation happens from one view to the next as users perform application tasks like child routes, multiple child routes

      $ It borrows the concepts or model of browser's application navigation

  * @ Purpose of base href teg
      $ The routing application should add element to the index.html as the first child in the tag in order to indicate how to compose navigation URLs

      $ If app folder is the application root then we can set the href value as below
        > <base href="/">

      ! It's mandatory to have base href

      $ Otherwise the links and the navigation in the routing system will not work

  * @ Router Imports
      $ Angular Router which represents a particular component view for a given URL is not part of Angular Core

      $ It's available in library named @angular/router to import required router components

      $ We import them in app module
        > import { RouterModule, Routes } from '@angular/router';

  * @ Router Outlet
      $ The RouterOutlet is a directive from the router library

      $ It acts as a placeholder that marks the spot in the template where the router should display the components for that outlet

      $ It tells where should the router output come and get inserted

      $ We can have multiple outlets in the application, but at least should have one

      $ Use like a component
        > <router-outlet></router-outlet>
        > <!-- Routed Components go here -->

  * @ Router Links
      $ RouterLink is a directive on the anchor tags give the router control over those elements

      $ Since the navigation paths are fixed, we can assign string values to router-link directive
        > ``` <nav>
                <a routerLink="/todo">
                <a routerLink="/details">
              </nav> ```
        > <router-outlet></router-outlet>

  * @ Active Router Links
      $ RouterLinkActive is a directive that toggles css classes for active RouterLink bindings based on the current RouterState

      $ i.e the Router will add CSS classes when this link is active and remove when the link is inactive

      > <a routerLink="/details" routerLinkActive="active">

  * @ Router State
      $ RouterState is a tree of activated routes

      $ Every node in this tree knows about the "consumed" URL segments, the extracted parameters, and the resolved data

      $ We can access the current RouterState from anywhere in the application using the Router service and the routerState property

        > ``` constructor(router: Router){
          const state: RouterState = router.routerState;
          const root: ActivatedRoute = state.root;
          const child = root.firstChild;
          const id: Observable<string> = child.params.map(p => p.id)
        } ```

  * @ Router Events
        $ During each navigation, the Router emits navigation events through the Router.events property allowing us to track the lifecycle of the route.

          * NavigationStart
          * RouterConfigLoadStart
          * RouterConfigLoadEnd
          * RoutesRecognized
          * GuardsCheckStart
          * ChildActivationStart
          * ActivationStart
          * GuardCheckEnd
          * ResolveStart
          * ResolveEnd
          * ActivationEnd
          * ChildActivationEnd
          * NavigationEnd
          * NavigationCancel
          * NavigationError
          * Scroll

        $ When we navigate from one screen to another, we want to reset the url.
            > We can use it using NavigationStart/End events

  * @ Activated Route
        $ ActivatedRoute contains the information about a route associated with a component loaded in an outlet

        $ It can also be used to traverse the router state tree

        $ The ActivatedRoute will be injected as a router service to access the information

        $ Accessing route path and parameters
          ``` constructor(route: ActivatedRoute) {
                const id: <Observable<string> = route.params.pipe(map(p => p.id));
                const url: <Observable<string> = route.url.pipe(map(segments => segments.join('')))

                @ // route.data includes both 'data' and 'resolve'

                const user = route.data.pipe(map(data => data.user))
              } ```

  * @ How do we define routes?
        $ A router must be configured with a list of route definitions

        $ We configure the router with routes via
              > RouterModule.forRoot() method

        $ And adds the result to the AppModule's imports array

              > enableTracking: true --> debugging purpose

  * @ WildCard Route and its purpose
      $ If the URL doesn't match any predefined routes then it cases the router to throw an error and crash the app

      $ In that case, we can use wildcard route

      $ A wildcard route has a path consisting of two asterisks to match every URL

      $ We can define
              > PageNotFoundComponent
      $ for the wildcard route
              > { path: '**', component: PageNotFoundComponent }

  * @ Do we need a Routing Module always?
      $ No, the Routing Module is a design choice.

      $ We can skip routing module, (for example, AppRoutingModule) when the configuration is simple and merge the routing configuration directly into the companion module (for example, AppModule)

      $ But it's recommeded when the configuration is complex and includes specialized guard and resolver services

  * RouterModule forRoot
      $ The forRoot() method creates an NgModule that contains all the directives, the given routes, and the Router service itself

      $ The forChild() method creates an NgModule that contains all the directives and the given routes, but does not include the Router service
*/
