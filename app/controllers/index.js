

$.index.addEventListener("open", function() {
	
    if (Ti.Platform.osname === "android") {
            // actionBar = $.index.activity.actionBar;
            // if (actionBar) {
            	// //actionBar.setDisplayShowHomeEnabled(true);
               // // actionBar.setHomeButtonEnabled(true);
               // //actionBar.displayHomeAsUp = true;
               // //actionBar.icon = "/images/appicon2.png";
               // // actionBar.logo = "/images/appicon2.png";
               // //actionBar.hide();
               // //actionBar.title = "New Title";
               // // actionBar.setOnHomeIconItemSelected(function() {
                   // // alert("Home icon clicked!");
                // // });
            // }
            
    }
    
});


function doClick(e) {
	
	
	var slide_it_left = Titanium.UI.createAnimation();
    slide_it_left.left = 0;
    slide_it_left.duration = 300;
 
    var winHome = Alloy.createController('login').getView();
    winHome.left = 500;
 
    if(Ti.Platform.name == 'android'){
        winHome.open({
            activityEnterAnimation: Ti.Android.R.anim.slide_in_left,
            activityExitAnimation: Ti.Android.R.anim.slide_out_right
        }); 
    }
    else
        winHome.open(slide_it_left);
}

$.index.open();
