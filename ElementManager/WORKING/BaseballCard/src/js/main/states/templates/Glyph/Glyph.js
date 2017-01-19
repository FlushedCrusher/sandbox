/**
 * Glyph Icon UI Component
 * 
 * @returns Glyph
 */

function Glyph($injector) {
  'use strict';

  var self = this;

  var ElementManager = $injector.get('ElementManager');

  var GlyphBtn = $injector.get('GlyphBtn');
  var GlyphBtnOptions = $injector.get('GlyphBtnOptions');
  ElementManager.register('GlyphBtn', GlyphBtn);

  /* ****************************************
   * Glyph Icon
   **************************************** */
  var glyphBtnOptions = new GlyphBtnOptions();
  glyphBtnOptions
    .setAttribute({
      key: 'href',
      value: ''
    });

  self.component = ElementManager.construct('GlyphBtn', glyphBtnOptions);
  self.new = function() {
    return ElementManager.construct('GlyphBtn', glyphBtnOptions);
  };

}

module.exports = Glyph;