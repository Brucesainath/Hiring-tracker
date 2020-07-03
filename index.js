$(document).ready(function(){
   $("#wrapper").hide();
   $("#wrapper2").hide()

    $("#newrequest").click(function(){
        $("#wrapper").slideDown(500);
        
    
    });


        
    $("#register").click(function(){
        
        var I1 = $("#project_name").val();
        var  I2 = $("#project_manager").val();
        var  I3 = $("#resources").val();
        var  I4 = $("#designation").val();
        var  I5 = $("#status").val();
        var  I6 = $("#min_experience").val();
        var  I7 = $("#min_experience").val();
        var I8 = $("#max_experience").val();
        var I9 = $("#max_experience").val();
        var  I10 = $("#type").val();
        var I11 = $("#skills").val();
        var  I12 = $("#duration").val();
        var  I13 = $("#duration").val();
        var  I14 = $("#conversion").val();
        var  I15 = $("#min_salary").val();
        var I16 = $("#max_salary").val();
        var  I17 = $("#POC").val();
        var  I18 = $("#HRstatus").val();
        var  I19 = $("#HrComments").val();
        
        $("#wrapper").slideUp(500)
      
        $("#datatable").append(` 
       
       <tr>
        <td></td> 
        <td>${I1}</td>
        <td>${I2}</td>
        <td>${I3}</td>
        <td>${I14}</td>
        <td>${I5}</td>
        <td>${I17}</td>
        <td>${I18}</td>
        <td>${I19}</td>
        <td></td>
        </tr>
        
        `);
        console.log(I4);
        console.log(I6);
        console.log(I7);
        console.log(I8);
        console.log(I9);
        console.log(I10);
        console.log(I11);
        console.log(I12);
        console.log(I13);
        console.log(I14);
        console.log(I15);
        console.log(I16);
        console.log(I17);
        
    });
    });