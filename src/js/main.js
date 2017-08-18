// require("./lib/social");
// require("./lib/ads");  v
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var $ = require("./lib/qsa");
var closest = require("./lib/closest");
var dot = require("./lib/dot");
var detailsTemplate = dot.compile(require("./detailsTemplate.html"));
var infractionTemplate = dot.compile(require("./infractionTemplate.html"));

var outer = $.one(".outer");

var onChange = function(name) {
  outer.innerHTML = infractionTemplate({name, traffic:trafficData, columns:trafficColumns});
};

$.one(".nav").addEventListener("change", () => {
  var selectViolation = $.one(`input[name="infraction"]:checked`);
  onChange(selectViolation.id);
});

onChange("total");

outer.addEventListener("click", function(e) {
  $(".show-tooltip").forEach(el => el.classList.remove("show-tooltip"));
  var row = closest(e.target, ".row");
  row.classList.add("show-tooltip");
});
