angular.module('styleguide.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directives/badge/badge.tpl.html',
    "<span class=\"wfm-badge material-depth-1 grow-out\" ng-class=\"$ctrl.status\" ng-show=\"$ctrl.badgeModel>0 || $ctrl.showEmpty\">\n" +
    "  <p id=\"pulse-element\"></p>\n" +
    "  <span class=\"wfm-badge-content\" ng-if=\"$ctrl.badgeModel>0\" >\n" +
    "    {{$ctrl.badgeModel}}\n" +
    "  </span>\n" +
    "</span>\n"
  );


  $templateCache.put('directives/btn-group/btn-group.tpl.html',
    "<div class=\"wfm-btn-group\" ng-class=\"{'material-depth-1':$ctrl.btnClass == 'wfm-btn-default'}\">\n" +
    "  <button ng-repeat=\"item in $ctrl.items\" class=\"wfm-btn {{$ctrl.btnClass}}\" ng-class=\"{'{{$ctrl.selectionClass}}': $ctrl.selected === item, 'first':$first, 'last':$last}\" ng-click=\"$ctrl.output(item); $ctrl.selected = item\">{{item | translate}}</button>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/calendar-picker/calendar-picker.gregorian.template.tpl.html',
    "<wfm-calendar-picker-header class=\"con-row between-date-info-wrapper\">\n" +
    "    <div class=\"con-flex\" ng-class=\"{'notice-warning':!vm.isValid, 'notice-info':vm.isValid}\">\n" +
    "        <div tabindex=0 class=\"context-menu card-context\" ng-click=\"vm.hightLightToday()\">\n" +
    "            <i class=\"mdi mdi-calendar-range\"></i>\n" +
    "            <md-tooltip>Display Today</md-tooltip>\n" +
    "        </div>\n" +
    "        <span ng-if=\"vm.dateRangeText.length > 0\">{{vm.dateRangeText | translate}}</span>\n" +
    "    </div>\n" +
    "</wfm-calendar-picker-header>\n" +
    "<wfm-calendar-picker-body class=\"con-row\">\n" +
    "    <div class=\"con-flex date-info-wrapper\" ng-if=\"vm.singleDatePicker == undefined\">\n" +
    "        <div class=\"select-date-info-wrapper pointer\" ng-class=\"{'disabled': vm.disable=='start-date' || vm.disable=='all'}\" ng-click=\"vm.resetStartDate()\">\n" +
    "            <span class=\"date-info-label\" translate>From</span>\n" +
    "            <h1 class=\"date-info\">{{vm.pickStartDate | amDateFormat:\"LL\"}}</h1>\n" +
    "            <div class=\"clear-select-date-grow-out\">\n" +
    "                <i class=\"mdi mdi-close\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"select-date-info-wrapper pointer\" ng-class=\"{'disabled': vm.disable=='end-date' || vm.disable=='all'}\" ng-click=\"vm.resetEndDate()\">\n" +
    "            <span class=\"date-info-label\" translate>To</span>\n" +
    "            <h1 class=\"date-info\">{{vm.pickEndDate | amDateFormat:\"LL\"}}</h1>\n" +
    "            <div class=\"clear-select-date-grow-out\">\n" +
    "                <i class=\"mdi mdi-close\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"con-flex date-info-wrapper\" ng-if=\"vm.singleDatePicker !== undefined\">\n" +
    "        <div class=\"select-date-info-wrapper single-select-mode pointer\" ng-click=\"vm.resetDate()\">\n" +
    "            <span class=\"date-info-label\">SELECTED DATE</span>\n" +
    "            <h1 class=\"date-info\">{{vm.pickDate | amDateFormat:\"LL\"}}</h1>\n" +
    "            <div class=\"clear-select-date-grow-out\">\n" +
    "                <i class=\"mdi mdi-close\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"con-flex date-info-calendar-wrapper\">\n" +
    "        <div uib-datepicker ng-model=\"vm.pickDate\" ng-class=\"{'non-pointer':vm.disable === 'all'}\" ng-change=\"vm.switchDate()\" datepicker-options=\"vm.options\"></div>\n" +
    "    </div>\n" +
    "</wfm-calendar-picker-body>\n"
  );


  $templateCache.put('directives/calendar-picker/calendar-picker.jalaali.template.tpl.html',
    "<wfm-calendar-picker-header class=\"con-row between-date-info-wrapper\">\n" +
    "        <div class=\"con-flex\" ng-class=\"{'notice-warning':!vm.isValid, 'notice-info':vm.isValid}\">\n" +
    "            <div tabindex=0 class=\"context-menu card-context\" ng-click=\"vm.hightLightToday()\">\n" +
    "                <i class=\"mdi mdi-calendar-range\"></i>\n" +
    "                <md-tooltip>Display Today</md-tooltip>\n" +
    "            </div>\n" +
    "            <span ng-if=\"vm.dateRangeText.length > 0\">{{vm.dateRangeText | translate}}</span>\n" +
    "        </div>\n" +
    "    </wfm-calendar-picker-header>\n" +
    "    <wfm-calendar-picker-body class=\"con-row\">\n" +
    "        <div class=\"con-flex date-info-wrapper\" ng-if=\"vm.singleDatePicker == undefined\">\n" +
    "            <div class=\"select-date-info-wrapper pointer\" ng-class=\"{'disabled': vm.disable=='start-date' || vm.disable=='all'}\" ng-click=\"vm.resetStartDate()\">\n" +
    "                <span class=\"date-info-label\" translate>From</span>\n" +
    "                <h1 class=\"date-info jallali-start-date\">{{vm.pickStartDate | persianDate:'fullDate'}}</h1>\n" +
    "                <div class=\"clear-select-date-grow-out\">\n" +
    "                    <i class=\"mdi mdi-close\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"select-date-info-wrapper pointer\" ng-class=\"{'disabled': vm.disable=='end-date' || vm.disable=='all'}\" ng-click=\"vm.resetEndDate()\">\n" +
    "                <span class=\"date-info-label\" translate>To</span>\n" +
    "                <h1 class=\"date-info jallali-end-date\">{{vm.pickEndDate | persianDate:'fullDate'}}</h1>\n" +
    "                <div class=\"clear-select-date-grow-out\">\n" +
    "                    <i class=\"mdi mdi-close\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"con-flex date-info-wrapper\" ng-if=\"vm.singleDatePicker !== undefined\">\n" +
    "            <div class=\"select-date-info-wrapper single-select-mode pointer\" ng-click=\"vm.resetDate()\">\n" +
    "                <span class=\"date-info-label\" translate>SelectedDate</span>\n" +
    "                <h1 class=\"date-info\">{{vm.pickDate | persianDate:'fullDate'}}</h1>\n" +
    "                <div class=\"clear-select-date-grow-out\">\n" +
    "                    <i class=\"mdi mdi-close\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"con-flex date-info-calendar-wrapper\">\n" +
    "            <persian-datepicker ng-model=\"vm.pickDate\" ng-class=\"{'non-pointer':vm.disable === 'all'}\" ng-change=\"vm.switchDate()\" show-weeks=\"vm.showWeek\" custom-class=\"vm.options.customClass()\"></persian-datepicker>\n" +
    "        </div>\n" +
    "    </wfm-calendar-picker-body>\n"
  );


  $templateCache.put('directives/card-panel/card-panel.template.tpl.html',
    "<div class=\"panel material-depth-1\">\n" +
    "    <div class=\"card-panel-header-wrapper pointer\" ng-class=\"vm.setColorClass()\" ng-style=\"vm.setColor()\" ng-transclude=\"header\"\n" +
    "        card-animate=\"{{vm.open}}\" id=\"{{vm.id}}\" pre-open=\"{{vm.preOpen}}\"></div>\n" +
    "    <div class=\"card-panel-content-wrapper hidden\" ng-transclude=\"content\" id=\"{{vm.id}}\"></div>\n" +
    "</div>"
  );


  $templateCache.put('directives/cultural-datepicker/cultural-datepicker.tpl.html',
    "<div ng-if=\"isJalaali\" class=\"wfm-datepicker-wrap\" style=\"display:inline-block; min-height:290px;\">\n" +
    "  <persian-datepicker ng-model=\"dt\" show-weeks=\"true\" class=\"wfm-datepicker\"></persian-datepicker>\n" +
    "</div>\n" +
    "<div ng-if=\"isGregorian\" class=\"wfm-datepicker-wrap\" style=\"display:inline-block; min-height:290px;\">\n" +
    "  <div uib-datepicker show-weeks=\"true\" ng-model=\"dt\" class=\"wfm-datepicker\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/date-range-picker/date-range-picker.tpl.html',
    "<div class=\"wfm-date-range-picker\">\n" +
    "	<div ng-show=\"!displayPopup()\">\n" +
    "		<div class=\"con-row\">\n" +
    "			<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "				<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "					<div class=\"sub-header\">\n" +
    "						<span>{{::xxFrom}}</span>: <strong>{{ startDate | date: dateFormat }}</strong>\n" +
    "					</div>\n" +
    "					<div ng-show=\"isGregorian\" uib-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "				<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "					<div class=\"sub-header\">\n" +
    "						<span>{{::xxFrom}}</span>: <strong>{{startDate | persianDate:'shortDate' }}</strong>\n" +
    "					</div>\n" +
    "					<persian-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "					</persian-datepicker>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "				<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "					<div class=\"sub-header\">\n" +
    "						<span>{{::xxTo}}</span>: <strong>{{ endDate | date: dateFormat }}</strong>\n" +
    "					</div>\n" +
    "					<div uib-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "				<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "					<div class=\"sub-header\">\n" +
    "						<span>{{::xxTo}}</span>: <strong>{{ endDate | persianDate:'shortDate' }}</strong>\n" +
    "					</div>\n" +
    "					<persian-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker inline-datepicker\">\n" +
    "					</persian-datepicker>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div ng-repeat=\"validator in validators\" ng-if=\"displayError(validator.key)\" class=\"error-msg-container error-msg-popup-container alert-error notice-spacer\">\n" +
    "			<i class='mdi mdi-alert-octagon'></i><span translate>{{validator.message}}</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div ng-show=\"displayPopup()\">\n" +
    "		<div class=\"wfm-datepicker-controllers-container\">\n" +
    "			<div tabindex=0 class=\"context-menu card-context popup-control\" ng-click=\"displayCalendars = !displayCalendars\">\n" +
    "				<i class=\"mdi mdi-calendar\"></i>\n" +
    "			</div>\n" +
    "			<div tabindex=0 class=\"start-date-indicator\" ng-click=\"displayCalendars = !displayCalendars\">\n" +
    "					<span class=\"pointer\">{{::xxFrom}}: </span><span ng-if=\"isGregorian\" class=\"pointer\">{{ startDate | date: dateFormat }}</span><span ng-if=\"isJalaali\" class=\"pointer\">{{ startDate | persianDate:'shortDate' }}</span>\n" +
    "			</div>\n" +
    "			<div tabindex=0 ng-click=\"displayCalendars = !displayCalendars\">\n" +
    "					<span class=\"pointer\">{{::xxTo}}: </span><span ng-if=\"isGregorian\" class=\"pointer\">{{ endDate | date: dateFormat }}</span><span ng-if=\"isJalaali\" class=\"pointer\">{{ endDate | persianDate:'shortDate' }}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"wfm-datepicker-container modal-box\" ng-show=\"displayCalendars\">\n" +
    "			<div class=\"modalbg\" ng-click=\"hideDateRangePicker()\"></div>\n" +
    "			<div class=\"con-row wfm-datepicker-popup-row\">\n" +
    "				<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "					<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "						<div ng-show=\"isGregorian\" uib-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "					<div class=\"wfm-datepicker-wrap date-range-start-date\">\n" +
    "						<persian-datepicker ng-model=\"startDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "						</persian-datepicker>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"con-flex line-center\" ng-show=\"isGregorian\">\n" +
    "					<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "						<div uib-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"con-flex line-center\" ng-show=\"isJalaali\">\n" +
    "					<div class=\"wfm-datepicker-wrap date-range-end-date\">\n" +
    "						<persian-datepicker ng-model=\"endDate\" datepicker-options=\"datepickerOptions\" class=\"wfm-datepicker popup-datepicker\">\n" +
    "						</persian-datepicker>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div ng-repeat=\"validator in validators\" ng-if=\"displayError(validator.key)\" class=\"error-msg-container error-msg-popup-container error-msg-popup alert-error notice-spacer\">\n" +
    "				<i class='mdi mdi-alert-octagon'></i><span translate>{{validator.message}}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>"
  );


  $templateCache.put('directives/popup-menu/popup.tpl.html',
    "<div class=\"wfm-popup-wrap animate-show modal-box\" ng-show=\"$ctrl.show\">\n" +
    "  <div class='modalbg' ng-click='$ctrl.show = !$ctrl.show'></div>\n" +
    "  <div class=\"popup-panel panel material-depth-2\" ng-transclude></div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('directives/skill-picker/skill-picker.tpl.html',
    "<div class=\"con-row\">\n" +
    "    <div class=\"con-flex\">\n" +
    "        <md-autocomplete\n" +
    "        ng-attr-skillsLoaded=\"{{$ctrl.skillsLoaded}}\"\n" +
    "        md-min-length=\"0\"\n" +
    "        md-selected-item=\"$ctrl.selectedSkill\"\n" +
    "        md-search-text=\"skillFilterText.Name\"\n" +
    "        md-items=\"skill in $ctrl.skills | filter:skillFilterText\"\n" +
    "        md-selected-item-change=\"$ctrl.selectSkill(skill)\"\n" +
    "        md-item-text=\"skill.Name\"\n" +
    "        placeholder=\"{{'SelectSkill' | translate}}\">\n" +
    "            <md-item-template>\n" +
    "                <span ng-bind=\"skill.Name\"></span>\n" +
    "            </md-item-template>\n" +
    "            <md-not-found ng-cloak>\n" +
    "                {{'RepViewerNoMoreMatches'|translate}}\n" +
    "            </md-not-found>\n" +
    "        </md-autocomplete>\n" +
    "    </div>\n" +
    "    <div class=\"con-flex\">\n" +
    "        <md-autocomplete\n" +
    "        ng-attr-skillAreasLoaded=\"{{$ctrl.skillAreasLoaded}}\"\n" +
    "        md-min-length=\"0\"\n" +
    "        md-selected-item=\"$ctrl.selectedSkillArea\"\n" +
    "        md-search-text=\"skillAreaFilterText.Name\"\n" +
    "        md-items=\"skillArea in $ctrl.skillAreas | filter:skillAreaFilterText\"\n" +
    "        md-selected-item-change=\"$ctrl.selectSkillArea(skillArea)\"\n" +
    "        md-item-text=\"skillArea.Name\"\n" +
    "        placeholder=\"{{'SelectSkillGroup' | translate}}\">\n" +
    "            <md-item-template>\n" +
    "                <span ng-bind=\"skillArea.Name\"></span>\n" +
    "            </md-item-template>\n" +
    "            <md-not-found ng-cloak>\n" +
    "                {{'RepViewerNoMoreMatches'|translate}}\n" +
    "            </md-not-found>\n" +
    "        </md-autocomplete>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/time-range-picker/time-range-picker.tpl.html',
    "<div class=\"inline-flex\">\n" +
    "  <timepicker-wrap ng-model=\"startTime\"></timepicker-wrap>\n" +
    "  <timepicker-wrap ng-model=\"endTime\"></timepicker-wrap>\n" +
    "  <div ng-show=\"!disableNextDay || nextDay\">\n" +
    "    <div tabindex=0 class=\"context-menu card-context\" style=\"margin:0;\" ng-click=\"toggleNextDay()\">\n" +
    "      <i ng-if=\"!nextDay\" class=\"mdi mdi-weather-sunny\" ng-class=\"{'wfm-btn-invis-disabled': disableNextDay }\">\n" +
    "        <md-tooltip>\n" +
    "          <span translate>Today</span>\n" +
    "        </md-tooltip>\n" +
    "      </i>\n" +
    "      <i ng-if=\"nextDay\" class=\"mdi mdi-weather-night\" ng-class=\"{'wfm-btn-invis-disabled': disableNextDay }\">\n" +
    "        <md-tooltip>\n" +
    "          <span translate>OverMidnight</span>\n" +
    "        </md-tooltip>\n" +
    "      </i>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"error-msg-container ng-invalid-order alert-error notice-spacer\">\n" +
    "  <i class=\"mdi mdi-alert-octagon\"></i>\n" +
    "  <span translate>EndTimeMustBeGreaterOrEqualToStartTime</span>\n" +
    "</div>\n" +
    "<div class=\"error-msg-container ng-invalid-parse alert-error notice-spacer\">\n" +
    "  <i class=\"mdi mdi-alert-octagon\"></i>\n" +
    "  <span translate>StartTimeAndEndTimeMustBeSet</span>\n" +
    "</div>\n" +
    "<div class=\"error-msg-container ng-invalid-range alert-error notice-spacer\">\n" +
    "  <i class=\"mdi mdi-alert-octagon\"></i>\n" +
    "  <span>{{invalidTimeRange}}</span>\n" +
    "</div>"
  );


  $templateCache.put('directives/tree-picker/tree_data.tpl.html',
    "<div class=\"tree\">\n" +
    "  <ol ng-model=\"vm.data\" style=\"padding:0;\">\n" +
    "    <li node-id=\"$index\" ng-repeat=\"node in vm.data[vm.nodeChildrenName]\" ng-include=\"'tree_child_renderer.html'\"></li>\n" +
    "  </ol>\n" +
    "</div>\n" +
    "<script type=\"text/ng-template\" id=\"tree_child_renderer.html\">\n" +
    "  <div class=\"tree-toggle-group\" tree-animate>\n" +
    "    <div class=\"toggle-handle\">\n" +
    "      <i ng-hide=\"!node[vm.nodeChildrenName] || node[vm.nodeChildrenName].length==0 \" class=\"mdi mdi-chevron-right\"></i>\n" +
    "    </div>\n" +
    "    <div class=\"tree-handle-wrapper\" ng-class=\"{'selected-true': node[vm.nodeSelectedMark], 'semi-true': node[vm.NodeSemiSelected]}\" ng-click=\"vm.selectNode(this)\" ng-bind=\"node[vm.nodeDisplayName]\"></div>\n" +
    "  </div>\n" +
    "  <ol ng-model=\"node\">\n" +
    "    <li node-id=\"$index\" ng-repeat=\"node in node[vm.nodeChildrenName]\" ng-include=\"'tree_child_renderer.html'\" class=\"hidden\"></li>\n" +
    "  </ol>\n" +
    "</script>"
  );


  $templateCache.put('directives/wfm-multiple-search/wfm-multiple-search-input.tpl.html',
    "<div class=\"wfm-multiple-search-wrapper\">\n" +
    "	<input id=\"advanced-search\" class=\"advanced-input\" type=\"text\" placeholder=\"{{vm.searchTitle}}\" ng-class=\"{'expand-advanced-input': vm.showAdvancedSearchOption}\"\n" +
    "	 ng-model=\"vm.searchOptions.keyword\" ng-keyup=\"vm.searchTextInputKeyup($event)\" ng-focus=\"vm.openAdvancedSearchOption($event)\"\n" +
    "	 ng-change=\"vm.searchTextChange()\" ng-click=\"vm.openAdvancedSearchOption($event)\" />\n" +
    "	<div class=\"advanced-input-dropdown\" ng-cloak ng-if=\"vm.showAdvancedSearchOption\" outside-click=\"vm.turnOffAdvancedSearch($event);\">\n" +
    "		<div class=\"panel material-depth-1\">\n" +
    "			<div class=\"sub-header\">\n" +
    "				<h2>{{ 'Search' | translate }}</h2>\n" +
    "			</div>\n" +
    "			<form name=\"form\" class=\"wfm-form\" novalidate>\n" +
    "				<div class=\"con-row\" ng-repeat=\"searchField in vm.searchOptions.searchFields\" ng-if=\"$even\">\n" +
    "					<div class=\"full-padding\">\n" +
    "						<input autocomplete=\"off\" ng-if=\"vm.searchOptions.searchFields[$index]\" id=\"criteria-{{vm.searchOptions.searchFields[$index]}}\"\n" +
    "						 class=\"con-flex advanced-search-field\" type=\"text\" ng-keyup=\"vm.onSearchFieldInputKeyUp($event)\" placeholder=\"{{'PersonFinderField'+ vm.searchOptions.searchFields[$index]|translate}}\"\n" +
    "						 ng-model=\"vm.advancedSearchForm[vm.searchOptions.searchFields[$index]]\" maxlength=\"500\"/>\n" +
    "					</div>\n" +
    "					<div class=\"full-padding\">\n" +
    "						<input autocomplete=\"off\" ng-if=\"vm.searchOptions.searchFields[$index + 1]\" id=\"criteria-{{vm.searchOptions.searchFields[$index + 1]}}\"\n" +
    "						 class=\"con-flex advanced-search-field\" type=\"text\" ng-keyup=\"vm.onSearchFieldInputKeyUp($event)\" placeholder=\"{{'PersonFinderField'+ vm.searchOptions.searchFields[$index + 1]|translate}}\"\n" +
    "						 ng-model=\"vm.advancedSearchForm[vm.searchOptions.searchFields[$index + 1]]\" maxlength=\"500\"/>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"con-footer\">\n" +
    "					<button class=\"wfm-btn wfm-btn-invis-default\" type=\"reset\" ng-click=\"vm.clearSearch()\">{{'Clear'|translate}}</button>\n" +
    "					<button id=\"go-advanced-search\" type=\"submit\" class=\"wfm-btn wfm-btn-invis-primary\" ng-click=\"vm.advancedSearch()\">{{'Search' | translate}}</button>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"search-button inline-block\">\n" +
    "		<span class=\"cursor-pointer search-icon\" ng-focus=\"vm.turnOffAdvancedSearch()\" ng-click=\"vm.searchIconClickFn()\">\n" +
    "			<i class=\"mdi mdi-magnify\" ng-class=\"{'focusing-search': vm.searchOptions.focusingSearch}\"></i>\n" +
    "			<md-tooltip>{{'Search' | translate}}</md-tooltip>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "</div>"
  );


  $templateCache.put('directives/wfm-right-panel/wfm-right-panel.tpl.html',
    "<md-backdrop class=\"md-sidenav-backdrop md-opaque ng-scope\" ng-if=\"vm.panelOptions.showBackdrop && vm.panelOptions.panelState\" ng-click=\"vm.panelOptions.panelState = false;\"></md-backdrop>\n" +
    "\n" +
    "<div class=\"head-actions panel-menu\">\n" +
    "	<div tabindex=0 class=\"context-menu card-context open-right-panel\" ng-if=\"vm.panelOptions.showPopupButton\" ng-click=\"vm.panelOptions.panelState = true\">\n" +
    "	 <i class=\"mdi mdi-arrow-left-box\"></i>\n" +
    "	 <md-tooltip>{{\"ShowRightPanel\" | translate}}</md-tooltip>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div resizable r-directions=\"['left']\" r-flex=\"false\" ng-show=\"vm.showPanel\">\n" +
    "	<md-sidenav class=\"md-sidenav-right wfm-right-panel drsElement\" md-component-id=\"right-panel\" md-is-open=\"vm.panelOptions.panelState\">\n" +
    "	<div class=\"sub-header\">\n" +
    "		<h2>{{vm.panelOptions.sidePanelTitle | translate}}</h2>\n" +
    "		<div class=\"head-actions panel-menu close-right-panel\" ng-click=\"vm.closePanel()\" ng-if=\"vm.panelOptions.showCloseButton\">\n" +
    "			<div tabindex=0 class=\"context-menu card-context\">\n" +
    "				<i class=\"mdi mdi-arrow-right-box\"></i>\n" +
    "				<md-tooltip>{{\"HidePanel\" | translate}}</md-tooltip>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"panel-content\" ng-transclude></div>\n" +
    "	</md-sidenav>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/work-hour-picker/work-hour-picker.tpl.html',
    "<div class=\"relative working-hour-picker\">\n" +
    "  <div class=\"con-row day-row\">\n" +
    "    <div class=\"con-flex\">\n" +
    "      <button tabindex=\"0\" class=\"wfm-fab mini grow-out\" ng-click=\"$ctrl.openPicker(form)\"\n" +
    "      ng-class=\"{'mini-active': $ctrl.showSummary}\">\n" +
    "      <i class=\"mdi\" ng-class=\"{'mdi-close':$ctrl.showSummary, 'mdi-table-large':!$ctrl.showSummary}\"></i>\n" +
    "      <md-tooltip ng-if=\"!$ctrl.showSummary\">{{'OpenHours' | translate}}</md-tooltip>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "  <div class=\"con-flex line-center animate work-day\" ng-repeat=\"day in $ctrl.weekdays\" ng-show=\"$ctrl.showSummary\" ng-class=\"{'inactive-work-day':!$ctrl.showSummary}\">\n" +
    "    <button tabindex=\"0\" class=\"wfm-fab mini\" ng-click=\"$ctrl.selectDay(day)\"\n" +
    "    ng-class=\"{'mini-success': day.IsSelected}\">\n" +
    "    <span style=\"text-transform:uppercase;\">{{day.Name | limitTo:1}}</span>\n" +
    "    <md-tooltip>{{day.Name}}</md-tooltip>\n" +
    "  </button>\n" +
    "</div>\n" +
    "\n" +
    "<form ng-cloak name=\"form\" class=\"wfm-form working-hour-dropdown panel material-depth-2 animate-show\" novalidate ng-show=\"$ctrl.showSummary\">\n" +
    "  <div class=\"sub-header\">\n" +
    "    <h2>{{'OpenHours' | translate}}</h2>\n" +
    "    <div class=\"head-actions panel-menu\">\n" +
    "      <div tabindex=0 class=\"context-menu card-context grow-out\" ng-click=\"$ctrl.overNight = !$ctrl.overNight\" ng-show=\"$ctrl.selectedDays.length > 0\" ng-if=\"$ctrl.overNightSwitch\">\n" +
    "        <i class=\"mdi\" ng-class=\"{'mdi-weather-night':$ctrl.overNight, 'mdi-weather-sunny':!$ctrl.overNight}\"></i>\n" +
    "        <md-tooltip ng-if=\"$ctrl.overNight\">{{'OverMidnight'|translate}}</md-tooltip>\n" +
    "        <md-tooltip ng-if=\"!$ctrl.overNight\">{{'Today'|translate}}</md-tooltip>\n" +
    "      </div>\n" +
    "      <div tabindex=0 class=\"context-menu card-context\" ng-click=\"$ctrl.toggleTimeFormat()\" ng-if=\"$ctrl.timeFormatSwitch\">\n" +
    "        <i class=\"mdi\" ng-class=\"{'mdi-alarm':$ctrl.timeFormat.Meridian, 'mdi-alarm-off':!$ctrl.timeFormat.Meridian}\"></i>\n" +
    "        <md-tooltip ng-if=\"!$ctrl.timeFormat.Meridian\">{{'FormatColon'|translate}} 24</md-tooltip>\n" +
    "        <md-tooltip ng-if=\"$ctrl.timeFormat.Meridian\">{{'FormatColon'|translate}} 12</md-tooltip>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "  <div class=\"con-row animate-show\" ng-show=\"$ctrl.selectedDays.length > 0\">\n" +
    "    <div class=\"con-flex\">\n" +
    "      <div class=\"form-input-wrap\">\n" +
    "        <label for=\"open\">{{'StartColon' | translate}}</label>\n" +
    "        <div uib-timepicker ng-model=\"form.openHour\" name=\"open\" id=\"open\" show-meridian=\"$ctrl.timeFormat.Meridian\" required=\"\"></div>\n" +
    "        <div ng-cloak class=\"animate-input-message\" ng-show=\"form.$submitted || form.open.$error.required.$touched\">\n" +
    "          <div class=\"form-input-message\" ng-class=\"{formInvalidInput:form.$invalid}\">{{$ctrl.errorMessage}}</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"con-flex\">\n" +
    "      <div class=\"form-input-wrap\">\n" +
    "        <label for=\"close\">{{'EndColon'|translate}}</label>\n" +
    "        <div uib-timepicker ng-model=\"form.closeHour\" name=\"close\" id=\"close\" show-meridian=\"$ctrl.timeFormat.Meridian\" required=\"\"></div>\n" +
    "        <div ng-cloak class=\"animate-input-message\" ng-show=\"form.$submitted || form.close.$error.required.$touched\">\n" +
    "          <div class=\"form-input-message\" ng-class=\"{formInvalidInput:form.$invalid}\">{{$ctrl.errorMessage}}</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"con-row animate-show\" ng-show=\"$ctrl.showSummary\">\n" +
    "    <div class=\"con-flex\">\n" +
    "      <table class=\"wfm-table\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>{{'Day'|translate}}</th>\n" +
    "            <th>{{'Start' | translate}}</th>\n" +
    "            <th>{{'End' | translate}}</th>\n" +
    "            <th>{{'Clear' | translate}}</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr ng-repeat=\"day in $ctrl.weekdays\">\n" +
    "            <td>\n" +
    "              {{day.Name}}\n" +
    "              <i class=\"mdi pull-right\" ng-class=\"{'mdi-weather-night':day.OverNight == true, 'mdi-weather-sunny':day.OverNight == false}\" ng-if=\"$ctrl.overNightSwitch\">\n" +
    "                <md-tooltip ng-if=\"day.OverNight\">{{'OverNight'|translate}}</md-tooltip>\n" +
    "                <md-tooltip ng-if=\"!day.OverNight\">{{'Today'|translate}}</md-tooltip>\n" +
    "              </i>\n" +
    "            </td>\n" +
    "            <td class=\"number-cell\">{{day.OpenHour | date: $ctrl.timeFormat.Format}}</td>\n" +
    "            <td class=\"number-cell\">{{day.CloseHour | date: $ctrl.timeFormat.Format}}</td>\n" +
    "            <td class=\"line-center\">\n" +
    "              <i class=\"mdi mdi-delete pointer\" ng-click=\"$ctrl.clearDay(day);\"></i>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"panel\">\n" +
    "    <div class=\"con-footer animate-show\" ng-show=\"$ctrl.selectedDays.length > 0\">\n" +
    "      <button class=\"wfm-btn wfm-btn-invis-default\" type=\"submit\" ng-click=\"$ctrl.saveHours(form)\">{{'Apply'|translate}}</button>\n" +
    "      <button class=\"wfm-btn wfm-btn-invis-primary\" type=\"submit\" ng-click=\"$ctrl.saveAndClose(form)\"><md-tooltip>{{'SaveClose'|translate}}</md-tooltip>{{'Save'|translate}}</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/workinghourspicker/working-hours-picker.tpl.html',
    "<div class=\"con-row\">\n" +
    "	<div>\n" +
    "		<!--No need for a con-flex here, its in the directive-->\n" +
    "		<button type=\"button\" class=\"wfm-fab mini\" ng-click=\"addEmptyWorkingPeriod()\">\n" +
    "			<i class=\"mdi mdi-plus\"></i>\n" +
    "			<md-tooltip>{{'AddEmptyPeriod' | translate}}</md-tooltip>\n" +
    "		</button>\n" +
    "		<time-range-picker ng-model=\"newWorkingPeriod\" max-hours-range=\"maxHoursRange\" disable-next-day=\"disableNextDay\"></time-range-picker>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"WorkingPeriod in workingHours\">\n" +
    "	<div class=\"con-row working-hours-row\">\n" +
    "		<div class=\"con-flex working-hours-period\">\n" +
    "			<h2>{{ getTimerangeDisplay(WorkingPeriod.StartTime, WorkingPeriod.EndTime)}}</h2>\n" +
    "		</div>\n" +
    "		<div class=\"con-flex working-hours-day\" ng-repeat=\"WeekDay in WorkingPeriod.WeekDaySelections\">\n" +
    "			<md-checkbox ng-model=\"WeekDay.Checked\" aria-label=\"Checkbox\" ng-click=\"enforceRadioBehavior($parent.$index, WeekDay.WeekDay)\">\n" +
    "				<span translate>{{WeekDay | showWeekdays}}</span>\n" +
    "			</md-checkbox>\n" +
    "		</div>\n" +
    "		<div class=\"con-flex working-hours-action\">\n" +
    "			<div tabindex=0 class=\"context-menu card-context\" ng-click=\"$parent.removeWorkingPeriod($index)\">\n" +
    "				<i class=\"mdi mdi-delete\"></i>\n" +
    "				<md-tooltip>{{'DeletePeriod' | translate}} {{ getTimerangeDisplay(WorkingPeriod.StartTime, WorkingPeriod.EndTime)}}</md-tooltip>\n" +
    "			</div>\n" +
    "			<div tabindex=0 class=\"context-menu card-context\" ng-click=\"$parent.toggleAllChecks($index)\">\n" +
    "				<i class=\"mdi mdi-check\"></i>\n" +
    "				<md-tooltip>{{'ToggleAll' | translate}}</md-tooltip>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>"
  );

}]);
