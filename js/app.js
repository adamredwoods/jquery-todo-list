
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

function setColors() {

}

function deleteEntry(entry) {
   var el = $(entry)
   totalItems--;

   var list = el.nextAll("li");
   for (let i=0; i<list.length; i++) {
      // console.log(list.get(0));
      let clr = $(list[i]).css("color").split(",")[1];
      // console.log("clr =",clr);
      var cc = clr-10;
      if (cc<0) {
         cc=0;
      }
      var newcolor = "rgb("+cc+","+cc+","+cc+")"
      $(list[i]).css("color",newcolor);
   }
   el.remove();
}

function addItem(item) {
   uniqueId++;

   //-- fade colors further on list
   var cc = totalItems*10;
   cc = (cc>220) ? 220 : cc;
   var newcolor = "rgb("+cc+","+cc+","+cc+")"
   var newli = $(".todoList").append("<li>"+item+"<span class='deleteButton' id='"+uniqueId+"'>X</span></li>");
   // var newli = $(".todoList").append("<li>"+item+"<span class='deleteButton'>X</span></li>");
   newli.children().last().css("color",newcolor);

   //-- hide deleteButtton and add click
   $(".deleteButton").last().hide();
   var el = newli.children().last();
   $(".deleteButton").last().click( function() {
      deleteEntry(el);
   });

   newli.children().last().mouseover(showDeleteButton);
   newli.children().last().mouseout(hideDeleteButton);
   totalItems++;
}

$(".todoList").sortable();
