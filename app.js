$().ready(()=>{
    var popUp = document.querySelector('.popUp');
    $("td").dblclick((e)=>{
        
        if($(e.target).attr("class")=="width"){ //event listeners triggers only if data attribute is width 

            // THIS Function gets text value of another table cell in the same row defined by eq(number)
            let id = $(e.target).closest('td').siblings().eq(0).text();
            let bulto = $(e.target).closest('td').siblings().eq(1).text();
            let wood =  parseFloat($(e.target).closest('td').siblings().eq(2).text());
            let length = parseFloat($(e.target).closest('td').siblings().eq(3).text());
            let thick = parseFloat($(e.target).closest('td').siblings().eq(4).text());
            let qt =  parseFloat($(e.target).text());
            let width =  parseFloat($(e.target).data("width")[0]);
            let column = $(e.target).data("width")[1];
            length = parseFloat(length);
            thick = parseFloat(thick);
            qt = parseFloat(qt);
            let pt = (length * thick * width * qt)/12
            
            let result = "<div class='popUp-section '>";
            // result+="<img class='drag' src='images/drag.svg' alt=''>";
            result += 
            "WOOD OUT <br>"+
            "ID: " + id + "<br>" + 
            "Bundle: "+ bulto + "<br>" +
            "Wood: " + wood + "<br>" +
            length + "' x " + thick + "\" x " + width + "\"<br>" +
            
            "Pt: "+ pt + "<br>" +
            "Column: " + column;
            result +="</div>";
            
            result +="<input type='text' id='quantity' class='quantity' placeholder='Qt'>";
            result +="<br><button  class='submitBtn' >Submit Salida</button>";
            result +="<button onclick='closePopUp();' type='button' id='cancelBtn' class='cancelBtn' >Cancel</button>";
            
            result +="</div>"

            

            
            popUp.innerHTML =  result;
            
            $(".popUp").hide();
            $(".popUp").show(200);
            console.log(e);
        }
    });


    
    



    $('tr').dblclick((e)=>{

        if($(e.target).closest('tr').hasClass("highlighted")){
            $(e.target).closest('tr').removeClass("highlighted");
        }else{
            $(e.target).closest('tr').addClass("highlighted");
        }

    })

    
//MAKE TABLE DRAGGABLE
    $(".drag").click((e)=>{
        console.log(e.target);
        $(e.target).parent().addClass("draggable"),
        $(e.target).parent().addClass("ui-widget-content");
        $( function() {
            $( ".draggable" ).draggable();
          } ); 
        
           
    });
    $( function() {
        $( ".resizable" ).resizable();
        $( ".draggable" ).draggable();
      } );

    
   
});

var closePopUp = () => {
    $('.popUp').hide();
}

