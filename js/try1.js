class MyPageController
{
    // if you need block scope thn declare with 'let' or 'const' else 'var'
    constructor()
    {
        this.NavbarOffsetTop  = undefined;
        this.Navbar1 = undefined;
    }


    MyStickyNavbar( NavBarID )
    {
        if( this.NavbarOffsetTop == undefined)
        {
            // if you need block scope thn declare with 'let' or 'const' else 'var'
            this.Navbar1 = document.getElementById( NavBarID );
            this.NavbarOffsetTop = this.Navbar1.offsetTop;
        }

        if (window.pageYOffset >= this.NavbarOffsetTop ) 
        {
            this.Navbar1.classList.add("sticky")
        } 
        else 
        {
            this.Navbar1.classList.remove("sticky");
        }
    }
}

const pagCtl = new MyPageController();

// jQuery document ready
// $(document).ready(  function ()
$(() => {
    // window.onscroll = pagCtl.MyStickyNavbar("navbar");
    window.onscroll = function() { pagCtl.MyStickyNavbar("mynavbar1") };

    // If the page is already scrolled down more than the nave bar, it will set
    pagCtl.MyStickyNavbar("mynavbar1");
});




/*
// Other options
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > SomeValue) {
            $('.navbar').addClass('navbar-fixed-top');
        }

        if ($(window).scrollTop() < SomeValue + 1) {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });
});
*/
