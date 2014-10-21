/*
Copyright 2014 Curtis Morte

Version: 1.0.0 Timestamp: Mon Oct 20 13:40:09 PST 2014

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/

(function ( $ ) {
	"use strict";
	
	$.fn.anchorToSelect = function( options ){
		
		var settings = $.extend({
			//These are the default options
			container: [],
			idName: 'anchortoselect',
			debugFlag: 0,
			placeholder: 'Select a page to visit'
		}, options );
		
		//Variable Declarations
		var build = "<option selected disabled>"+settings.placeholder+"</option>";
		
		//Did we receive some elements to iterate over?
		if(settings.container.length > 0){
			settings.container.forEach(function(element){
				//Debug Setting
				if(settings.debugFlag){
					console.log("Container: " +element);
				}
				
				$(element+" a").each(function(){
					
					var linkName = $(this).text();
					
					//Debug Setting
					if(settings.debugFlag){
						console.log("	 Link: "+linkName+"\n 	      "+this.href);
					}
					
					/* If our link has text inside the anchor, add it to the build.
					 * This is to help remove links from the build that may just be icons
					 * without any text. 
					 *
					 * Bad Link: <a href="//facebook.com"><i class="fa fa-facebook"></i></a>
					 * Good Link: <a href="//facebook.com"><i class="fa fa-facebook"></i> Like us on Facebook</a>
					 */
					if(linkName != ""){
						build += "<option data-href=\""+this.href+"\">"+linkName+"</option>";	
					}
					
				});
			});
		} else {
			console.log("No element(s) in container array");
			return null;
		}
		
		//Encapsulate our build w/ <select> markup
		build = "<select id=\""+settings.idName+"\">"+build+"</select>";
		//Add the build to the page
		this.append(build);
		
		//Set a change event handler to grab the options data-href value and update the window location
		$("#"+settings.idName).on('change', function(){
			var link = $("option:selected" ,this).attr('data-href');
			window.location.href = link;
		});
		
	};
}( jQuery ));