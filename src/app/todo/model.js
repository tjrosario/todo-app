;
window.ToDo.models = window.ToDo.models || {};

window.ToDo.models.ToDo = function(title, completed) {
	this.title = ko.observable(title);
	this.completed = ko.observable(completed);
	this.editing = ko.observable(false);
};