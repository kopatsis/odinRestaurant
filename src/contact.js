function populateContact(){
    var actual = document.querySelector('.actual');

    actual.innerHTML = `
    <div class="header">How to contact us: </div>
<div class="text explain">We recommend you do not contact us unless it is an emergency as we are very busy making the best Graham
    Crackers and Milk the universe has ever seen. But if you absolutely must, please use the form below.
</div>
<div class="form-head">M'GooBoo Contact Form:</div>
<form method="POST" action="">
    <div class="names wrap">
        <div class="firstname split inner">
            <label for="firstname">First Name:</label>
            <input id="firstname" type="text" name="firstname" />
        </div>
        <div class="lastname inner">
            <label for="lastname">Last Name:</label>
            <input id="lastname" type="text" name="lastname" />
        </div>
    </div>
    <div class="email inner">
        <label for="email">Email Address:</label>
        <input id="email" type="email" name="email" />
    </div>
    <div class="numbers wrap">
        <div class="phone split inner">
            <label for="phone">Phone Number:</label>
            <input id="phone" type="tel" name="phone" />
        </div>
        <div class="income inner">
            <label for="income">Annual Income:</label>
            <div class="income mini">
                <span class="currency">$</span>
                <input id="income" type="number" min="1" step="any" name="income" />
            </div>
        </div>
    </div>
    <div class="textfield inner">
        <label for="textfield">Your comment/complaint:</label>
        <textarea id="textfield" name="textfield"></textarea>
    </div>
    <input id="submit" type="submit" value="Submit" />
</form>
    `;
}

export {populateContact}