# Check DOM
Have the function `CheckDOM(strParam)` read the `strParam` parameter being passed which will be a string of HTML elements and plain text.

The elements that will be used are: b, i, em, div, p.

Your program should support 3 cases:
- the string is a correct sequence of nested HTML elements, it should return `true`
- the string is almost correct: by changing a single tag you can make it correct, it should return first tag to change. Changing a tag does not include adding or removing a tag, or changing the opening into a closing tag and vice versa.
- the string is incorrect (and to be correct it would require to change more than one element), your program should return `false`.


## Examples
Input: "\<div>\<b>\<p>hello world\</p>\</b>\</div>"
Output: true
Reason: the html is nested correctly

Input: "\<div>\<i>hello\</i>world\</b>"
Output: "div"
Reason: if the first `<div>` element were changed into a `<b>`, the string would be properly nested

Input: "\</div>\<p>\</p>\<div>"
Output: false
Reason: the order of opening and closing tags is not respected, changing any one tag cannot make it correct
