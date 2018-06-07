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
                        price:15,
                        currency:"$"
                    },

                    {
                        name:"Little Hot Dogs ",
                        description: "Deep fried hot dogs ",
                        price:8,
                        currency:"$"
                    },

                    {
                        name:"Hot Wings ",
                        description: "12 hot chiken wing with chili sauce ",
                        price:10,
                        currency:"$"
                    }
                ]
            },
            mains:{
                title:"Main Courses",
                data: [
                    {
                        name:"Sami's Burger ",
                        description: "A great piece of meat envelopped by the best bread from our local baker with a side dish. ",
                        price:35,
                        currency:"$"
                    },

                    {
                        name:"Sami's Sausage ",
                        description: "3 big sausages of fresh lamb meat with a side dish. ",
                        price:35,
                        currency:"$"
                    },

                    {
                        name:"Sami's Special Salad ",
                        description:"Chicken Breast, Lettuce, Tomatos, Cucumbers, Onions, Mushrooms with a bun of bread. ",
                        price:35,
                        currency:"$"
                    }
                ]
            },
            deserts:{
                title:"Something Sweet",
                data: [
                    {
                        name:"Tiramissu ",
                        description: "Something sweet. ",
                        price:20,
                        currency:"$"
                    },

                    {
                        name:"Soufle ",
                        description: "Something with chocolate. ",
                        price:22,
                        currency:"$"
                    }
                ]
            },
            softDrinks:{
                title:"Soft Drinks",
                data: [
                    {
                        name:"Coca Cola/Diet/Zero ",
                        description: "",
                        price:6,
                        currency:"$"
                    },

                    {
                        name:"Sprite/Zero ",
                        description: "",
                        price:6,
                        currency:"$"
                    },

                    {
                        name:"Flat/Sparkling Water ",
                        description: "",
                        price:3,
                        currency:"$"
                    }
                ]
            }
    },

    'buildMenu':function(){
        //print to the HTML the Menu Content
        for(var dishType in Menu.categories)
        {
            //  print title
            var typeContainer = document.createElement('div');
            var t = document.createTextNode(Menu.categories[dishType].title);     // Create a text node
            typeContainer.appendChild(t);

            document.body.appendChild(typeContainer)

            for(var i = 0; i<Menu.categories[dishType].data.length; i++ )
            {
                var dishContainer = document.createElement('li');
                var n = document.createTextNode(Menu.categories[dishType].data[i].name);     // Create a text node
                var d = document.createTextNode(Menu.categories[dishType].data[i].description);     // Create a text node
                var p = document.createTextNode(Menu.categories[dishType].data[i].price);     // Create a text node
                var c = document.createTextNode(Menu.categories[dishType].data[i].currency);     // Create a text node

                dishContainer.appendChild(n);
                dishContainer.appendChild(d);
                dishContainer.appendChild(p);
                dishContainer.appendChild(c);
                document.body.appendChild(dishContainer)
            }
        }
    }




}


