
package views.html

import _root_.play.twirl.api.TwirlFeatureImports._
import _root_.play.twirl.api.TwirlHelperImports._
import _root_.play.twirl.api.Html
import _root_.play.twirl.api.JavaScript
import _root_.play.twirl.api.Txt
import _root_.play.twirl.api.Xml
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

object index extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template0[play.twirl.api.HtmlFormat.Appendable] {

  /*
* This template is called from the `index` template. This template
* handles the rendering of the page header and body tags. It takes
* two arguments, a `String` for the title of the page and an `Html`
* object to insert into the body of the page.
*/
  def apply/*7.2*/():play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*8.1*/("""


"""),format.raw/*11.1*/("""<!DOCTYPE html>
<html>
<head>
  <script>
      // Check that service workers are registered
      if ('serviceWorker' in navigator) """),format.raw/*16.41*/("""{"""),format.raw/*16.42*/("""
        """),format.raw/*17.9*/("""// Use the window load event to keep the page load performant
        window.addEventListener('load', () => """),format.raw/*18.47*/("""{"""),format.raw/*18.48*/("""
          """),format.raw/*19.11*/("""navigator.serviceWorker.register('/service-worker.js');
        """),format.raw/*20.9*/("""}"""),format.raw/*20.10*/(""");
      """),format.raw/*21.7*/("""}"""),format.raw/*21.8*/("""
    """),format.raw/*22.5*/("""</script>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
  <title>Weather.</title>
</head>
<body>
<div id="root"></div>
<script type="text/javascript" src="main.bundle.js"></script>
</body>
</html>
"""))
      }
    }
  }

  def render(): play.twirl.api.HtmlFormat.Appendable = apply()

  def f:(() => play.twirl.api.HtmlFormat.Appendable) = () => apply()

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: Thu Apr 19 19:10:17 CEST 2018
                  SOURCE: /Users/ryuk/Documents/webapps/weather-web/app/views/index.scala.html
                  HASH: 9274d59f93d5ecf23d1af5edcae8cccf332b8e01
                  MATRIX: 971->255|1067->258|1097->261|1257->393|1286->394|1322->403|1458->511|1487->512|1526->523|1617->587|1646->588|1682->597|1710->598|1742->603
                  LINES: 26->7|31->8|34->11|39->16|39->16|40->17|41->18|41->18|42->19|43->20|43->20|44->21|44->21|45->22
                  -- GENERATED --
              */
          