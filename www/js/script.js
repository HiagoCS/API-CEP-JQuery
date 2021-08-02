$(document).on("click", "#btn", function() {
  //O ajax é uma função q vai fzer a pesquisa
    $.ajax({
      type:"get", //metodo de envio
      url:"https://viacep.com.br/ws/"+$("#cep").val()+"/json/", //destino de enviou
      success: function(data){
        var content = "<p><strong>Logradouro:</strong>"+data.logradouro+"</p>";
        content += "<p><strong>Bairro:</strong>"+data.bairro+"</p>";
        content += "<p><strong>Localidade:</strong>"+data.localidade+"</p>";
        content += "<p><strong>Estado:</strong>"+data.uf+"</p>";
        $("#data").html(content);
      },
      error: function(){
        alert("Deu erro!!!");
      }
    });
});