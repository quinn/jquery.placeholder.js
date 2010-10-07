function supportsInputPlaceholder() {
  var i = document.createElement('input');
  return 'placeholder' in i;
}

jQuery.fn.placeholder = function () {
  var insertPlaceholder = function () {
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

  var clearPlaceholder = function () {
    var el = $(this);
    var text = el.attr('placeholder');

    el.removeClass('placeholding')
    if (el.val() == text) {
      el.val('');
    }
  }

  this
    .live('blur', insertPlaceholder)
    .live('change', insertPlaceholder)
    .live('focus', clearPlaceholder)
    .each(insertPlaceholder);
  return this;
};


jQuery(function ($) {
  if ( $(!supportsInputPlaceholder()) ) {
    $('input[placeholder]').placeholder();
  }
});
