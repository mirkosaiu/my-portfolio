// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/ryuk/Documents/webapps/my-portfolio/conf/routes
// @DATE:Sun May 06 17:09:19 CEST 2018


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
