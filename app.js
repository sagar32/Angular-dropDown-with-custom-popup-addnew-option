angular.module("MyApp",[])
	.controller("MyCtrl",function($scope){
		$scope.test="Test Success!"
		$scope.data={
				option:[{
					"id":1,
					"title":"one",
					"value":1
				},
				{
					"id":2,
					"title":"two",
					"value":2
				},
				{
					"id":3,
					"title":"three",
					"value":3
				},
				{
					"id":4,
					"title":"four",
					"value":4
				},
				{
					"id":5,
					"title":"five",
					"value":5
				},
				{
					"id":6,
					"title":"six",
					"value":6
				}]
			};
	}).directive("techhiveDropDown", function ($parse, $timeout) {
    return{
        restrict: 'AE',
        require: '^ngModel',
        scope: {
            ngModel: '=',
            options: '=?',
            addNew: '=',
            techhiveFun:'&',
            ngDisabled:"="
        },
        template: [
            '<div ng-click="techhiveFun()" class="ac-box-select ac-box" id="{{::uniqueId}}">',
            '<sapn class="ac-select">--Select--</sapn>',
            '<span class="ac-dropdown-icon">',
            '<i  class="material-icons ng-binding">&#xE313;</i>',
            '</span>',
            '</div>'
        ].join(''),
        link: function (scope, elm, attr, ctrl) {
            scope.uniqueId = 'Tech' + Math.floor((Math.random() * 9999) + 1);
            if (!TechHive) {
                throw new Error("techhive.dropdown JavaScript library should be loaded before using this angular module.");
            }
            
            var $this = $(this);
            var $elem = $(elm); // <techhive-drop-down>
            $elem.addClass("techhiveElement");
            var modalname = attr.techhiveModel;
            var addnew = scope.addNew;
            var $window = $(window), previousScrollTop = 0, scrollLock = false;// scoll stop
            $timeout(function () {
                var iddd = $elem.children().attr("id");
                var $firstId = $("#" + iddd);
                if (scope.ngModel && scope.ngModel != "") {
                    var fruitName = $.grep(scope.options, function (option) {
                        return option.id == scope.ngModel;
                    })[0];
                    if(fruitName){
                        $firstId.find(".ac-select").text(fruitName.title);
                    }
                }
               var content = TechHive.initDropDown(scope.options,modalname,addnew);
                $firstId.mousedown(function (e) {
                    if(scope.ngDisabled){
                        e.preventDefault();
                    }else{
                        if (!$firstId.parent().children().hasClass('TechHive')) {
                            $firstId.addClass("ac-box-open");
                            $firstId.parent().append(content);
                        } else {
                            $firstId.removeClass("ac-box-open");
                            $firstId.next().remove();
                        }  
                    }
                    
                });// add dropDown onmousedown

                $firstId.mouseup(function () {
                    $(".ac-pad-textbox").focus();
                });// add dropDown onmousedown

                $firstId.parent().on("blur", ".ac-pad-textbox", function () {
                    $firstId.removeClass("ac-box-open");
                    $firstId.next().remove();
                });// remove dropDown

                $firstId.parent().on("mousedown", ".ac-pad ul li", function () {
                    //upadate value of ngModel with value attached to DOM value attribute
                    var myval = $(this).attr("value");
                    scope.$apply(function () {
                        ctrl.$setViewValue(myval);
                    });
                    var fruitName = $.grep(scope.options, function (option) {
                        return option.id == scope.ngModel;
                    })[0];
                    if(fruitName){
                        $firstId.find(".ac-select").text(fruitName.title);
                    }

                    $firstId.removeClass("ac-box-open");
                    $firstId.next().remove();

                }); // remove drop down when click on option li

                $firstId.parent().on("mousedown", ".ac-footer", function () {
                    $(".ac-footer").click();
                    $firstId.removeClass("ac-box-open");
                    $firstId.next().remove();
                }); // remove dropdown when click on addnew option
                $(document).mouseleave(function () {
                    $(".ac-pad-textbox").focusout();
                });// remove dropdown when mouseleave window

                $firstId.parent().on(".ac-pad-textbox").keyup(function(){
                    var results = [];
                    var textVal= $(".ac-pad-textbox").val();
                    for (var i=0 ; i < scope.options.length ; i++)
                    {
                        if (scope.options[i]["title"].toLowerCase().indexOf(textVal.toLowerCase()) !== -1) {
                            results.push(scope.options[i]);   
                        }
                    }
                    var nUl =TechHive.updateDropDown(results);
                    $firstId.next().find("ul").html(nUl);

                });
                $firstId.parent().on("mouseenter",".TechHive ul",function(){
                    scrollLock =true;
                });// mouse enetr window scroll stop
                $firstId.parent().on("mouseleave",".TechHive ul",function(){
                    scrollLock =false;
                });// mouse leave window scroll start normal
                $window.scroll(function(event) {     
                    if(scrollLock) {
                        $window.scrollTop(previousScrollTop); 
                    }
                
                    previousScrollTop = $window.scrollTop();
                }); // scoll stop if scollLock="true" else normal.
                
            }, 10);
        }
    }
});