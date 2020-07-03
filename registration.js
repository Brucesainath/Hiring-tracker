

$(document).ready(function(){

  $('#wrapper').hide();
  $("#add").click(function(){
  $('#wrapper').slideDown(500);
  })
 
 
  
  


    $('#register').click(function(){
        var title = $('#title').val()
        var firstname = $('#firstname').val()   
        var lastname = $('#lastname').val()
        var work_profile = $('#work_profile').val()
        var emp_req = $("#emp_required").val()
        var mob = $("#mob_no").val()
        var email = $('#email').val()
        
        $('#datatable').fadeIn(500);
        
        
        
        $('#wrapper').slideUp(500);
       
        $('#datatable').append(`
        
        <tr>
        
        <th id="header_title"> ${title}</th>
        <th> ${firstname} ${lastname}</th>
        <th>${work_profile}</th>
        <th>${emp_req}</th>
        <th>${mob}</th>
        <th>${email}</th> 
    </tr>`
      
      
    
        );

        

    });
    
    // $('select').focus(function(){
    //     $(this).css("box-shadow"," 0px 5px 100px rgb(78,74,194)" )
    //     $(this).css("transition" ,".5s")
       
    // });
    // $('select').blur(function(){
    //     $(this).css("box-shadow","0px 0px 0px")
       
    // });
    
    // $('input').focus(function(){
    //     $(this).css("box-shadow"," 0px 5px 100px rgb(78,74,194)" )
    //     $(this).css("transition-duration",(".5s") )
       
    // });
    // $('input').blur(function(){
    //     $(this).css("box-shadow" , "none")
    //     $(this).css("transition",".5s")
    // });
       
    
  });