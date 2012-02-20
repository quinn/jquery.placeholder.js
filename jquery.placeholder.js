jQuery.supportsInputPlaceholder = function() {
  var i = document.createElement('input');
  return 'placeholder' in i;
}

jQuery.insertPlaceholder = function () {
  var el = $(this);
  var text = el.attr('placeholder');

  if (el.val() == "" || el.val() == text) {
    el.val(text);
    el.addClass('placeholding');
  }
  else {
    el.removeClass('placeholding');
  }
}

jQuery.clearPlaceholder = function () {
  var el = $(this);
  var text = el.attr('placeholder');

  el.removeClass('placeholding')
  if (el.val() == text) {
    el.val('');
  }
}

jQuery.fn.placeholder = function () {

  this
    .live('blur', jQuery.insertPlaceholder)
    .live('change', jQuery.insertPlaceholder)
    .live('focus', jQuery.clearPlaceholder)
    .each(jQuery.insertPlaceholder);

  return this;
};

jQuery(function ($) {
  if ( !jQuery.supportsInputPlaceholder() ) {
    $('form').live('submit', function () {
      $(this).find('input[placeholder], textarea[placeholder]').each(function () {
        jQuery.clearPlaceholder.apply(this);
      });
    });

    $('input[placeholder], textarea[placeholder]').placeholder();
  }
});
