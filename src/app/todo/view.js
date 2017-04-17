;

window.ToDo.views = window.ToDo.views || {};

window.ToDo.views.ToDo = function() {
	function init() {
		var $todosMain = $('#todos-main');

		/*
		var todos = [
			new ToDo.models.ToDo('Take out the trash', false),
			new ToDo.models.ToDo('do the dishes', false)
		]; */

		var viewModel = new ToDo.viewModels.ToDo([]);
		ko.applyBindings(viewModel, $todosMain[0]);
	}

	return {
		init: init
	};

}();