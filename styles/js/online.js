/*
var Menu;

onlineMenu = {

    //functions

    'buildOnlineMenu': function() {

        Menu.buildMenu();


    }

}
*/


onlineMenuAlt = {

    categories: {
        firsts: {
            title:"Appetizers ",
            data: [
                {
                    name:"Home fries ",
                    description: "Home fries with chili sauce.Salami meatloaf fatback, jowl sausage hamburger filet mignon.",
                    price:15
                },

                {
                    name:"Little Hot Dogs ",
                    description: "Deep fried hot dogs Prosciutto fatback sausage burgdoggen buffalo capicola turducken leberkas short ribs.",
                    price:8
                },

                {
                    name:"Hot Wings ",
                    description: "12 hot chiken wing with chili sauce Kevin meatball short ribs, meatloaf ",
                    price:10
                }
            ]
        },
        mains:{
            title:"Main Courses",
            data: [
                {
                    name:"Sami's Burger ",
                    description: "A great piece of meat envelopped by the best bread from our local baker with a side dish. ",
                    price:35
                },

                {
                    name:"Sami's Sausage ",
                    description: "3 big sausages of fresh lamb meat with a side dish. ",
                    price:30
                },

                {
                    name:"Sami's Special Salad ",
                    description:"Chicken Breast, Lettuce, Tomatos, Cucumbers, Onions, Mushrooms with a bun of bread. ",
                    price:28
                }
            ]
        },
        deserts:{
            title:"Something Sweet",
            data: [
                {
                    name:"Tiramissu ",
                    description: "Something sweet. ",
                    price:20
                },

                {
                    name:"Souffle ",
                    description: "Something with chocolate. ",
                    price:22
                }
            ]
        },
        softDrinks:{
            title:"Soft Drinks",
            data: [
                {
                    name:"Coca Cola/Diet/Zero ",
                    description: "",
                    price:6
                },

                {
                    name:"Sprite/Zero ",
                    description: "",
                    price:6
                },

                {
                    name:"Flat/Sparkling Water ",
                    description: "",
                    price:3,
                }
            ]
        }
    },

    //functions


    'buildOnlineMenu':function(){

        for(var dishType in onlineMenuAlt.categories)
        {
            this.buildTitle(dishType);

            for(var i = 0; i<onlineMenuAlt.categories[dishType].data.length; i++ )
            {
                var dishContainer = document.createElement('div');
                dishContainer.className = "dishCont";
                this.buildLine(dishContainer,dishType, i)

                $( "#MenuPart" ).append( $( dishContainer ) );

                this.buildBR();
            }
        }

    },


//     function myFunction() {
//     var x = document.createElement("BUTTON");
//     var t = document.createTextNode("Click me");
//     x.appendChild(t);
//     document.body.appendChild(x);
// }

    'buildAddRemoveButtons':function(){

        var both = document.createElement("div")
        var buttonMinus = this.buildButton("-");
        var buttonPlus = this.buildButton("+");
        both.className = "bothButton";
        both.appendChild(buttonMinus);
        both.appendChild(buttonPlus);

        return both;

    },



    'buildButton':function(buttonContent) {
        var addButton = document.createElement("BUTTON");
        addButton.className = "addButton";
        var a = document.createTextNode(buttonContent);
        addButton.appendChild(a)

        return addButton;
    },



    'buildHR':function(){
        var line = document.createElement("HR");
        //document.body.appendChild(line) ;
        $( "#MenuPart" ).append( $( line ) );
    },



    'buildBR':function(){
        var line = document.createElement("BR");
        // document.body.appendChild(line) ;
        $( "#MenuPart" ).append( $( line ) );
    },



    'buildTitle':function(_dishType)
    {
        var typeContainer = document.createElement('div');
        typeContainer.className="category";
        var t = document.createTextNode(onlineMenuAlt.categories[_dishType].title);     // Create a text node
        typeContainer.appendChild(t);

        $( "#MenuPart" ).append( $( typeContainer ) );
        // document.body.appendChild(typeContainer);
        this.buildBR();
    },



    'buildLine':function(_dishContainer, _dishType, _i) {

        var nameCont = document.createElement('div');
        var descrCont = document.createElement('div');
        var priceCont = document.createElement('div');

        var bothButtons = this.buildAddRemoveButtons();

        var n = document.createTextNode(onlineMenuAlt.categories[_dishType].data[_i].name);
        var d = document.createTextNode(onlineMenuAlt.categories[_dishType].data[_i].description);
        var p = document.createTextNode(onlineMenuAlt.categories[_dishType].data[_i].price + "$");

        nameCont.className = "dishName";
        descrCont.className = "dishDescription";
        priceCont.className = "dishPrice";

        nameCont.appendChild(n);
        descrCont.appendChild(d);
        priceCont.appendChild(p);

        _dishContainer.appendChild(nameCont);
        _dishContainer.appendChild(descrCont);
        _dishContainer.appendChild(bothButtons);
        _dishContainer.appendChild(priceCont);



    },




}