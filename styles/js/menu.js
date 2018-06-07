/**
 * Created by compie on 07/06/18.
 */




Menu = {
    categories: {
            firsts: {
                title:"Appetizers",
                data: [
                    {
                        name:"Home fries",
                        decription: "Home fries with chili sauce.",
                        price:15,
                        currency:"$"
                    },

                    {
                        name:"Little Hot Dogs",
                        decription: "Hot dogs",
                        price:8,
                        currency:"$"
                    },

                    {
                        name:"Hot Wings",
                        decription: "12 hot chiken wing with chili sauce",
                        price:10,
                        currency:"$"
                    }
                ]
            },
            mains:{
                title:"Main Courses",
                data: [
                    {
                        name:"Sami's Burger",
                        decription: "A great piece of meat envelopped by the best bread from our local baker with a side dish.",
                        price:35,
                        currency:"$"
                    },

                    {
                        name:"Sami's Sausage",
                        decription: "3 big sausages of fresh lamb meat with a side dish.",
                        price:35,
                        currency:"$"
                    },

                    {
                        name:"Sami's Special Salad",
                        decription: "Chicken Breast, Lettuce, Tomatos, Cucumbers, Onions, Mushrooms with a bun of bread.",
                        price:35,
                        currency:"$"
                    }
                ]
            },
            deserts:{
                title:"Something Sweet",
                data: [
                    {
                        name:"Tiramissu",
                        decription: "Something sweet.",
                        price:20,
                        currency:"$"
                    },

                    {
                        name:"Soufle",
                        decription: "Something with chocolate.",
                        price:22,
                        currency:"$"
                    }
                ]
            },
            softDrinks:{
                title:"Soft Drinks",
                data: [
                    {
                        name:"Coca Cola/Diet/Zero",
                        decription: "",
                        price:6,
                        currency:"$"
                    },

                    {
                        name:"Sprite/Zero",
                        decription: "",
                        price:6,
                        currency:"$"
                    },

                    {
                        name:"Flat/Sparkling Water",
                        decription: "",
                        price:3,
                        currency:"$"
                    }
                ]
            }
    },
    menuBuild: function() {
        //TODO: print to the HTML the Menu Content
        for(var dishType in Menu.categories){
            // TODO: print title
            Menu.categories[dishType].title
            for(var i=0; i<Menu.categories[dishType].data.length; i++ ){
                // TODO: print dish
                Menu.categories[dishType].data[i]
            }
        }
    },
}


