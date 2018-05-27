/*
The MIT License (MIT)

Copyright (c) 2018 Sathyanesh Krishnan
*/

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
    window.onscroll = function() { pagCtl.MyStickyNavbar("myskickynavbar1") };

    // If the page is already scrolled down more than the nave bar, it will set
    pagCtl.MyStickyNavbar("myskickynavbar1");
});
