const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./Dashboardpage');
const {CartPage} = require('./CartPage');
const {Checkoutpage} = require('./Checkoutpage');
const {OrdersHistoryPage} = require('./OrdersHistoryPage');

class POManager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new Checkoutpage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }
    getCartPage(){
        return this.cartPage;           
    }  
    getCheckoutPage(){
        return this.checkoutPage;           
    } 
    getOrdersHistoryPage(){
        return this.ordersHistoryPage;           
    }
}    

module.exports = {POManager};