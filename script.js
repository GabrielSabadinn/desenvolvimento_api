function Ler(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){  // onreadystatechange = para cada mudança de estado 

        if(this.readyState == 1){    // quando a conexão estabelecida com o servidor = 1 
            document.getElementById("resposta").innerHTML = "Solicitação Enviada";
        }
        if(this.readyState == 4){

        if(this.status == 200) {     // quando a req tiver pronto = 4 e conexão resultar em sucesso = 200, executa isso:
            document.getElementById("resposta").innerHTML = this.responseText;  // response text = Conteúdo do arquivo info.txt
        }   
        if (this.status == 404){
            document.getElementById("resposta").innerHTML = "Página não encontrada."
        }

        } 
        
    };
    request.open("GET","info.txt",true);
    request.send();
}
function gerar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.status == 200) {     // quando a req tiver pronto = 4 e conexão resultar em sucesso = 200, executa isso:
            document.getElementById("numeros").innerHTML = this.responseText;  // response text = Conteúdo do arquivo info.txt
        }   
        if (this.status == 404){
            document.getElementById("numeros").innerHTML = "Página não encontrada."
        }

        };

    var url = "numeros.php?numero=" = $("#txtnumero").val();
    xhttp.open("GET", url, true);
    xhttp.send();
    }