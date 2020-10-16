$(document).ready(function(){
    var i=0,j=0;

    setInterval(() => {
        console.log("ok")

        i++;
        if(i== 60){
            j++;
            i=0;

        }
         $('.time').text(j+":"+i);
        // $('.time').text(j)    
    },1000);
    var store=[];
    var listElem= null ;
    var m=0;

    $('.refresh').on('click', function(){
        location.reload();
    })
    $("li").on('click', function(){
        
        if(listElem == null){
            listElem = $(this);

        }
         $(this).css("background-color", "MediumSeaGreen");
       $(this).children().css("display", "block");

      var list1 = $(this).children().attr('class');

      store.push(list1);
      if(store.length==2){
          m++;
      }
      $('.moves').text(m + "moves");

      console.log(store);

    //   console.log(store.length)
      console.log(store[0])
      console.log(store[1])

      if(store.length == 2){
          if(store[0] == store[1]){
              $(this).css("border", " 3px solid green")
              listElem.css("border", " 3px solid green")

              var list2 = $(this)

              setTimeout(function(){
                list2.css("border", "none")
                console.log(listElem);
                listElem.css("border", "none")
                listElem = null;
              }, 500)


              store = [];
            //   listElem = null;
          }
          else{

              store=[];
              var li = $(this);
              li.css("border", " 3px solid red")
                listElem.css("border", " 3px solid red")

              setTimeout(function(){
                console.log("elsse")
                li.css("background-color", "cadetblue");
                li.children().css("display", "none") 
                listElem.css("background-color", "cadetblue") ;
                //console.log(li.prev().children())
                listElem.children().css("display", "none")

                li.css("border", "none")
                listElem.css("border", "none")

                listElem = null;
              }, 1000)

          }
      }
    })  
});

