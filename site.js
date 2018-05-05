/* global $ */

var loadChicken = function() {
        $("#contentH4").text("Chickens");
        $("#contentImg").attr("src", "../my_first_website/img/chicken.jpg")
            .attr("width", "150");
        $("#contentP").html("Chickens are birds, they lay round eggs for us so that we can make yummy breakfast meals like scrambled eggs, pancakes and omeletes.<br>What they like to eat: Insects and Seeds.<br>What sounds do they make: Cluck Cluck!");
};
        
$("#chicken").on("click", function() {
        loadChicken();
});

var loadSheep = function() {
        $("#contentH4").text("Sheep");
        $("#contentImg").attr("src", "../my_first_website/img/sheep.jpg")
            .attr("width", "150");
        $("#contentP").html("Sheep have four legs and love to roam around the farm. They are fun to play with and feed. Sheep give us wool so we can make colorful christmas jumpers and stay warm in the winter. <br>What they like to eat: Grass.<br>What sounds do they make: Bah Bah!");
};
        
$("#sheep").on("click", function() {
        loadSheep();
});

var loadPig = function() {
        $("#contentH4").text("Pigs");
        $("#contentImg").attr("src", "../my_first_website/img/pig.jpg")
            .attr("width", "150");
        $("#contentP").html("Pigs love rolling around in the mud and playing with each other. They are pink, round, with cute snouts and a turly tails.<br>What they like to eat: Plants and other animals.<br>What sounds do they make: Oink Oink!");
};
        
$("#pig").on("click", function() {
        loadPig();
});

var loadCow = function() {
        $("#contentH4").text("Cows");
        $("#contentImg").attr("src", "../my_first_website/img/cow.jpg")
            .attr("width", "150");
        $("#contentP").html("Cows are big animals with four legs. They love to walk around the feild getting all the exercise they need. They give us delicious milk to drink so we can have strong healthy bones. <br>What they like to eat: Grass.<br>What sounds do they make: Mooo!");
};
        
$("#cow").on("click", function() {
        loadCow();
});