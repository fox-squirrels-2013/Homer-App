function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    try {
        $.__views.label.addEventListener("click", getDiscounts.doClick);
    } catch (e) {
        __defers["$.__views.label!click!getDiscounts.doClick"] = true;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var url = "http://shrouded-inlet-6169.herokuapp.com/example.json";
    var json;
    console.log("3rd thing");
    getDiscounts = {
        doClick: function() {
            var xhr = Ti.Network.createHTTPClient({
                onload: function() {
                    json = JSON.parse(this.responseText);
                    $.label.text = json;
                }
            });
            console.log("4th thing");
            xhr.open("GET", url);
            xhr.send();
        }
    };
    console.log("2nd thing");
    $.index.open();
    console.log("1st");
    __defers["$.__views.label!click!getDiscounts.doClick"] && $.__views.label.addEventListener("click", getDiscounts.doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;