// TODO test insertion order

var Map = require("../map");
var describeDict = require("./dict");
var describeMap = require("./map");
var describeMapChanges = require("./listen/map-changes");

describe("Map", function () {
    describeDict(Map);
    describeMap(Map);
    describeMapChanges(Map);
});

