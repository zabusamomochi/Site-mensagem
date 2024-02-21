function gravar(){
    let titulo = document.getElementById("titulo").value;

    let aluno = document.getElementById("aluno").value;

    let msg = document.getElementById("msg").value;

    alert(titulo + "\n" + msg + "\n" + aluno);

    let textoMensagem = titulo + "\n" + msg + "\n" + aluno ;

    document.getElementById("assunto").innerText = titulo;
    document.getElementById("estudante").innerText = aluno;
    document.getElementById("texto1").innerText = msg;

    document.getElementById("titulo").value = "";
    document.getElementById("aluno").value = "";
    document.getElementById("msg").value = "";





    

}

function Excluir(){
    alert("Dados deletados");
    

    document.getElementById("assunto").innerText = "";
    document.getElementById("estudante").innerText= "";
    document.getElementById("texto1").innerText= "";

   

    
}