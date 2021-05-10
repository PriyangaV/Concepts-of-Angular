/*
  @ Routing in Angular
    * Routing and Navigation
        ^ Departments
          ? localhost:4200/departments
            $ DepartmentList

        ^ Employees
          ? localhost:4200/employees
            $ EmployeeList

        ^ Non-Configured Routes - Invalid urls
          ? Wildcard Routes

        ^ Route Parameters
          # DepartmentList  ----> id -----> DepartmentDetail
          * 1. Angular           -----> You selected department with id = 1 (BACK Button)
          * 2. Node              -----> You selected department with id = 2
          * 3. MongoDB           -----> You selected department with id = 3
          * 4. JS                -----> You selected department with id = 4
          * 5. Bootstrap         -----> You selected department with id = 5

            ? ParamMap
              $ View didn't update - One component to another component and back to same component, snapshot approach will not work

        ^ ParamMap Observable
          this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            let id = parseInt(params.get('id'));
            this.departmentId = id;
          })

        ^ Optional Parameters

        ^ Relative Navigation

        ^ Child Routes

    ~ Routing App
      $ 1. Generating a project with routing option
      ? 2. Generating departmentList and employeeList components
      $ 3. Configuring the routes
      ? 4. Adding the buttons and use directives to navigate

      * index.html - base href
      * app-routing.module - Routes array - {path, component}
        $ forRoot(arguments[routes])
      * export routingComponents
      * import app.module, declarations, imports
      * .html - routerLink, routerLinkActive
*/
