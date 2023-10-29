/** @format */

 // import {animals} from "animal_info.js";

 const initializeNameIngreident = (index) => {
    $(".cocktail").eq(index).html(cocktails[index].Cocktail_Name + "<br>" 
    +cocktails[index].Main_Ingredient);
  };
  const showCardInformation = () => {
    cards();
    jQuery.each($(".box"), initializeNameIngreident);
    // Add an event handler for when the element of class "box" gets a click event
    $(".box").on("click", function () {
      let indexOfCocktails = $(".box").index(this);
      $(this).find("p.cocktail").text(
        cocktails[indexOfCocktails].Cocktail_Name + ": " 
        +cocktails[indexOfCocktails].Calories + " Calories"
      );
    });
  
    // Add an event gets a mouseover event
    $(".box").on("mouseover", function () {
      let indexOfCocktails = $(".box").index(this);
      $(this).find("p.cocktail").html("Exact Recipe: " 
      +cocktails[indexOfCocktails].Exact_Recipe);
    });

    // Add a mouseout event
    $(".box").on("mouseout", function () {
      let indexOfCocktails = $(".box").index(this);
      // Reset the text to display the cocktail name and main ingredient
      $(this).find("p.cocktail").html(cocktails[indexOfCocktails].Cocktail_Name + "<br>" 
      + cocktails[indexOfCocktails].Main_Ingredient);
    });
  };
  
  const cards = () => {
    let wrapperRef = $('.wrapper');
    cocktails.forEach((cocktail) => {
      let boxMarkup = ` <div class="box">
          <img class="cocktail_pic" src="./images/${cocktail.Cocktail_Name.toLowerCase()}.jpg" />
          <p class="cocktail"></p>
        </div>`;
      wrapperRef.append(boxMarkup);
    });
  }
  
  $(document).ready(showCardInformation);
  