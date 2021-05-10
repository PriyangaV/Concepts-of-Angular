/*
  @ ngIf vs Hidden
    > Structural vs Attribute Directives

    $ Both are used to hide/show the elements

    * ngIf - Element will be created/destroyed/removed/added from the DOM

    * [hidden] - Element won't be removed from the DOM, hides from the browser
      > only the [hidden] attr removed/added

      $ same like 'display: none'

  @ Importance of Base Href
    > <base href="/"> vs <base href="/something/">

    $ location - index.html
    $ Tells angular router to compose/create urls

    $ When we deploy our application to any other folder path in production, that time we change the base href value to point that particular folder path

    $ This will load the bundle files with given relative path

    > ng serve --o --base-href /something/ - development

    > ng build --prod --base-href /something/ - production
      $ output - dist/something


  @ PathMatch / Redirect
    $ PathMatch
      >

    $ Redirect
      >

  @ WildCard
      > URL cannot match any of the given routes
        * use (**) wildcard to handle 404/notFound

        $ should be at the last of the route

  @ ngOnInit vs Constructor
    $ Constructor
      > It doesn't belong to angular lifecycle hooks

      * Derived from the hooks where ngOnInit belongs to the hooks

    $ ngOnInit
      > It does belong to angular lifecycle hooks

      > By using this, we'll know whether angular has finished initializing component or not

    ? Constructor is called before ngOnInit()

    $ LifeCycles
      * All Angular components will go through the particular stages like, Creation, Updation, View Initialization and Destruction

      * For every stage particular method will be called and we can use any operation with the helps of those methods

    $ Dependency Injection (DI) we use constuctor, not ngOnInit()

    $ For DOM Manipulation we use ngOnInit like viewChild

  @ JIT vs AOT
    $ Just in Time
        Compiles at run time

    $ Ahead of Time
        Compiles at build time (IVY engine) Angular 9


  @ Lazy Loading
    $ Problem
      > By default angular modules are eagerly loaded
        * means as soon as our application loads, then all the modules get loaded whether or not they are necessary

      > Due to this when our app size increases => initial load time increases

    $ Solution - Lazy Loading
      > To increase initial load time, lazy loading a design pattern is introduced

      > It loads the modules when required / on-demand

      > Speeds up our application by splitting into multiple bundles and loading them on-demand
        $ { path: '', component: '', loadChildren: '' }

  @ ngStyle vs ngClass
    $ To do conditional styling

    $ ng-style is used to interpolate javascript object into style attribute, not css class.
      > ng-style="{color: 'red'}"

      * If you want to interpolate something in style attribute, you should consider using ng-style.

        ? style="width: {{progress}}"
        ? ng-style="{'width':progress}"


    $ And ng-class directive translates your object into class attribute.
      > ng-class="{'deleted': isDeleted}"

  @ Pipes
    $ A pipe is a way to write display-value transformations that we can declare in our HTML

    $ It takes in data as input and transforms it to a desired output

    * Pipe concept in Angular

    > Pipe() function in RxJs
      ? We can uses pipes to link operators together. Pipes let us combine multiple function into a single function

      ? It takes as its arguments the functions we want to combine, and returns a new function that, when executed, runs the composed functions in sequence.

  @ Interpolation
    $ It's a one way of doing data-binding in angular

    $ Generally it's used to bind dynamic data from ts file to html

    $ like, data coming from an API, {{ data }}

    $ Flow of data is from Class(component) ----> Template(view-html)

    $ Dynamic data binding from class to template {{...}}

  @ Event Binding
    $ To capture user Events

    $ Flow of the data is from Template(view) -----> Class(component)

    $ (click)="triggerClick()"


  @ Template Reference Variables
    $ To easily access DOM elements and their properties, we use template ref variables

      > <input #temp type="text" />

    $ It also works with components too

    $ We can access methods and properties of another component
      > <Hello #reference></Hello>

  @ ViewChild and ViewChildren
    $ comp.html - view
    $ comp.ts - component

    * ViewChild
      > Helps to reference the elements of the view
        ? @viewChild('div1')
            > <div #div1>
        ? @viewChild(comp1)
            > <comp1></comp1>

      $ Helps to reference view objects (HTML elements) in the component to which it's connected

    @ ViewChildren
      > Referencing a collection, we use @ViewChildren

      $ ViewChild references one object while ViewChildren references collection

  * Multicasting
    $ It is the practice of broadcasting to a list of multiple subscribers in a single execution

    $ With a multicasting observable, you don't register multiple listeners on the document, but instead re-use the first listener and send values out to each subscriber


  * $implicit
      $ We can define local variable on ng-template through let-name

      $ When angular creates template by calling createEmbeddedView it can also pass context that will be used inside ng-template

      $ Using the key $implicit in the context object will set it's value as default

  * *ngIf and *ngFor
    $ You can't have ngFor and ngIf on the same element

  * Content-Projection
    $ Content projection allows us to insert a shadow DOM in our component

    $ To put it simply, if we want to insert HTML elements or other components in a component, then we do that using the concept of content projection

    $ In Angular, we achieve content projection using <ng-content></ng-content>

  * @Input() and @Output()
    $ A common pattern in Angular is sharing data between a parent component and one or more child components

    > @Input()
      ? allows a parent component to update data in the child component

    > @Output()
      ? allows the child to send data to a parent component


  * main. js
      $ It contains all our code including components (ts, html and css codes), pipes, directives, services and all other imported modules (including third party)

      $ As we can see over time main.js file will be bigger and bigger which is a problem as in order to see the website browser needs to download main

  * Auth-Guard
      $ Routing Makes our application as SPA

      $ Guarding routes means whether we can visit a route or not

      $ RouterModule - Is a separate module in angular that provides required services and directives to use routing and navigation in angular application


  * Routing Strategies

    $ With client-side SPAs we have two strategies we can use to implement client-side routing, one is called the
      > HashLocationStrategy
    $ and the other is called the
      > PathLocationStrategy (angular default)


    ? UseHash (hashlocation)
        > RouterModule.forRoot(routes, {useHash: true})

        $ URL can contain some data prepended with a # character

        $ The # part of the URL is called the hash fragment

    ? PushState (pathlocation)

        $ It takes advantage of a relatively new HTML5 API called pushstate (from the HTML5 history API)


        $ The default client-side routing strategy used in Angular is the PathLocationStrategy

        $ This changes the URL programmatically using the HTML 5 History API in such a way that the browser doesn't make a request to the server for the new URL

        $ By using pushstate we can change the URL and not have the browser request the page from the server and without needing to use a hash fragment


        > PathLocationStrategy also sets us up for a future architecture where we can speed up loading time by pre-rendering the pages with Angular running on the server side and then once it’s downloaded to the browser the client can take over routing. This is called Angular Universal and it’s currently in development

        > HashLocationStrategy uses the hash fragment part of the URL to store state for the client, it easier to setup and doesn’t require any co-operation from the server side but has the downside that it won’t work with Angular Universal once that’s released

  * Angular bootProcess
      $ Entry point to every Angular application is the main.ts file which contains
          @ platformBrowserDynamic().bootstrapModule(AppModule)

      $ In AppModule
          @ bootstrap: [AppComponent] - inside @NgModule


  * Angular Nested Component
    $ The only way a nested component can pass data back to its container, is with an event.

    $ The data to pass is called the event payload.

    $ In Angular, an event is defined with an EventEmitter object.

    $ So let's start by creating a new instance of an Event Emitter and decorate the property with the @Output decorator.

  * EventEmitter


  * Parent to Child:
    $ Sharing Data via Input This is probably the most common and straightforward method of sharing data. It works by using the @Input() decorator to allow data to be passed via the template.

  ? Child to Parent:
    $ Sharing Data via ViewChild ViewChild allows a one component to be injected into another, giving the parent access to its attributes and functions. One caveat, however, is that child won’t be available until after the view has been initialized. This means we need to implement the AfterViewInit lifecycle hook to receive the data from the child.

  > Child to Parent:
    $ Sharing Data via Output() and EventEmitter Another way to share data is to emit data from the child, which can be listed to by the parent. This approach is ideal when you want to share data changes that occur on things like button clicks, form entires, and other user events.

  @ Unrelated Components:
    $ Sharing Data with a Service
      > When passing data between components that lack a direct connection, such as siblings, grandchildren, etc, you should you a shared service.

      > When you have data that should always been in sync, I find the RxJS BehaviorSubject very useful in this situation.

*/
