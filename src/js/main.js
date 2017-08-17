// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var $ = require("./lib/qsa");
var closest = require("./lib/closest");
var dot = require("./lib/dot");
var detailsTemplate = dot.compile(require("./detailsTemplate.html"));
var infractionTemplate = dot.compile(require("./infractionTemplate.html"));

var selectViolation = $.one("select.infraction");
var outer = $.one(".outer");

var onChange = function(name) {
  outer.innerHTML = infractionTemplate({name, traffic:trafficData, columns:trafficColumns});
};

selectViolation.addEventListener("change", () => onChange(selectViolation.value));

onChange("total");

outer.addEventListener("click", function(e) {
  var row = closest(e.target, ".row");
  row.classList.toggle("show-tooltip");
});
