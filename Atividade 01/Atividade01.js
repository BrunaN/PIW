var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta(saldo, numero) {
        this.saldo = saldo;
        this.numero = numero;
    }
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("Deposito realizado com sucesso. Seu novo saldo é de: " + this.saldo);
    };
    ;
    return Conta;
}());
var Conta_corrente = /** @class */ (function (_super) {
    __extends(Conta_corrente, _super);
    function Conta_corrente(saldo, numero) {
        return _super.call(this, saldo, numero) || this;
    }
    Conta_corrente.prototype.sacar = function (saque) {
        this.saldo = this.saldo - saque - 2;
        console.log("Saque realizado com sucesso. Seu novo saldo é de: " + this.saldo);
    };
    Conta_corrente.prototype.valorizar = function () {
        this.saldo;
    };
    ;
    return Conta_corrente;
}(Conta));
var Conta_poupanca = /** @class */ (function (_super) {
    __extends(Conta_poupanca, _super);
    function Conta_poupanca(saldo, numero) {
        var _this = _super.call(this, saldo, numero) || this;
        _this.rendimento_atual = 0;
        return _this;
    }
    Conta_poupanca.prototype.sacar = function (saque) {
        this.saldo = this.saldo - (saque * 0.02) - saque;
        console.log("Saque de realizado com sucesso. Seu novo saldo é de: " + this.saldo);
    };
    Conta_poupanca.prototype.calcular_rendimento = function () {
        this.rendimento_atual = this.rendimento_atual + (this.saldo * 0.02);
    };
    ;
    Conta_poupanca.prototype.valorizar = function () {
        this.calcular_rendimento();
        this.saldo = this.saldo + (this.saldo * 0.02);
    };
    Conta_poupanca.prototype.gerar_relatorio = function () {
        console.log("Conta Poupança, Número da conta: " + this.numero + ", Saldo atual: " + this.saldo + ", Rendimento: " + this.rendimento_atual);
    };
    return Conta_poupanca;
}(Conta));
var Conta_investimento = /** @class */ (function (_super) {
    __extends(Conta_investimento, _super);
    function Conta_investimento(saldo, numero) {
        var _this = _super.call(this, saldo, numero) || this;
        _this.rendimento_atual = 0;
        return _this;
    }
    Conta_investimento.prototype.sacar = function (saque) {
        this.saldo = this.saldo - (saque * 0.05) - saque - 10;
        console.log("Saque realizado com sucesso. Seu novo saldo é de: " + this.saldo);
    };
    Conta_investimento.prototype.calcular_rendimento = function () {
        this.rendimento_atual = this.rendimento_atual + (this.saldo * 0.0051);
    };
    ;
    Conta_investimento.prototype.valorizar = function () {
        this.calcular_rendimento();
        this.saldo = this.saldo + this.saldo * 0.0051;
    };
    Conta_investimento.prototype.gerar_relatorio = function () {
        console.log("Conta Investimento, Número da conta: " + this.numero + ", Saldo atual: " + this.saldo + ", Rendimento: " + this.rendimento_atual);
    };
    return Conta_investimento;
}(Conta));
var corrente = new Conta_corrente(100, 9999);
corrente.sacar(50);
corrente.depositar(70);
var poupanca = new Conta_poupanca(10, 10000);
poupanca.valorizar();
poupanca.gerar_relatorio();
poupanca.valorizar();
poupanca.gerar_relatorio();
poupanca.sacar(5);
poupanca.valorizar();
poupanca.gerar_relatorio();
poupanca.depositar(100);
poupanca.gerar_relatorio();
var investimento = new Conta_investimento(500, 10011);
investimento.sacar(20);
investimento.valorizar();
investimento.gerar_relatorio();
investimento.depositar(500);
