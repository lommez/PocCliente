export class ConvertToNumber implements ng.IDirective {

    constructor() {
        var directive: ng.IDirective = {};

        directive.link = (scope: ng.IScope, instanceElement: JQuery, instanceAttributes: ng.IAttributes, controller: ng.INgModelController, transclude: ng.ITranscludeFunction) => {
            controller.$parsers.push(function (val) {
                return parseInt(val, 10);
            });

            controller.$formatters.push(function (val) {
                return '' + val;
            });
        }

        directive.require = 'ngModel';
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new ConvertToNumber();
        return directive;
    }
}