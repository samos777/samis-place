

myCart ={

    totalPrice: 0,

    discount: 0,

    itemCounter:0,

    cart:[ ], //for items

    //algo functions


    'resetCart':function(){

       this.totalPrice = 0;
       this.discount = 0;
       this.itemCounter = 0;
    },

    'recalculate':function(){

        var price = 0;

        for(var i = 0; i < this.cart.length; i++)
        {
            price += this.cart[i].price;
        }

        price *=  (1 - this.discount / 100 );

        this.totalPrice = price;
    },


    'addToCart':function(item){

        this.cart.push(item);
        this.itemCounter++;

        this.recalculate();

        this.createRow(item);



    },


    'removeFromCart':function(item){

        if(this.itemCounter == 0)
        {
            return;
        }

        this.cart.splice(this.cart.indexOf(item), 1);
        this.itemCounter--;

        this.recalculate();
    },

    //display and built functions


    'displayCart':function(){
        var cartContainer = document.createElement("div");
        cartContainer.id = "cartContainer";
        var t = document.createTextNode("Items");
        cartContainer.appendChild(t);
        $( "#myCart" ).append( $( cartContainer));

        $( "#myCart" ).append( $( this.buildAddRemoveButtons()));


    },


    'createRow':function(item){
        var tableCont = document.createElement("div");
        tableCont.classList = ".row rowContainer";
        $( "#cartContainer" ).append( $( tableCont));
        this.addItem(item);

    },

    'addItem':function(item){
        var itemNameContainer = document.createElement("div");
        itemNameContainer.classList ="col-sm-8 nameCont";
        var t = document.createTextNode(item.name);
        itemNameContainer.appendChild(t);
        $("#cartContainer").append( $(itemNameContainer));

        var itemPriceContainer = document.createElement("div");
        itemPriceContainer.classList ="col-sm-4 priceCont";
        var p = document.createTextNode(item.price + "$");
        itemPriceContainer.appendChild(p);
        $("#cartContainer").append( $(itemPriceContainer));



    },

    //buttons

    'makeEndButtons':function(buttonContent){

            var addButton = document.createElement("BUTTON");
            addButton.className = "addButton";
            var a = document.createTextNode(buttonContent);
            addButton.appendChild(a);

            return addButton;
    },

    'buildAddRemoveButtons':function(){

        var both = document.createElement("div");
        var buttonReset = this.makeEndButtons("Reset");
        var buttonCheck = this.makeEndButtons("Check");
        both.className = "bothButton";
        both.appendChild(buttonReset);
        both.appendChild(buttonCheck);

        return both;

    }



}

