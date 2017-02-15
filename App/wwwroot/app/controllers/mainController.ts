export class MainController implements ng.IController{
    static $inject = ['$scope', '$state'];

    constructor(private $scope, private $state: ng.ui.IStateService){
        
    }

    teste(){
        // alert('teste');
        this.$state.go("clientes.edit", {id: 1});
    }
} 