import { LightningElement } from "lwc";

export default class App extends LightningElement {
    //criar vatiáveis, atributos.
    nome = "Vagner Avalo";
    telefone = "(88) 9988-7788";
    cpf = "000.111.222-33";
    idade = 30;
    email = "f@f.com";
    instagram = "https://www.google.com";
    linkedin = "https://www.xbox.com";

    visible = true;

    /**
     * uso de variávei da classe dentro de métodos.
     * this.variável
     * 
     * trocar valor de visible -> false
     */
    trocarDiv(){
        //this.visible = !this.visible;
        if(this.visible == true){
            this.visible = false;
        }
        else   {
            this.visible = true;
        }   
    }

    alteraValores(){
        this.nome = "Thiarhes Gonçalves";
        this.telefone = "8899887788";
        this.cpf = "888.999.111-22";
        this.idade = 32;
        this.email = "prandinao@gmail.com";
    }

    /**
     * crie um método chamado alterarValores que mudem 
     * os valores de nome, telefone, cpf, idade, email.
     * 
     * 
     * No html criar um novo botão chamado altera valor, 
     * que ative a função
     */

}
