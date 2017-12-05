
var totalItems =0;
var uniqueId =0;

$(".entrybox").submit(function(e) {
   e.preventDefault();

   addItem( $(".entrybox input").val());
   $(".entrybox input").val("");
})

function showDeleteButton() {
   $(this).find(".deleteButton").show();
   // console.log($(this).eq(".deleteButton"));
}

function hideDeleteButton() {
   $(this).find(".deleteButton").hide();
}

function setColors(ulElement) {
   var list = ulElement.children("li");
   let cc =0;
   for (let i=0; i<list.length; i++) {
      // console.log(list.get(0));
      //let clr = $(list[i]).css("color").split(",")[1];
      // console.log("clr =",clr);
      cc +=20;
      cc = (cc>220) ? 220 : cc;
      var newcolor = "rgb("+cc+","+cc+","+cc+")"
      $(list[i]).css("color",newcolor);
   }
}

function deleteEntry(entry) {
   var el = $(entry)
   totalItems--;
   el.remove();

   setColors($(".todoList"));
}

function addItem(item) {
   uniqueId++;

   var newli = $(".todoList").append("<li>"+item+"<span class='deleteButton' id='"+uniqueId+"'>X</span></li>");
   // var newli = $(".todoList").append("<li>"+item+"<span class='deleteButton'>X</span></li>");

   //-- hide deleteButtton and add click
   $(".deleteButton").last().hide();
   var el = newli.children("li").last();
   $(".deleteButton").last().click( function() {
      deleteEntry(el);
   });

   newli.children().last().mouseover(showDeleteButton);
   newli.children().last().mouseout(hideDeleteButton);
   totalItems++;

   setColors($(".todoList"));
}

$(".todoList").sortable();
