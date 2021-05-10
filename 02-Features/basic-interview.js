/*
  * Framework vs Library
  * State Management
  * Virtual DOM
  * Event Loop
  * React Hooks
  * Class vs Functional
  * Side Effects
  * Why React or Why Angular?
  * Why Node.js?
  * DI, Servives, Decorators, Modules, Directives, Pipes, Route, Pure-Impure Functions, HigherOrder Function
  * Closures, What's CLI?
  * SSR - CSR - Pre-Rendering - Dynamic Rendering
  * SEO, Why no release of Angular 3?, Latest Versions and Features
  * Testing Frameworks, E2E testing, RxJS, Promises and Async/Await, Observable
  * One-Way, Two-Way data binding
  *
  *
  * What is Angular Framework?
      $ It's typescript-based open-source front-end platform that makes it easy to build applications within web/mobile/desktop

      $ Major Features
          ~ Declarative Templates
          ~ Dependency Injection
          ~ End-to-End Tooling

  * 1. What's the use of Angular
      $ Angular is a Javascript Binding Framework which binds the HTML UI and JavaScript Model.

      $ This helps us to reduce our effort on writing those lengthy lines of code for binding

      $ Helps to implement MVVM pattern inside our web app / browser

      $ View (HTML) ====(Binding)==== Model(JS Object)
          ~ ViewModel Binding Part(View with Model) is taken care by Angular Framework

          ~ View -- ViewModel -- Model -------~ MVVM(Model-View-ViewModel)

          ~ MVC - MVP - MVW(Whatever) architecture

      $ Adding to it, it also helps us to build SPA(single-page-application) by using the concept of routing.

      $ It also has lot of other features like Routing, HTTP, DI, Input, Output because of which we don't need other frameworks

    ? AngularJS vs Angular
        * Angular is a completely revived component-based framework in which an application is a tree of individual components

        ~ Angular JS (1.x)
          $ Javascript Language
          $ Controller Architecture
          $ No Mobile Compliant
          $ No CLI
          $ No Lazy Loading
          $ No SEO
          $ No Server Side Rendering
        ~ Angular (2, 4, 5, 6, 7, 8 and 9 (IVY))
          $ Typescript Language
          $ Component Architecture
          $ Support for Mobile Compliant (ionic)
          $ CLI Support
          $ Lazy Loading Support
          $ SEO Support
              ? The gold standard for having your web app's pages show up in search engine result pages is to use server-side rendering for your applications.

              ? This will ensure that your app can be quickly and effectively crawled and indexed by search engines (by the way, there is a difference between crawling and indexing).

              ~ Server-side rendering is better for SEO than client-side rendering. This is because server-side rendering can speed up page load times, which not only improves the user experience, but can help your site rank better in Google search results.

          $ Server Side Rendering Support
              ? This is because CRA renders your app on the client side, meaning the built . js file is first downloaded to the user's browser before the rest of the page starts loading.

              ? This increases the initial load time, and some web crawlers are unable to index the site. ... This is where server-side rendering for React comes in.

              ~ In Client-side rendering, your browser downloads a minimal HTML page. It renders the JavaScript and fills the content into it. Server-side rendering, on the other hand, renders the React components on the server. The output is HTML content.

              $ Server-side JavaScript means that the code is run on the server which is serving web pages. One runs in the browser (client side), the other runs on the server. JavaScript is commonly believed just to run on browsers- this is incorrect.

  * 2. What are the directives in Angular?
      $ Directives helps us to attach behaviour to HTML DOM
        ~ It's an angular syntax inside HTML which can go and change the behaviour of our HTML DOM
          - [(ngModel)]="value"
          - {{value}}
          - [hidden]="Hide()"

          $ Directives change the behaviour of HTML DOM

          $ Directives are just "behavior" added to existing elements and components

  * 3. Explain Different Types of Angular Directives
      ~ Three Types of Directives
        - SAC
          $ - Structual Directives
            * Change the DOM layout by adding/removing elements
              ? (*ngIf, *ngFor, *ngSwitch)
          $ - Attribure Directives
            * Change the appearance and behaviour(look and feel) of HTML elements
            * They don't change the structure of the DOM
              ? <div [hidden]="Hide()"></div>
                ~ Based on this 'hidden' attribute value, the div will be hidden/shown
                  - 'div' will not be removed in the DOM
                  - color change, visible/hidden


              @ Attribute directive also called custom directives are used when no additional template is needed

              @ The directive can execute logic and apply visual changes to the element it is applied to

              @ This is useful if you want to alter the behavior or style of existing HTML-elements, without wrapping them into a new component

          $ - Component Directives
            * Directives with templates. It's like a user(customize user) control

            * Self-Contained which has its own UI and Code
              ? <my-grid [grid-data]="someObject"></my-grid>
                ~ @Component({selector: 'my-grid'})
                    - my-grid will have its own component

  * 4. Explain the importance of NPM and Node_Modules folder
      $ NPM
        ~ Node Package Manager which makes installation of Javascript framework easy
      $ Node_Modules is the foler where all the js packages are installed

  * 5. Explain the importance of Package.json file in Angular
      $ It has all the javascript references needed for a project. So rather than installing one package at a time, we can install all packages in one go

  * 6. What is typescript and why do we need it?
      $ It's a superset of Javascript created by Microsoft. It extends javascript by adding types to the language

      $ It adds optional types, classes, async/await, and many other features, and compiles to plain javascript

      $ JS
        ~ Javascript is not a typed language - It's a prototypical functional language
        var x = 0; x++; x="string"; // no error

      $ Typescript
        var x:number = 0; x++; x="string"; // will throw an error

      $ Helps to speed up our development experience by catching errors and providing fixes before we even run our code

      $ It gives a nice Object-Oriented Programming environment which transpiles / converts to Javascript

      $ So as its strongly typed we'll have less errors because we do OOP with javascript our productivity and quality also increases

  * 7. Explain the importance of Angular CLI
      $ Command Line Interface
          ~ CLI helps us to create a ready made project template rather than starting from the scratch

          ~ CLI to scaffold and build angular apps using nodejs style (commonjs) modules

          ? A command line interface by which we can create initial Angular Project Template. So rather than starting from scratch we have some boiler plate code

          $ npm install @angular/cli

          $ It helps our productivity

          $ Commands
            ~ ng new - create new <project-name>
            ~ ng generate/g <name~ (components, directives and services)
            ~ ng generate class my-new-class
            ~ ng g component <name>
            ~ ng g directive <name>
            ~ ng g enum <name>
            ~ ng g module <name>
            ~ ng g pipe <name>
            ~ ng g service <name>
            ~ ng serve - running the project
            ~ ng build - building the project
            ~ ng test - testing the project

  * 8. Explain the importance of Component and Modules
        $ View--VM--Model - VM is Component
        $ Component is where we write our binding code
            ~ These components are subset of directives
              ? Unlike directives, components always have a template and only one component can be instantiated per an element in a template

              ~ A component(@Component) is a directive-with-a-template


              @ Component
                  * To register a component we use @Component meta-data annotation

                  * Components are typically used to create UI widgets

                  * Component is used to break up the application into smaller components

                  * Only one component can be present per DOM element

                  * @View decorator or templateUrl/template are mandatory

              @ Directive
                  * To register directives we use @Directive meta-data annotation

                  * Directive is used to add behaviour to an existing DOM element

                  * Directive is use to design re-usable component

                  * Many directives can be used per DOM element

                  * Directive doesn't use view


              @ Modules
                $ Module logically groups components

                $ Components help to bind the view-model. So the components is the place where we go and write that binding code

                $ While Modules go and groups the components

                $ An application is divided into logical pieces and each piece of code is called as 'Module' which perform a single task

          ~ BrowserModule is required by default for any web based angular applications

  * 9. What is a decorator in Angular?
        $ Decorator defines what kind of Angular Class is it.
          ~ For example, if we decorate @Component then it says it's an Angular Component, if we put @NgModule it becomes a Angular Module


  * 10. What are Annotation or MetaData?
        $ It's represented by Decorators

        $ It's used to decorate a class so that it can configure the expected behaviour of the class

        $ Metadata Decorators are,
          ~ Class, Property, Method, Parameters Decorators

        $ Class Decorator
          ~ @Component, @NgModule
        $ Property Decorator
          ~ Used for properties inside classes
            @Input, @Output
              ? @Input() { title: string }
        $ Method Decorator
          ~ Used for methods inside classes
            @HostListener
              ? @HostListener('click', ['$event'])
        $ Paramter Decorator
          ~ Used for parameters inside class constructors
            @Inject
              ? constructor(@Inject(MyService) myService)

  * 11. What is template?
        $ Template is an HTML view of Angular in which we can write directives.

        $ There are two ways of defining Template one is Inline and Other is a separate HTML file

        $ We can display data by binding controls to properties of an Angular Component

  * 12. Explain the four types of Data-Binding in Angular
        $ It defines how the view and component communicates with each other. There are four types of bindings in Angular as shown below.

        $ Making it very easy to define interactive applications without worrying about pushing and pulling data

          ~ Expression | Interpolation Binding --- {{...}}
              ? Data flows from the Component to View(DOM) and we can mix the same with HTML tags

          ~ Property Binding --- [...]
              ? [hidden]="value"
                $ Component to View

          ~ Event Binding --- (...)
              ? View to Component - Data Flow (When we wanna send event from view to component)
                $ (click)="clicked()"

          ~ Two Way Binding --- [(...)]
              ? View to Component | Component to View (Data flows from the component to view and vice versa)
                  $ [(ngModel)]="value"

                  ~ Both the email DOM input and component email property are in sync
                    $ <input type="email" [(ngModel)]="user.email" />

  * 13. Explain architecture/different blocks/pillars of Angular - ng - architecture - Final
          $ 1. Template (View - HTML)
            $ 2. Component - View Talks with Component. Component is actually for binding, it also talks with CSS, Model
              $ 3. Modules - Group of components put into Modules
                $ 4. Binding - View and Component Binding done by {{}}, [], (), [()]
                  $ 5. Directives - {{...}}, [ngModel], (click)
                    $ 6. Services - Common logic sharing - Services (Inside Component consume via, Dependency Injection) - Object is not created instead it's injected - Http, login utility
                      $ 7. Dependency Injection (DI)

          ~ 1. - View(HTML view)
          ~ 2. - Component(Binds V-M)
          ~ 3. - Modules(Comp Group Logically)
          ~ 4. - Binding(How View and Comp communicate)
          ~ 5. - Directives(HTML DOM Behaviour change)
          ~ 6. - Services(Helps to share common logics across the project)
          ~ 7. - Dependency Injection(helps to inject instance across constructor)

  * 14. What is SPA in Angular
        $ Single Page Application is a concept where the main UI gets loaded and then the needed UI is loaded on demand.

        $ It gives the Performance improvement

  * 15. How to implement SPA in Angular?
        $ To implement this, we need to use something called 'Angular Routing'

  * 16. How to implement routing in Angular
      ? What is Routing?
            ~ Routing is a simple collection which has two things URL and when this URL is called which component to load

            ~ So Routing helps us to define the navigation for our angular application.

            ~ So, If we want to move from one screen to other screen and we want to respect SPA that means not loading and refreshing the whole UI routing is needed

            ? <router-outlet>
                $ it's the place where the page will be loaded

            ? [routerLink]="['home']"

            ? To implement routing, we need three things
                - Router collections like, path and componentName
                - <router-outlet~ - where the page will load
                - [routerLink] - urlName - From HTML
                  - route.navigate(['/home']) - From Component

  * 17. Explain Lazy loading
        $ On-Demand loading / loading what's essential/necessary
            ~ Loading only the necessary HTML, CSS and JS files so that we have better performance

        $ Lazy Loading generally, is a concept where we delay loading of an object until it is needed

        $ In Angular, all the JavaScript components declared in the declarations array app. module

        $ .ts are bundled and loaded in one fell swoop when a user visits our site

  * 18. How to implement Lazy loading in Angular?
        $ Divide our project into separate Modules
            ~ Use "loadChildren" to load Modules (loadChildren: in route collection array) - onDemand / onFly

  * 19. Define Services
        $ Helps to share common logic across Angular Projects

        $ Which means it's used when a common functionality needs to be provided to various modules

        $ It allows for greater seperation of concerns for our application and better modularity by allowing us to extract common functionality out of components

        $ Angular services are singleton objects that get instantiated only once during the lifetime of an application

        $ The main objective of a service is to organize and share business logic, models, or data and functions with different components of an Angular application

          ~ View - Component - Model
          ~ Multiple Modules

          ~ Services like, HTTP, Logging, Validations, Functionalities

  * 20. What is Dependency Injection?
        $ It's an application design pattern where rather than creating object instances from within the component, Angular injects it via the constructor

        $ Angular comes with its own dependency injection framework for resolving dependencies (services or objects that a class need to perform its function)

        $ We can have our services depend on other services throughout our application

        ~ var l:Logger = new Logger() ---~ constructor(public l:LLogger)

  * 21. How to implement Dependency Injection?
        $ Via NgModule Decorator/Metadata
          ~ @NgModule({ providers: [ {provide: Logger, useClass: HTTPLogger} ]})

          ~ Then ---~ constructor(public l:LLogger)

  * 22. What is the benefit of Dependency Injection?
        $ DI helps to decouple class dependencies, so that when we add our new dependencies we don't have to change everywhere

        ~ var l:Logger = new HTTPLogger() change it to,
        ~ var l:Logger = new AlertLogger()

        $ Change it one place in provider useClass

        ? Disadvantage: Instanciating the class with new keyword gives the tight coupling

          ~ Via, Dependency Injection Angular takes care of that work

  * 23. Differentiate between ng serve and ng build
        $ 'ng serve' builds inmemory(RAM) while 'ng build' on the other hard disk

        $ When we wanna go for production 'ng build' command is used
            ~ creates 'dist' folder with final compiled code

        $ When we wanna go for developement 'ng serve' command is used

  * 24. Explain the --prod parameter/flag in ng build
        $ 'ng build --prod' flag compresses our js file, removes comments, creates GUIDs of our js files and make our application ready for production

  * 24. Angular Lifecycle Hooks
        $ Angular application goes through an entire set of processes or has a lifecycle right from its initiation to the end of the application

        * ngOnChanges
          ~ When the value of a data bound property changes, then this method is called

        * ngOnInit
          ~ Whenever the initialization of the directive/component after Angular first displays the data-bound properties happens

        * ngDoCheck
          ~ It's for the detection and to act on changes that can't or won't detect on its own

        * ngAfterContentInit
          ~ It's called in response after Angular projects external content into the component's view

        * ngAfterContentChecked
          ~ It's called in response after Angular checks the content projected into the component

        * ngAfterViewInit
          ~ This is called in response after Angular initializes the component's view and child views

        * ngAfterViewChecked
          ~ This is called in response after Angular checks the component's view and child views

        * ngOnDestroy
          ~ This is the cleanup phase just before angular destroys the directive/component

  * 25. Difference Between constructor and ngOnInit
        $ Typescript class has a default method called constructor which is normally used for the initialization purpose

        $ Whereas ngOnInit method is specific to Angular, especially used to define Angular Bindings

        $ Even though constructor getting called first, it's preferred to move all of our Angular bindings to ngOnInit method

        $ In order to use ngOnInit, we need to implement 'OnInit' interface
          ~ export class App implements OnInit{}

  * 26. Purpose of Async Pipe?
        $ It subscribes to an observable or promise and returns the latest value it has emitted

        $ When a new value is emitted, the pipe marks the component to be checked for changes

  * 27. When to choose between inline/external template file?
        $ We can store our component's template in one of two places

        $ We can define it inline using 'template' property

        $ We can define the template in a separate HTML file and link to it in the component metadata using ~@Component decorator's templateUrl property

        $ The choice between inline/external is a matter of taste, circumstances, and organization policy

        $ But normally we use inline template for small portion of code and external file for bigger views.

        $ By default, the Angular CLI generates components with a template file (external)

  * 28. HostBinding and HostListener
      $ They are two decorators that can be really useful in custom directives

      @ HostBinding
        ~ Lets us set properties on the element or component that hosts the directive

      @ HostListener
        ~ Lets us listen for events on the host element or component
          $ @HostListner('window:resize')
            ? It will allow to call our resize function (on which HostListener decorator has been mount) on resize of window

  * 29. ElementRef
      $ It's a wrapper around a native element inside of a View. It's simply a class that wraps native DOM elements in the browsers and allows us to work with the DOM by providing the nativeElement object which exposes all the methods and properties of the native elements

  * 30. Select an element in a component template
      $ @ViewChild decorator from 'angular/core' in .ts file

      $ ViewChild decorator to access template reference variable inside the component

      $ Finally select the element in ngAfterViewInit method by accessing element's naviteElement property

  * 31. TemplateRef (vs) ViewContainerRef
      $ TemplateRef is a class and the way to reference the ng-template in the component or directive class

      $ Using the TemplateRef we can manipulate the template from component code

      ~ TemplateRef:
          ? It represents an embedded template that can be used to instantiate embedded

        ~ ViewContainerRef:
          ? It represents a container where one or more views can be attached

  * 32. NG Content
      $ <ng-content></ng-content>
        ~ It's tag as a placeholder for that dynamic content, then when the template is parsed Angular will replace that placeholder tag with your content

  * 33. ViewChild (vs) ContentChild?
      $ It is used to access Child Component in the Parent Component

      $ Any directive, component, and element which is part of component template is accessed as ViewChild

      $ Whereas any element or component which is projected inside <ng-content~ is accessed as ContentChild

  * 34. NgModule Types (5 types)
      $ Features, Routing, Service, Widget, Shared Module

  * 35. Map and Pipe
      $ Map is an operator that transforms data by applying a function

      $ Pipe composes operators (like map, filter, etc)


  * 36. ngTemplateOutletContext
      $ Object | null
        ~ A context object to attach to the EmbeddedViewRef

        ? This should be an object, the object's keys will be available for binding by the local template let declarations

  * 37. ng-template
      $ It is an Angular element used to render HTML templates

      $ We use ng-template with angular *ngIf directive to display else template

  * 38. ng-container
      $ The Angular <ng-container~ is a grouping element that doesn't interfere with styles or layout because Angular doesn't put it in the DOM

      $ We should use <ng-container~ when we just want to apply multiple structural directives without introducing any extra element in our DOM

  * 39. View Encapsulation
      $ View encapsulation defines whether the template and styles defined within the component can affect the whole application or vice versa

      $ Angular provides three encapsulation strategies: Emulated (default) - styles from main HTML propagate to the component
*/
