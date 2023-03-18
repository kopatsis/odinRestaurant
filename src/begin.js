function populateBeginning(){
    var content = document.querySelector('#content');
    content.innerHTML = `
    <div class="title-hold">
    <div class="title">M'GooBoo's Graham Crackers and Milk</div>
</div>
<div class="Options-hold">
    <ul class="Options">
        <li>About</li>
        <li>Menu</li>
        <li>Contact</li>
    </ul>
</div>
<div class="actual-hold">
    <div class="actual">

    </div>
</div>
    `;
    // const boiler_title_hold = document.createElement('div');
    // boiler_title_hold.classList.add("title-hold");
    // const boiler_title = document.createElement('div');
    // boiler_title.classList.add('title');
    // boiler_title.textContent = "M'GooBoo's Graham Crackers and Milk";
    // boiler_title_hold.appendChild(boiler_title);
    // content.appendChild(boiler_title_hold);

    // const boiler_options_hold = document.createElement('div');
    // boiler_options_hold.classList.add("Options-hold");
    // content.appendChild(boiler_options_hold);

    // const boiler_options = document.createElement('ul');
    // boiler_options.classList.add("Options");
    // boiler_options_hold.appendChild(boiler_options);

    // var boiler_opt_li = []
    // boiler_opt_li.push(document.createElement('li'));
    // boiler_opt_li.push(document.createElement('li'));
    // boiler_opt_li.push(document.createElement('li'));
    // boiler_opt_li[0].textContent = "About";
    // boiler_opt_li[1].textContent = "Menu";
    // boiler_opt_li[2].textContent = "Contact";

    // boiler_options.appendChild(boiler_opt_li[0]);
    // boiler_options.appendChild(boiler_opt_li[1]);
    // boiler_options.appendChild(boiler_opt_li[2]);

    // const boiler_actual_hold = document.createElement('div');
    // boiler_actual_hold.classList.add('actual-hold');
    // content.appendChild(boiler_actual_hold);

    // const actual_b = document.createElement('div');
    // actual_b.classList.add('actual');
    // boiler_actual_hold.appendChild(actual_b);
}

export {populateBeginning}