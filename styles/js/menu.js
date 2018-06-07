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
                        description: "Home fries with chili sauce. ",
                        price:15
                    },

                    {
                        name:"Little Hot Dogs ",
                        description: "Deep fried hot dogs ",
                        price:8
                    },

                    {
                        name:"Hot Wings ",
                        description: "12 hot chiken wing with chili sauce ",
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
                        price:35
                    },

                    {
                        name:"Sami's Special Salad ",
                        description:"Chicken Breast, Lettuce, Tomatos, Cucumbers, Onions, Mushrooms with a bun of bread. ",
                        price:35
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
                        name:"Soufle ",
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

    'buildMenu':function(){
        //print to the HTML the Menu Content
        for(var dishType in Menu.categories)
        {
            this.buildTitle(dishType);

            for(var i = 0; i<Menu.categories[dishType].data.length; i++ )
            {
                var dishContainer = document.createElement('li');

                this.buildLine(dishContainer,dishType, i)

                document.body.appendChild(dishContainer)
            }
        }
    },


    'buildTitle':function(dishType)
    {
        var typeContainer = document.createElement('div');
        var t = document.createTextNode(Menu.categories[dishType].title);     // Create a text node
        typeContainer.appendChild(t);

        document.body.appendChild(typeContainer)
    },

    'buildLine':function(dishContainer, dishType, i)
    {
        var n = document.createTextNode(Menu.categories[dishType].data[i].name + " - " +
                                        Menu.categories[dishType].data[i].description  + " - " +
                                        Menu.categories[dishType].data[i].price + "$");

        dishContainer.appendChild(n);
    }

}

