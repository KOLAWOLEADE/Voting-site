$(document).ready(function(){
  $("#Reg").submit(function(event) {

        const PassportInput = $("#Passport").val();
        const NameInput = $("#Name").val();
        const AddressInput = $("#Address").val();
        const AgeInput= $("#Age").val();
        const StatusInput = $("#Status").val();
        const StateInput = $("#State").val();
       



        $(".Passport").text(PassportInput);
        $(".Name").text(NameInput);
        $(".Address").text(AddressInput);
        $(".Age").text(AgeInput);
        $(".Status").text(StatusInput);
        $(".State").text(StateInput);
        
    
      $("#identity").show();
      event.preventDefault();


      let identity = ["PassportInput", "NameInput", "AddressInput","AgeInput", "StatuaInput", "StateInput"]

      alert(identity)
      console.log(identity)


      if (Age => 18){
        window.location.href="vote.html"
      }
      

      else{window.location.href="electoral-terms.html"}

      
    });
})