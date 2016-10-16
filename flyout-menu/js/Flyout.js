function Flyout( attrs ) {
    // Flyout Element
    this.element = document.createElement('div');
    this.element.classList.add('flyout-menu');
    // Flyout Icon Button
    this.icon = document.createElement('button');
    this.icon.type = 'button';
    this.icon.classList.add('flyout-menu-icon', 'btn', 'btn-default');
    this.icon.setAttribute('aria-label', 'Justify');
    this.icon.onclick = this.toggle.bind(this);
    this.icon.style.float = 'right';
    // Flyout Icon Symbol
    this.iconSpan = document.createElement('span');
    this.iconSpan.classList.add('glyphicon', 'glyphicon-align-justify');
    this.iconSpan.setAttribute('aria-hidden', 'true');
    // Flyout Title
    this.title = document.createElement('span');
    this.title.classList.add('flyout-title');
    this.title.textContent = 'TITLE';
    // Flyout Buttons
    this.testButton = document.createElement('div');
    this.testButton.classList.add('flyout-button');
    this.testButton.textContent = 'TEST BUTTON';
    this.testButton2 = document.createElement('div');
    this.testButton2.classList.add('flyout-button');
    this.testButton2.textContent = 'TEST BUTTON';
    // Build Element
    this.icon.appendChild(this.iconSpan);
    this.element.appendChild(this.icon);
    this.element.appendChild(this.title);
    this.element.appendChild(this.testButton);
    this.element.appendChild(this.testButton2);

    // Styles
    this.element.classList.add('flyout-transition');
    this.icon.classList.add('flyout-transition');
    
    this.element.style.width = '300px';
    this.element.style.height = '100%';
    
    this.element.style.backgroundColor = '#ddd';
    this.icon.style.backgroundColor = '#ddd';
    
    // Set initial state
    this.open();
    
}
Flyout.prototype.open = function() {
    this.element.style.left = '0';
    this.icon.style.left = '0';
    this.icon.style.backgroundColor = '#ddd';
    this.element.classList.add('flyout-shadow-right');
    this.element.setAttribute('flyout-state', 'open');
};
Flyout.prototype.close = function() {
    this.element.style.left = '-300px';
    this.icon.style.left = '35px';
    this.icon.style.backgroundColor = 'transparent';
    this.element.classList.remove('flyout-shadow-right');
    this.element.setAttribute('flyout-state', 'close');
};
Flyout.prototype.toggle = function() {
    var tmp = this.element.getAttribute('flyout-state');
    if(tmp === 'open') {
        this.close();
    } else {
        this.open();
    }
};