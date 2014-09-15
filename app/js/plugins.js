/*global $:false */
/*global $.:false */
/*global Keen:false */
/*global yamlPageName:false */


// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    // CONTRIBUTE
    var contribute_button = '#contribute a';
    var active_wrapper = '.overlay';
    $(contribute_button).click(function(){
        $('body').addClass('js-show-contribute-form');
        //$( '.form' ).load( '/contribute/index.html' );
        return false;
    });
    $(active_wrapper).click(function(){
        $('body').removeClass('js-show-contribute-form');
        return false;
    });
}());

// Place any jQuery/helper plugins in here.

        // ******************************************
        // BEGIN KEEN.io variables

        var client = new Keen({
          projectId: '5408a15980a7bd5add000002',
          writeKey: 'd30f3c91fb2586aa5509aeede958a531b8149bff373f50acaeec94ff330c0f701221cf07135b37f589806d297865eb62e6c99ceb62b39aa90d72ef90e6403075cacfaf7fa96511a07f8f62607ca1d7e68b36f860ad47b6ef33a964282ef90da41c39f33d0fa5addfc16b552f3ced9151',
          readKey: 'c1bdd801430c691dffbe9d7329553d09aaa1ac8b96be7468dde8f3d58e3796abbeddc67774150cc1eba521543d225f32d779886bc2dd95b9206efda052d9437f62804766febb8bd3d3ddd75a1f7446ff6dd3507df7666a89c89fe2533c1b3a47f0d6ec97ff425af9d00a21e78dca8d47'
        });
        // END KEEN.io variables
        // ******************************************


        // ******************************************
        // BEGIN KEEN.io page view analytics
        // Configure an instance for your project
          var pageview = {
            pageTitle: yamlPageName,
            keen : {
            addons :
                    [
                      {
                          name : 'keen:ip_to_geo',
                          input : {
                              ip : 'ip_address'
                          },
                          output : 'ip_geo_info'
                      },
                      {
                          name : 'keen:ua_parser',
                          input : {
                              ua_string : 'user_agent'
                          },
                          output : 'parsed_user_agent'
                      },
                      {
                          name : 'keen:url_parser',
                          input : {
                              url : 'page_url'
                          },
                          output : 'parsed_page_url'
                      }
                    ]
                  },

            page_url: document.baseURI,
            referrer: document.referrer,
            ip_address : '${keen.ip}',
            user_agent : '${keen.user_agent}'
          };
          client.addEvent('pageview',pageview);

        // END KEEN.io page view analytics
        // ******************************************

        // ******************************************
        // BEGIN KEEN.io contribute form capture

        function contributeSubmit(){ // jshint ignore:line
            var values = {};
              $.each($('#contributeForm').serializeArray(), function(i, field) {
                  values[field.name] = field.value;
              });

            //  console.log(values);
          var formsubmit = {
            formInfo : {
              formName: 'contribute',
              formEngine: 'brace.io'
            },
            submission: values,
            keen : {
                addons :
                    [
                      {
                          'name' : 'keen:ip_to_geo',
                          'input' : {
                              'ip' : 'ip_address'
                          },
                          'output' : 'ip_geo_info'
                      },
                      {
                          'name' : 'keen:ua_parser',
                          'input' : {
                              'ua_string' : 'user_agent'
                          },
                          'output' : 'parsed_user_agent'
                      },
                      {
                          'name' : 'keen:url_parser',
                          'input' : {
                              'url' : 'page_url'
                          },
                          'output' : 'parsed_page_url'
                      }
                    ]
                  },

            page_url: document.baseURI,
            referrer: document.referrer,
            ip_address : '${keen.ip}',
            user_agent : '${keen.user_agent}'
          };
         return client.trackExternalLink(event, 'contribute_form', formsubmit);

        }
        // END KEEN.io contribute form capture
        // ******************************************