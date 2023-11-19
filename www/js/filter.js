function getOffset( el ) 
{
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
function truncateOnWord(str, limit) 
{
	var trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';
	var reg = new RegExp('(?=[' + trimmable + '])');
	var words = str.split(reg);
	var count = 0;
	return words.filter(function(word) {
		count += word.length;
		return count <= limit;
	}).join('');
}
function trim(str) 
{
    return str.replace(/\s+/g, '');;
}
function include(arr,obj)
{
	if(arr) return (arr.indexOf(obj) != -1);
}
function inArray(needle, haystack)
{
	var length = haystack.length;
	for(var i = 0; i < length; i++)
	{
		if(haystack[i] == needle) return true;
	}
	return false;
}
function isNumber(n){return !isNaN(parseFloat(n)) && isFinite(n);}
function htmlspecialchars_decode(string, quoteStyle)
{
  var optTemp = 0
  var i = 0
  var noquotes = false

  if (typeof quoteStyle === 'undefined') {
    quoteStyle = 2
  }
  string = string.toString()
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
  var OPTS = {
    'ENT_NOQUOTES': 0,
    'ENT_HTML_QUOTE_SINGLE': 1,
    'ENT_HTML_QUOTE_DOUBLE': 2,
    'ENT_COMPAT': 2,
    'ENT_QUOTES': 3,
    'ENT_IGNORE': 4
  }
  if (quoteStyle === 0) {
    noquotes = true
  }
  if (typeof quoteStyle !== 'number') {
    // Allow for a single string or an array of string flags
    quoteStyle = [].concat(quoteStyle)
    for (i = 0; i < quoteStyle.length; i++) {
      // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
      if (OPTS[quoteStyle[i]] === 0) {
        noquotes = true
      } else if (OPTS[quoteStyle[i]]) {
        optTemp = optTemp | OPTS[quoteStyle[i]]
      }
    }
    quoteStyle = optTemp
  }
  if (quoteStyle & OPTS.ENT_HTML_QUOTE_SINGLE) {
    // PHP doesn't currently escape if more than one 0, but it should:
    string = string.replace(/&#0*39;/g, "'")
    // This would also be useful here, but not a part of PHP:
    string = string.replace(/&apos;|&#x0*27;/g, "'");
  }
  if (!noquotes) {
    string = string.replace(/&quot;/g, '"')
  }
  // Put this in last place to avoid escape being double-decoded
  string = string.replace(/&amp;/g, '&')

  return string
}

function nl2br (str, isXhtml)
{
  if (typeof str === 'undefined' || str === null) {
    return ''
  }

  // Adjust comment to avoid issue on locutus.io display
  var breakTag = (isXhtml || typeof isXhtml === 'undefined') ? '<br ' + '/>' : '<br>'

  return (str + '')
    .replace(/(\r\n|\n\r|\r|\n)/g, breakTag + '$1')
}