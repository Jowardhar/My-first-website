/* global $ */

var loadContent = function(name, source, content) {
        $("#contentH4").text(name);
        var newImg = $("<img>")
        $(newImg).attr("src", "../my_first_website/img/" + source +".jpg")
            .attr("width", "150");
        $(".animalImg").append(newImg);
        $("#contentP").html(content);
        
};
        
$("#chicken").on("click", function() {
        $(".animalImg img:last-child").remove();
        loadContent("Chickens","chicken", "Chickens are birds, they lay round eggs for us so that we can make yummy breakfast meals like scrambled eggs, pancakes and omeletes.<br>What they like to eat: Insects and Seeds.<br>What sounds do they make: Cluck Cluck!");
});

$("#sheep").on("click", function() {
        $(".animalImg img:last-child").remove();
        loadContent("Sheep","sheep", "Sheep have four legs and love to roam around the farm. They are fun to play with and feed. Sheep give us wool so we can make colorful christmas jumpers and stay warm in the winter. <br>What they like to eat: Grass.<br>What sounds do they make: Bah Bah!");
});

$("#pig").on("click", function() {
        $(".animalImg img:last-child").remove();
        loadContent("Pigs","pig", "Pigs love rolling around in the mud and playing with each other. They are pink, round, with cute snouts and a turly tails.<br>What they like to eat: Plants and other animals.<br>What sounds do they make: Oink Oink!");
});

$("#cow").on("click", function() {
        $(".animalImg img:last-child").remove();
        loadContent("Cow", "cow","Cows are big animals with four legs. They love to walk around the feild getting all the exercise they need. They give us delicious milk to drink so we can have strong healthy bones. <br>What they like to eat: Grass.<br>What sounds do they make: Mooo!");
});
