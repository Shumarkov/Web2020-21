import "bootstrap";
const axios = require("axios");
import $ from "jquery";
import { setupCache } from "axios-cache-adapter";
var _ = require("lodash");
var Mustache = require("mustache");

const cache = setupCache({
  maxAge: 15 * 60 * 10000,
});
const api = axios.create({
  adapter: cache.adapter,
});

$(async function () {
  var restaurants = await getRestaurants();
  var rpart = restaurants;

  var admAreas = {};
  admAreas.data = _.uniq(_.map(restaurants, (item) => item.admArea));

  $("#admArea").html(
    Mustache.render(
      "{{#data}} <option value='{{.}}'>{{.}}</option> {{/data}}",
      admAreas
    )
  );
  var districts = {};
  districts.data = _.uniq(_.map(restaurants, (item) => item.district));
  $("#district").html(
    Mustache.render(
      "{{#data}} <option value='{{.}}'>{{.}}</option> {{/data}}",
      districts
    )
  );
  var types = {};
  types.data = _.uniq(_.map(restaurants, (item) => item.typeObject));
  $("#typeObject").html(
    Mustache.render(
      "{{#data}} <option value='{{.}}'>{{.}}</option> {{/data}}",
      types
    )
  );

  rpart = _.sortBy(rpart, [
    function (o) {
      return o.rate;
    },
  ]);
  rpart = _.reverse(rpart);
  var sortedRaiting = rpart;

  rpart = _.take(rpart, 20);

  fetchTemplate(rpart, "restaurant", ".restaurants");
  $(".loading").fadeOut();
  $("html, body").css({
    overflow: "auto",
  });

  $("body").on("click", ".selectRestaurant", function () {
    var id = $(this).data("id");
    var result = _.find(restaurants, function (o) {
      return o.id == id;
    });
    console.log(result);
  });

  await loadMenu(sortedRaiting);
});

async function getRestaurants() {
  const response = await api.get(
    "http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1"
  );
  return response.data;
}

async function loadMenu(sortedRaiting) {
  console.log(sortedRaiting[0]);
  var firstRest = sortedRaiting[0];
  const response = await api.get(BASE_URL + "js/sets.json");
  var sets = response.data;
  var sts = [];
  var i = 0;
  for (let set of sets) {
    sts[i] = set;
    sts[i]["price"] = firstRest["set_" + (i + 1)];
    i++;
  }
  console.log(sts);
  await fetchTemplate(sts, "menuitem", ".menuitemslist");

  //   for (let index = 1; index <= response.data.length; index++) {
  //     $("body .set_" + index).html(firstRest["set_" + index]);
  //     console.log(firstRest["set_" + index]);
  //     //
  //   }
}

async function fetchTemplate(data, template, target) {
  fetch(BASE_URL + "js/templates/" + template + ".mustache")
    .then((response) => response.text())
    .then((template) => {
      var rendered = Mustache.render(template, { data });
      $(target).html(rendered);
    });
}
