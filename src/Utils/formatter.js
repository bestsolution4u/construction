const formatPhoneNumber = phoneNumberString => {
    
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');

  var length = cleaned.length;
  var totalLength = cleaned.startsWith('1') ? 11 : 10;
  for (var i = length; i < totalLength; i++) {
      cleaned += '\xa0';
  }

  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? '+1 ' : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return phoneNumberString;
};

export {formatPhoneNumber};
