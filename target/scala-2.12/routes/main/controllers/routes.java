// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/ryuk/Documents/webapps/my-portfolio/conf/routes
// @DATE:Sun May 06 17:09:19 CEST 2018

package controllers;

import router.RoutesPrefix;

public class routes {
  
  public static final controllers.ReverseHomeController HomeController = new controllers.ReverseHomeController(RoutesPrefix.byNamePrefix());

  public static class javascript {
    
    public static final controllers.javascript.ReverseHomeController HomeController = new controllers.javascript.ReverseHomeController(RoutesPrefix.byNamePrefix());
  }

}
