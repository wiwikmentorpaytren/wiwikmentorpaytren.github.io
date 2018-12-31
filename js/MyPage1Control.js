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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
