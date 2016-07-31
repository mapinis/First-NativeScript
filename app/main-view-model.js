var Observable = require("data/observable").Observable;
var view = require("ui/core/view");

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You clicked something 42 times! What a 1337 Hacker!";
    } else {
        counter += Math.floor(Math.random() * 20)
        return counter + " taps left";
    }
}

function pageLoaded(args) {
    var page = args.object;
    var tabView = view.getViewByID(page, "buttonTabView");
    tabView.selectedIndex = 1;
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.secondCounter = 0;
    viewModel.message = getMessage(viewModel.counter);
    viewModel.secondMessage = "# of times that you have tapped the button: " + viewModel.secondCounter;

    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }

    viewModel.onSecondButtonTap = function() {
        this.secondCounter++;
        this.set("secondMessage", "# of times that you have tapped the button:" + this.secondCounter);
    }

    return viewModel;
}

exports.createViewModel = createViewModel;