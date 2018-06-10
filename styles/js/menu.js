/**
 * Created by compie on 07/06/18.
 */




Menu = {
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

    'buildMenu':function(){
        //print to the HTML the Menu Content
        for(var dishType in Menu.categories)
        {
            this.buildTitle(dishType);

            for(var i = 0; i<Menu.categories[dishType].data.length; i++ )
            {
                var dishContainer = document.createElement('div');
                dishContainer.className = "dishCont";
                this.buildLine(dishContainer,dishType, i);

                // document.body.appendChild(dishContainer)
                $( "#myMenu" ).append( $( dishContainer ) );
                this.buildBR();
            }
        }
    },



    'buildHR':function(){
        var line = document.createElement("HR");
        //document.body.appendChild(line) ;
        $( "#myMenu" ).append( $( line ) );
    },



    'buildBR':function(){
        var line = document.createElement("BR");
        // document.body.appendChild(line) ;
        $( "#myMenu" ).append( $( line ) );
        },



    'buildTitle':function(_dishType)
    {
        var typeContainer = document.createElement('div');
        typeContainer.className="category";
        var t = document.createTextNode(Menu.categories[_dishType].title);     // Create a text node
        typeContainer.appendChild(t);

        $( "#myMenu" ).append( $( typeContainer ) );
       // document.body.appendChild(typeContainer);
        this.buildBR();
    },



    'buildLine':function(_dishContainer, _dishType, _i) {

        var nameCont = document.createElement('div');
        var descrCont = document.createElement('div');
        var priceCont = document.createElement('div');

        var n = document.createTextNode(Menu.categories[_dishType].data[_i].name);
        var d = document.createTextNode(Menu.categories[_dishType].data[_i].description);
        var p = document.createTextNode(Menu.categories[_dishType].data[_i].price + "$");

        nameCont.className = "dishName";
        descrCont.className = "dishDescription";
        priceCont.className = "dishPrice";

        nameCont.appendChild(n);
        descrCont.appendChild(d);
        priceCont.appendChild(p);

        _dishContainer.appendChild(nameCont);
        _dishContainer.appendChild(descrCont);
        _dishContainer.appendChild(priceCont);
    },


}

