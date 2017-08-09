/**
 * Flyout Menu Element
 * @param {Object} attrs
 *  @param position
 *  @param size
 *  @param icon
 *  @param title
 *  @param buttons
 *  @param text
 *  @param callback
 */
function Flyout(attrs) {
  this.setConfig(attrs);
  // Flyout Element
  this.element = document.createElement('div');
  this.element.id = 'flyout-container';

  // Flyout Menu
  this.menu = document.createElement('div');
  this.menu.classList.add('flyout-menu');

  // Flyout Icon Button
  this.icon = document.createElement('button');
  this.icon.type = 'button';
  this.icon.classList.add('flyout-menu-icon', 'btn', 'btn-default');
  this.icon.setAttribute('aria-label', 'Justify');
  this.icon.onclick = this.toggle.bind(this);
  this.icon.style.float = this.config.offPosition;

  // Flyout Icon Symbol
  this.iconSpan = document.createElement('span');
  this.iconSpan.className += (attrs && attrs.icon) ? attrs.icon : 'glyphicon glyphicon-align-justify';
  this.iconSpan.setAttribute('aria-hidden', 'true');

  // Flyout Title
  this.title = document.createElement('span');
  this.title.classList.add('flyout-title');
  this.title.textContent = (attrs && attrs.title) ? attrs.title : 'Menu';

  // Build Element
  this.icon.appendChild(this.iconSpan);
  this.menu.appendChild(this.icon);
  this.menu.appendChild(this.title);
  this.element.appendChild(this.menu);

  // Build & Append Flyout Buttons
  if (attrs && attrs.buttons) {
    var self = this;
    var idx = 0;
    attrs.buttons.forEach(function (btn) {
      var name = 'btn-' + idx++
      self[name] = document.createElement('div');
      self[name].classList.add('flyout-button');
      self[name].textContent = btn.text;
      self[name].onclick = function () {
        self.setActiveButton.call(self, name);
        if (btn.callback) btn.callback();
      };
      self.menu.appendChild(self[name]);
    });

  }

  // Styles
  this.menu.classList.add('flyout-transition');
  this.icon.classList.add('flyout-transition');

  this.menu.style.width = this.config.eleSize;
  this.menu.style.height = '100%';

  this.menu.style.backgroundImage = 'linear-gradient(rgb(254, 254, 254), rgb(238, 238, 238))';
  this.icon.style.backgroundColor = 'transparent';

  // Set initial state
  this.init();

}
Flyout.prototype.setConfig = function (attrs) {
  this.config = {
    position: (attrs && attrs.position) ? attrs.position : 'left',
    offPosition: (attrs && attrs.position && attrs.position === 'right') ? 'left' : 'right',
    eleSize: (attrs && attrs.size) ? attrs.size : '300px',
    state: (attrs && attrs.state) ? attrs.state : 'close'
  };
};
Flyout.prototype.init = function () {
  if (this.config.state === 'close') {
    this.close();
  } else {
    this.open();
  }
};
Flyout.prototype.open = function () {
  this.menu.style[this.config.position] = '0';
  this.icon.style[this.config.position] = '0';
  this.menu.classList.add('flyout-shadow-' + this.config.offPosition);
  this.menu.setAttribute('flyout-state', 'open');
};
Flyout.prototype.close = function () {
  this.menu.style[this.config.position] = '-' + this.config.eleSize;
  this.icon.style[this.config.position] = '35px';
  this.menu.classList.remove('flyout-shadow-' + this.config.offPosition);
  this.menu.setAttribute('flyout-state', 'close');
};
Flyout.prototype.toggle = function () {
  var tmp = this.menu.getAttribute('flyout-state');
  if (tmp === 'open') {
    this.close();
  } else {
    this.open();
  }
};
Flyout.prototype.setActiveButton = function (name) {
  console.log(name + ' clicked.');
  var btns = document.getElementsByClassName('flyout-button');
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('active');
  }
  this[name].classList.add('active');
};