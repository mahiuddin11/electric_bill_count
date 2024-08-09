
     // Fast house Unit count 
      var punit = document.getElementById("prasentUnit").value;
      var punit = parseFloat(punit);
      console.log("Prasent Unit :",punit);
    
      var oldunit = document.getElementById("oldUnit").value;
      var oldunit = parseFloat(oldunit);
      console.log("old Unit :",oldunit);

     // FAST USING UNIT COUNT 
      var count = punit - oldunit;
      var fast_house_using_unit = document.getElementById("using_unit").innerText = count;
    
     // SECEOUND house Unit count 
      var punit2 = document.getElementById("prasentUnit2").value;
      var punit2 = parseFloat(punit2);
      console.log("Prasent Unit :",punit2);
    
      var oldunit2 = document.getElementById("oldUnit2").value;
      var oldunit2 = parseFloat(oldunit2);
      console.log("old Unit :",oldunit2);

     //SECEOUND  USING UNIT COUNT 
      var count2 = punit2 - oldunit2;
      var secound_house_using_unit = document.getElementById("using_unit2").innerText = count2;

      // 1st %% 2nd house total unit 
      var total_unit = count + count2;
       var total_house_using_unit = document.getElementById("total_unit").innerText = total_unit ;

       // par unit price count 

       var reAmount = document.getElementById("reAmount").value;
       var reAmount = parseFloat(reAmount);
       console.log("total recharge amount:",reAmount);

       var parUnit =  reAmount / total_unit;
       console.log("Par unit price:",parUnit);
       var par_unit_price = document.getElementById("unit_price").innerText = parUnit ;

       //blance count 
       var fastHouseBlance = count * parUnit;
       var fastHouseBlance = Math.round(fastHouseBlance);
       document.getElementById("fastBill").innerText = fastHouseBlance + " tk" ;

       var secoundHouseBlance = count2 * parUnit; //count2 secound house unit 
       var secoundHouseBlance = Math.round(secoundHouseBlance);
       document.getElementById("secondBill").innerText = secoundHouseBlance + " tk" ;


   