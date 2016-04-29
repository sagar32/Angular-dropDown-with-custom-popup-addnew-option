(function(window,undefined){

  function TechHiveModule() {
    this.initDropDown = function initDropDown(options,target,addnew) {
      	var datatest='';
      	var addnewData="";
			for(var i=0;i<options.length;i++){
				datatest +='<li value='+options[i].value+'>'+options[i].title+'</li>';
			}
			if(target && addnew == true){
				var target=target || "#";
				var addnewData=[
					'<div class="ac-footer" data-uk-modal="{target:\'',
									'#'+target,
										'\'}"><sapn>+ADD NEW</sapn>',
							'</div>',
					    '</div>'
				].join("");
			}
			var content=[
				'<div class="TechHive">',
		    		'<div class="ac-pad">',
		    			'<input tabindex=0 type="text" id="inputTextTechHive" class="ac-pad-textbox"/>',
				    	'<ul>',
							datatest,				
						'</ul>',			
					'</div>',
					addnewData
				].join(""); 
			return content;
    };
    this.updateDropDown = function updateDropDown(newOption){
    	var newDatatest='';
    	for(var i=0;i<newOption.length;i++){
				newDatatest +='<li value='+newOption[i].value+'>'+newOption[i].title+'</li>';
			}
		var newContent=[
			'<ul>',
				newDatatest,
			'</ul>'
		].join("");
		return newContent;
    };
   
}
  window.TechHiveModule = TechHiveModule;
})(window);
var TechHive = new TechHiveModule();
