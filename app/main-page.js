var createViewModel = require("./main-view-model").createViewModel;
var view = require("ui/core/view");

var tabView = null;

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}

function pageLoaded(args) {
    var page = args.object;
    tabView = view.getViewById(page, "buttonTabView");
    tabView.selectedIndex = 0;
}

exports.onNavigatingTo = onNavigatingTo;
exports.pageLoaded = pageLoaded;