function Accordion(attrs) {
  this.setConfig(attrs);
  // Accordion element
  this.element = document.createElement('div');
  this.element.id = 'accordion-container';
  this.element.classList.add('container');

  // Accordion Row
  this.row = document.createElement('div');
  this.row.id = 'accordion-row';
  this.row.classList.add('row');

  // Accordion Content
  this.content = document.createElement('div');
  this.content.id = 'accordion-content';
  this.content.classList.add('accordion-content');

  // Accordion Group
  this.group = document.createElement('div');
  this.group.id = 'accordion';
  this.group.classList.add('panel-group');
  this.group.setAttribute("role", "tablist");
  this.group.setAttribute("aria-multiselectable", "true");

  // Build Element
  this.content.appendChild(this.group);
  this.row.appendChild(this.content);
  this.element.appendChild(this.row);

  // Build & Append Panels
  if(attrs && attrs.panels) {
    var self = this;
    var idx = 0;
    attrs.panels.forEach((panel) => {
      var name = 'panel-' + idx
      var toggle = 'collapse-' + idx++; 

      var pnl = document.createElement('div');
        pnl.classList.add('panel', 'panel-default');
  
      var hdr = document.createElement('div');
        hdr.id = name;
        hdr.classList.add('panel-heading');
        hdr.setAttribute("role", "tab");

      var title = document.createElement(panel.headingElement);
        title.classList.add('panel-title');

      var hdng = document.createElement('a');
        hdng.setAttribute('role', 'button');
        hdng.setAttribute('data-toggle', 'collapse');
        hdng.setAttribute('data-parent', '#accordion');
        hdng.setAttribute('href', '#' + toggle);
        hdng.setAttribute('aria-expanded', panel.expanded);
        hdng.setAttribute('aria-controls', toggle);
        !panel.expanded && hdng.classList.add('collapsed');
        hdng.innerText = panel.headingText;

      var ctn = document.createElement('div');
        ctn.id = toggle;
        ctn.classList.add('panel-collapse', 'collapse');
        panel.expanded && ctn.classList.add('in');
        ctn.setAttribute('role', 'tabpanel');
        ctn.setAttribute('aria-labelledby', name);

      var bdy = document.createElement('div');
        bdy.classList.add('panel-body');
        bdy.innerText = panel.contentText;

      title.appendChild(hdng);
      hdr.appendChild(title);
      ctn.appendChild(bdy);
      pnl.appendChild(hdr);
      pnl.appendChild(ctn);
      self[name] = pnl;
      self.group.appendChild(self[name]);
    });
  }

  // Set initial State
  this.init();
}

Accordion.prototype.setConfig = function(attrs) {
  'use strict';
  this.config = {};
};

Accordion.prototype.init = function() {
  'use strict';
};