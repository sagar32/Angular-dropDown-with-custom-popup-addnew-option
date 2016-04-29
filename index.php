<!DOCTYPE html>
<html ng-app='MyApp'>
<head>
<title>Blank Angularjs Structure</title>
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="uikit.almost-flat.min.css" />
<script type="text/javascript" src="jQuery.min.js"> </script>
<script type="text/javascript" src="angular.min.js"> </script>

<script type="text/javascript" src="uikit.js"> </script>
<script type="text/javascript" src="techhive.dropdown.js"> </script>
<script type="text/javascript" src="app.js"> </script>
</head>
<body ng-controller='MyCtrl'>
    <techhive-drop-down class="class1" ng-model="test" ng-init="test='5'" options="data.option" add-new="true" techhive-model="edit_category">
    </techhive-drop-down>
    <h1>{{test}}</h1> 
    <hr/>
    <techhive-drop-down class="class2" ng-model="test2" ng-init="test2='2'" options="data.option"  >
    </techhive-drop-down>
    <h1>{{test2}}</h1> 

    <techhive-drop-down class="class3" ng-model="test3" ng-init="test3='3'" options="data.option" add-new="true" techhive-model="edit_category">
    </techhive-drop-down>
    <h1>{{test3}}</h1> 


  <form name="edit_category_form" novalidate>
                            <div class="uk-modal" id="edit_category">
                                <div class="uk-modal-dialog">
                                    <div class="uk-modal-header">
                                        <h3 class="uk-modal-title">Edit Category Information</h3>
                                    </div>
                                    <div class="uk-grid">
                                        <div class="uk-width-large-1">
                                            <div class="uk-form-row">
                                                <div class="md-input-wrapper md-input-filled">
                                                    <label>Sub Category Name</label>
                                                    <input class="md-input label-fixed ng-pristine ng-untouched ng-valid ng-isolate-scope md-input-processed " ng-model="edit_category.category_id" md-input="" type="hidden">
                                                    <input class="md-input label-fixed ng-pristine ng-untouched ng-valid ng-isolate-scope md-input-processed " ng-model="edit_category.category_name" md-input="" type="text">
                                                    <span class="md-input-bar"></span>
                                                </div>

                                                <div class="uk-form-row">
                                                    <div class="md-input-wrapper">
                                                        <label>Category Name</label>
                                                        <input value="" style="display: none;" tabindex="-1" class="ng-pristine ng-untouched ng-valid ng-isolate-scope selectized ng-valid-required" config="selectize_b_config" options="selectize_b_data.options" ng-model="edit_category.category_type" name="selectize_b" selectize="" type="text"><div class="selectize_fix"></div>
                                                        <span class="md-input-bar"></span>
                                                    </div>

                                                </div>

                                                <div class="md-input-wrapper md-input-filled">
                                                    <label>Sub Category Description</label>
                                                    <textarea class="md-input ng-pristine ng-untouched ng-valid ng-isolate-scope md-input-processed" ng-model="edit_category.category_desc" md-input=""></textarea>
                                                    <span class="md-input-bar"></span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="uk-modal-footer uk-text-right">
                                        <button type="button" class="md-btn md-btn-flat uk-modal-close">Cancel</button>
                                        <button type="submit" ng-click="edit_category()" class="md-btn md-btn-flat md-btn-flat-primary uk-modal-close">Save Category</button>
                                    </div>
                                </div>
                            </div>
                        </form>
</body>
</html>