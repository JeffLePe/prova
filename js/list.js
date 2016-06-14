var list = {
    
    products: [],
    prices: [],
    
    getListProducts: function() {
        list.loadProducts();
        return list.products;
    },
    
    getListPrices: function() {
        list.loadPrices();
        return list.prices;
    },
    
    loadProducts: function() {
        var productsJsonText = window.localStorage.getItem('list-products');
        if(productsJsonText){
            list.products = JSON.parse(productsJsonText);
        }
    },
    
    loadPrices: function() {
        var pricesJsonText = window.localStorage.getItem('list-prices');
        if(pricesJsonText){
            list.prices = JSON.parse(pricesJsonText);
        }
    },
    
    addProduct: function(name) {
        list.products.push(name);
        list.saveProduct();
    },
    
    addPrice: function(price) {
        list.prices.push(price);
        list.savePrice();
    },
    
    saveProduct: function() {
        var productsJsonText = JSON.stringify(list.products);
        window.localStorage.setItem('list-products', productsJsonText);
    },
    
    savePrice: function() {
        var pricesJsonText = JSON.stringify(list.prices);
        window.localStorage.setItem('list-prices', pricesJsonText);
    }
    
}