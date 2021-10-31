const cafeteria = new Vue
({
    el: '#content', 
    data: {
        products: [
            {
                img: '../img/cafe1.jpg', 
                name: 'Café Moka Casero',
                isAvailable: true, 
                size: 10,
                price: 200, 
                ingredients: '2 tazas de leche de vaca, 1/4 tablillas de chocolate, azúcar (al gusto), 1 pizca de sal, canela en polvo (al gusto), 1 cucharada de café soluble.',
            }, 
            {
                img: '../img/cafe2.jpg', 
                name: 'Café Espresso',
                isAvailable: false, 
                size: 10,
                price: 150, 
                ingredients: '7g de café molido fino, 1 taza de agua, preferente de alta calidad (no de grifo).',
            }, 
            {
                img: '../img/cafe3.jpg', 
                name: 'Café Latte',
                isAvailable: true, 
                size: 10,
                price: 300, 
                ingredients: '1/2 tazas de leche (fría), 1/2 tazas de agua (caliente), 2 cucharadas de café soluble, 1/2 tazas de leche (caliente), suficiente de canela (para decorar).',
            }, 
            {
                img: '../img/cafe4.jpg', 
                name: 'Galletas de Avena',
                isAvailable: false, 
                size: 5+' Galletas',
                price: 100, 
                ingredients: '2 plátanos maduros, 50 gramos de uvas pasas, 150 gramos de copos de avena, 50 gramos de chips de chocolate negro.',
            }, 
            {
                img: '../img/cafe5.jpg', 
                name: 'Empanadas de Manzana',
                isAvailable: true, 
                size: 3+' Empanadas',
                price: 150, 
                ingredients: '2 tazas de harina, 1 taza con agua, 1 taza con jugo de limón, 1 cucharadita de sal, ¼ taza de azúcar en polvo, ¼ taza de azúcar morena, 500gr de manzanas, 2/3 tazas de mantequilla fría, Crema de leche, Nuez moscada, Queso Cheddar.',
            }, 
            {
                img: '../img/cafe6.jpg', 
                name: 'Smoothie de Chocolate',
                isAvailable: true, 
                size: 1,
                price: 150, 
                ingredients: '2 tazas de leche, 2 cucharadas de chocolate en polvo, 2 cucharadas de mantequilla, 100 gr. de chocolate negro, 1 bola de helado de chocolate, 1 taza de hielo',
            }, 
        ], 
        toSearch: '',
        maximum: 300, 
        isSearching: false,
    }, 
    computed: {
        searchProduct: function ()
        {
            return this.searchProductByPrice(this.searchProductByText(this.products));
        },
    },
    methods: {
        searchProductByText: function (products)
        {
            return products.filter(product => product.name.includes(this.toSearch)); 
        }, 
        searchProductByPrice: function (products)
        {
            return products.filter(product => product.price <= this.maximum); 
        }, 
        validateSearchText: function ()
        {
            if(this.toSearch.length > 0)
            {
                this.isSearching = true; 
            }
            else{
                this.isSearching = false; 
            }
        }, 
        addWishlist: function (nameProduct)
        {
            for(drink of this.products)
            {
                if(drink.name == nameProduct)
                {
                    wishlist.wishlist.push({img: drink.img, name: drink.name, price: drink.price});
                    wishlist.count = wishlist.wishlist.length; 
                }
            }
        },
        appear: function ()
        {
            wishlist.appear != wishlist.appear; 
        },
        notAvailableData: function (isAvailable)
        {
            return {
                "notAvailable": isAvailable == false,
            }
        }, 
        notAvailableCard: function (isAvailable)
        {
            return {
                "notAvailableCard": isAvailable == false,
            }
        }
    }
}); 

const wishlist = new Vue
({
    el: '#wishlist', 
    data: {
        wishlist: [],
        count: 0, 
        appear: true
    }, 
    computed: {
        total: function ()
        {
            var total = 0; 
            for (wish of this.wishlist)
            {
                total = total + wish.price; 
            }
            return total; 
        }
    }
}); 