function populateMenu(){
    var actual = document.querySelector('.actual');

    actual.innerHTML = `
<div class="origin-header">Our Menu:</div>
<div class="item">
    <img class="pic classic" src="milk.jpg">
    <div class="explain">
        <div class="entry">The Classic</div>
        <div class="price">$9.99</div>
        <div class="describe">The one that started it all. A generous helping of original Graham Crackers served with a 
            chilled glass of only full-fat milk. And no, you may not substitute for skim. For the absolute purist at heart.
        </div>
    </div>
</div>
<div class="item">
    <img class="pic choc" src="choccy.jpg">
    <div class="explain">
        <div class="entry">The Chocolate</div>
        <div class="price">$10.99</div>
        <div class="describe">One of our signature items. The same classic Grahams that you all know and love combined with 
            a sensational glass of choccy milk. For your everyday chocolate enthusiast, this is what life is all about.
        </div>
    </div>
</div>
<div class="item">
    <img class="pic strawb" src="strawb.jpg">
    <div class="explain">
        <div class="entry">The Fruity</div>
        <div class="price">$10.99</div>
        <div class="describe">We get it, some people want to eat healthy. This is why we offer the option of strawberry milk 
            with our classic Graham Crackers to help our health nut fans hit their daily fruit instake. You're welcome.
        </div>
    </div>
</div>
<div class="item">
    <img class="pic cinn" src="cinnam.jpg">
    <div class="explain">
        <div class="entry">The Cinnamon</div>
        <div class="price">$10.99</div>
        <div class="describe">What's better than a set of delicious Graham Crackers with cinnamon? A set of Graham Crackers with 
            double the cinnamon, of course. Taster be warned: it's even spicier than you may think, so get yourself ready.
        </div>
    </div>
</div>
<div class="item">
    <img class="pic choc-grah" src="choc-graham.jpg">
    <div class="explain">
        <div class="entry">The Other Chocolate</div>
        <div class="price">$10.99</div>
        <div class="describe">Yeah The Chocolate is on par with the classic, but sometimes you gotta change it up. For the chocoholic 
            wanting to try something new, we not offer revolutionary cholate flavored Graham Crackers to pair excellently with our standard milk.
        </div>
    </div>
</div>
<div class="item">
    <img class="left-choc" src="leftchocc.jpg">
    <img class="right-choc" src="rightchocc.jpg">
    <div class="explain">
        <div class="entry">The Double Chocolate</div>
        <div class="price">$11.99</div>
        <div class="describe">The most decadent treat we can offer with the pair made in heaven. Chocolate flavored Graham Crackers
            with choccy milk. Only for the most dedicated of choco-fans, as this level of delicacy may be enough to kill a simple normie.
        </div>
    </div>
</div>
<div class="item">
    <img class="pic myst" src="quest.jpg">
    <div class="explain">
        <div class="entry">The Mystery Box</div>
        <div class="price">$11.99</div>
        <div class="describe">Mix and match any available Graham Cracker and Milk combination from our menu. Go hog wild.
            We totally won't judge you for it. Maybe your combination will be so good it'll receive the honor of menu-fication.
        </div>
    </div>
</div>      
    `;

}

export {populateMenu}