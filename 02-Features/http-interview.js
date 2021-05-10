/*
  @ Angular HTTP

    * HttpClient?
      $ Most of the Front-end applications comminicate with backend services over Http Protocol using either
        > XMLHttpRequest interface
        or the
        > fetch() API

      $ Angular provides a simplified client Http API known as HttpClient which is based on top of
        > XMLHttpRequest interface

      $ This client is available from
        > @angular/common/http package

    * Benefits of HttpClient?
      $ Contails testability features
        ? test script to mock the http request
      $ Provides typed request and response objects which can be natively used in our application
      $ Intercept request and response and process the data accordingly
      $ Supports Observable APIs
      $ Supports streamlined error handling

      > If we don't use this module, we'll end up writing lot of code by ourselves, that's why we prefer using this native package

    * How to use HttpClient?
        $ import HttpClient into root module

            ``` import { HttpClientModule } from '@angular/common/http'

            @NgModule({
              imports: [
                HttpClientModule
              ]
            }) ```

        $ inject HttpClient into the appliation
          > Mostly we'll be using it inside service where we write all our resuable common code for making request and responses

            ``` import { Injectable } from '@angular/core';
            import { HttpClient } from '@angular/common/http'

            @Injectable()
            export class Service {
              constructor(private http: HttpClient) {}

              getUrl() {
                return this.http.get(url)
              }
            } ```

        $ Create a component for subscribing service
            > In userComponent.ts,
              @ inject service and invoke the service method
            ``` fetchUrlData() {
              this.service.getUrl()
              .subscribe( (data: user) => this.user = {
                id: data['userId']
                name: data['name']
                city: data['city']
              })
            } ```


    * How to read full response?
        $ The response body may not return full response data

        $ Because sometimes servers also return special headers or status code whch are important for the application workflow

        $ In order to get full response, we should use observe option from HttpClient

        ``` getResponse(): Observable<HttpResponse<User>> {
          return this.http.get<User>(
            this.userUrl, {observe: 'response'}
          )
        } ```

    * Error Handling
        $ If the request fails on the server, or failed to reach the server due to network issues,

        $ Then HttpClient will return an error object instead of a successful response

        $ In that case, we need to handle in the component by passing error object as a second callback to subscribe() method

        ``` fetchUser() {
          this.Service.getUrl()
          .subscribe(
            (data: User) => this.userProfile = {... data}. // success
            error => this.error = error // error
          )
        } ```
*/
