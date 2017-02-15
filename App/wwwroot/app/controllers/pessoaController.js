angular.module("pessoaApp")
    .controller("pessoaCtrl", function ($scope, $location, $routeParams) {

        // funcoes auxiliares
        $scope.findWithAttr = function (array, attr, value) {
            for (var i = 0; i < array.length; i += 1) {
                if (array[i][attr] === value) {
                    return array[i];
                }
            }
        };

        $scope.getMaxIdValue = function () {
            var maxId = 0;
            for (var i = 0; i < $scope.pessoas.length; i++) {
                if ($scope.pessoas[i].id > maxId) {
                    maxId = $scope.pessoas[i].id;
                }
            }

            return maxId;
        };

        $scope.alerta = function (mensagem) {
            alert(mensagem);
        };

        // titulos para as views
        $scope.tituloPessoaList = "Lista de Pessoas";
        $scope.tituloPessoaEdit = "Alterar";
        $scope.tituloPessoaCreate = "Nova Pessoa";
        $scope.tituloPessoaDetails = "Detalhes";
        $scope.tituloPessoaDelete = "Excluir";

        // rotas
        $scope.alterarPessoaPath = function (id) {
            $location.path("/alterar/" + id);
        };

        $scope.excluirPessoaPath = function (id) {
            $location.path("/excluir/" + id);
        };

        // eventos
        $scope.$on('$viewContentLoading', function (event, viewConfig) {
            //console.log('content loading: ', event, viewConfig)
        });

        $scope.$on('$viewContentLoaded', function (event, viewConfig) {
            $scope.pessoaCarregada = false;
            $scope.pessoa = null;
            $scope.exibirValidacao = false;
            $scope.getPessoaByRouteParam();
            //console.log('content loaded: ', event);
        });

        $scope.tipoPessoa = [
            { descricao: "Física", valor: "fisica" },
            { descricao: "Jurídica", valor: "juridica" }
        ];

        $scope.pessoas = [
            { id: "1", nome: "Stone", tipoPessoa: "juridica", documento: "12345678901234", email: "stone@stone.com.br" },
            { id: "2", nome: "Marcos", tipoPessoa: "fisica", documento: "12345678901", email: "lommez@hotmail.com" },
            { id: "3", nome: "Adriana", tipoPessoa: "fisica", documento: "12300098767", email: "adriana@hotmail.com" }
        ];

        $scope.inicializarPessoaForm = function () {
            if (!angular.isDefined($scope.pessoa) || $scope.pessoa == null) {
                $scope.pessoa = {};
                $scope.pessoa.tipoPessoa = "fisica";
            }
        };

        $scope.getPessoaByRouteParam = function () {
            var id = $routeParams.id;

            if (id) {
                $scope.pessoa = $scope.getPessoaById(id);

                if ($scope.pessoa) {
                    if ($scope.pessoa.tipoPessoa === "fisica")
                        $scope.pessoa.cpf = $scope.pessoa.documento;
                    else
                        $scope.pessoa.cnpj = $scope.pessoa.documento;

                    $scope.pessoaCarregada = true;
                }
            }
        };

        $scope.getPessoaById = function (id) {
            for (var i = 0; i < $scope.pessoas.length; i++) {
                if ($scope.pessoas[i].id == id) {
                    return $scope.pessoas[i];
                }
            }
        };

        $scope.getErrorMessage = function (property) {
            switch (property.$name) {
                case "nome":
                    if (angular.isDefined(property.$error)) {
                        if (property.$error.required)
                            return "Nome é obrigatório";
                    }
                    break;

                case "email":
                    if (angular.isDefined(property.$error)) {
                        if (property.$error.required)
                            return "E-mail é obrigatório";

                        else if (angular.isDefined(property.$error.email))
                            return "E-mail é inválido";
                    }
                    break;

                case "cpf":
                    if (angular.isDefined(property.$error)) {
                        if (property.$error.required)
                            return "Cpf é obrigatório";
                        else if ((property.$error.minlength) || (property.$error.maxlength)) {
                            return "Tamanho inválido";
                        }
                    }
                    break;

                case "cnpj":
                    if (angular.isDefined(property.$error)) {
                        if (property.$error.required)
                            return "Cnpj é obrigatório";
                        else if ((property.$error.minlength) || (property.$error.maxlength)) {
                            return "Tamanho inválido";
                        }
                    }
                    break;

                case "tipoPessoa":
                    if (angular.isDefined(property.$error)) {
                        if (property.$error.required)
                            return "Tipo de pessoa é obrigatório";
                    }
                    break;
            }
        };

        $scope.salvarPessoa = function (form, newPessoa) {
            if (form.$valid) {
                if ($scope.pessoaCarregada) {

                    $scope.pessoa.documento = "";

                    if (newPessoa.tipoPessoa === "fisica") {
                        $scope.pessoa.documento = newPessoa.cpf;
                        $scope.pessoa.cnpj = "";
                    } else {
                        $scope.pessoa.documento = newPessoa.cnpj;
                        $scope.pessoa.cpf = "";
                    }
                } else {
                    $scope.pessoas.push({
                        id: $scope.getMaxIdValue() + 1,
                        nome: newPessoa.nome,
                        tipoPessoa: newPessoa.tipoPessoa,
                        documento: newPessoa.tipoPessoa === "fisica" ? newPessoa.cpf : newPessoa.cnpj,
                        email: newPessoa.email
                    });
                }

                $scope.pessoaForm = null;
                $scope.pessoa = null;

                $location.path("/");
            } else {
                $scope.exibirValidacao = true;
            }
        };

        $scope.excluirPessoa = function () {
            var index = $scope.pessoas.indexOf($scope.pessoa);
            if (index >= 0) {
                $scope.pessoas.splice(index, 1);
            }

            $scope.pessoa = null;
            $location.path("/");
        };
    });