
function populateAbout(){
    var actual = document.querySelector('.actual');

    actual.innerHTML = `
<img class="origin" src="origin.jpg">
<div class="text origin-header">Our Story:</div>
<div class="text bio">&emsp; You're probably wondering, "Graham Crackers and milk? Does that really count as a dish, much less a 
    restaurant?" The answer to all of that is a definitive YES! The sensually incomprable combination of sweet, crunchy Graham
    Crackers with cool, refreshing milk is a cultural dish that has been in the M'GooBoo family for generations. It all started when
    great-grand-M'GooBoo discovered the combination on his own, with no one else's help, back in the ancient year of 2017. Since then, 
    he made it his goal to perfect the dish, vowing to consume exclusively that and Mountain Dew Code Red. As a result, Graham Crackers and 
    Milk, as both a delicacy and a restaurant, were born.
</div>
<div class="text bio">&emsp; From our humble beginnings as a one man Graham Cracker and milk consumption machine, we have now expanded to serving others
    with not just the original recipe, but many different variations. Whether you're a chocolate fiend, cinnamon lover, or a die-hard lover of the 
    origin product, we have something for everyone. All of our products are home-made in the home of whatever company we bought our products from this time. 
    Our prices are fair with a mere 92% markup in order to make our incredible products accessible to all. Come and enjoy some classic M'GooBoo cooking!
</div>
    `;

    // const origin_pic = document.createElement('img');
    // origin_pic.classList.add('origin');
    // origin_pic.src = "origin.jpg";
    // actual.appendChild(origin_pic);

    // const origin_head = document.createElement('div');
    // origin_head.classList.add('text');
    // origin_head.classList.add('origin-header');
    // origin_head.textContent = "Our Story:";
    // actual.appendChild(origin_head);

    // const origin_bio1 = document.createElement('div');
    // origin_bio1.classList.add('text');
    // origin_bio1.classList.add('bio');
    // origin_bio1.innerHTML = '&emsp;';
    // origin_bio1.innerHTML += "You're probably wondering, 'Graham Crackers and milk? Does that really count as a dish, much less a restaurant?' The answer to all of that is a definitive YES! The sensually incomprable combination of sweet, crunchy Graham Crackers with cool, refreshing milk is a cultural dish that has been in the M'GooBoo family for generations. It all started when great-grand-M'GooBoo discovered the combination on his own, with no one else's help, back in the ancient year of 2017. Since then, he made it his goal to perfect the dish, vowing to consume exclusively that and Mountain Dew Code Red. As a result, Graham Crackers and Milk, as both a delicacy and a restaurant, were born.";
    // actual.appendChild(origin_bio1);

    // const origin_bio2 = document.createElement('div');
    // origin_bio2.classList.add('text');
    // origin_bio2.classList.add('bio');
    // origin_bio2.innerHTML = '&emsp;';
    // origin_bio2.innerHTML +=  "From our humble beginnings as a one man Graham Cracker and milk consumption machine, we have now expanded to serving others with not just the original recipe, but many different variations. Whether you're a chocolate fiend, cinnamon lover, or a die-hard lover of the origin product, we have something for everyone. All of our products are home-made in the home of whatever company we bought our products from this time. Our prices are fair with a mere 92% markup in order to make our incredible products accessible to all. Come and enjoy some classic M'GooBoo cooking!";
    // actual.appendChild(origin_bio2);
}

export {populateAbout}