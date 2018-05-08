// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/ryuk/Documents/webapps/my-portfolio/conf/routes
// @DATE:Sun May 06 17:09:19 CEST 2018

import play.api.mvc.Call


import _root_.controllers.Assets.Asset

// @LINE:8
package controllers {

  // @LINE:8
  class ReverseHomeController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:9
    def assetOrDefault(file:String): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + implicitly[play.api.mvc.PathBindable[String]].unbind("file", file))
    }
  
    // @LINE:8
    def index(): Call = {
      
      Call("GET", _prefix)
    }
  
  }


}
