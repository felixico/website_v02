/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

 $.ajax({
  type: 'POST',
  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
  data: {
    ‘key’: ‘IKXGKKFrJA848qFO6_OzeQ’,
    ‘message’: {
      ‘from_email’: ‘YOUR@EMAIL.HERE’,
      ‘to’: [
          {
            ‘email’: ‘rico@felixico.co’,
            ‘name’: ‘Rico’,
            ‘type’: ‘to’
          },
          {
            ‘email’: ‘manny@felixico.co’,
            ‘name’: ‘Manny’,
            ‘type’: ‘to’
          }
        ],
      ‘autotext’: ‘true’,
      ‘subject’: ‘DJ Services inquiry’,
      ‘html’: ‘YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!’
    }
  }
 }).done(function(response) {
   console.log(response); // if you're into that sorta thing
 });
