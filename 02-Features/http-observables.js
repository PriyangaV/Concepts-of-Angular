/*
  @ HTTP and Observables
      # HTTP Mechanism

        Browser
          |
        EmpList
          |
          |                                                             Server
          |   |----------------| --------> Get  |------| ---- Request |-------|
        ----> |   EmpService   |                | HTTP |              |   DB  |
          |   |----------------| <-- Observable |------| <-- Response |-------|
          |
          |
        EmpDetail


      # Observables

          Source
            | Convert

        NewsPaper Company
            | Subscribe (H1, H2)

      |----------|----------|
    House1    House2     HouseN


      |------- Database
      GET         |
      ^           | DB - Observable(HTTP Response) to Service, [] conversion happens here
      |           |
      ----- EmployeeService
                | Subscribe (EmpList, EmpDetails)

      |---------|-----------|
    EmpList   EmpDetails   AppComp

    ? A sequence of items that arrive asynchronously over time

    ? HTTP call - single item

    ? Single item - HTTP response


  @ HTTP, Observables and RxJS
    * HTTP get request from EmpService
    * Receive the observable and cast it into an employee array
    * Subscribe to the observable from EmpList and EmpDetail
    * Assign the employee array to a local variable

    # RxJS
      $ Reactive Extensions for Javascipt
      $ External Library to work with Observables
*/
