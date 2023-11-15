//@ui5-bundle viewallrn/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"viewallrn/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("viewallrn.Component",{metadata:{manifest:"json"}})});
},
	"viewallrn/ext/fragment/Fillblank.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"><VBox id="_IDGenVBox1"><VBox id="_IDGenVBox2"><HBox id="_IDGenHBox1"><Text id="_IDGenText2" text="Send Notification"/><Input width="90%" id="input0" value="{due_notification}" /><Text id="_IDGenText6" text="day(s) before due date, send reminder every"/><Input width="90%" id="input1" value="{due_reminder}" /><Text id="_IDGenText7" text="day(s) thereafter."/></HBox></VBox><VBox id="_IDGenVBox3"><HBox id="_IDGenHBox2"><Text id="_IDGenText5" text="Send Overdue Notification"/><Input width="90%" id="input3" value="{overdue_notification}" /><Text id="_IDGenText8" text="day(s) after due date, send reminder every"/><Input width="90%" id="input4" value="{overdue_reminder}" /><Text id="_IDGenText9" text="day(s) thereafter."/></HBox></VBox></VBox></core:FragmentDefinition>\n',
	"viewallrn/i18n/i18n.properties":'# This is the resource bundle for viewallrn\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Rules\n\n#YDES: Application description\nappDescription=A Fiori application.\n\nflpTitle={{flpTitle}}\n\nflpSubtitle={{flpSubtitle}}\n',
	"viewallrn/manifest.json":'{"_version":"1.58.0","sap.app":{"id":"viewallrn","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.11.4","toolsId":"c7e7f59e-ae9c-4df1-8dbc-763d08356dbd"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"viewallrn-display":{"semanticObject":"viewallrn","action":"display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"viewallrn.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"pattern":":?query:","name":"assignment_rulessList","target":"assignment_rulessList"},{"pattern":"assignment_ruless({key}):?query:","name":"assignment_rulessObjectPage","target":"assignment_rulessObjectPage"},{"pattern":"approval_rules({key}):?query:","name":"approval_rulesObjectPage","target":"approval_rulesObjectPage"},{"pattern":"emailnotification({key}):?query:","name":"emailnotificationObjectPage","target":"emailnotificationObjectPage"}],"targets":{"assignment_rulessList":{"type":"Component","id":"assignment_rulessList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/assignment_ruless","variantManagement":"None","navigation":{"assignment_ruless":{"detail":{"route":"assignment_rulessObjectPage"}},"approval_rules":{"detail":{"route":"approval_rulesObjectPage"}},"emailnotification":{"detail":{"route":"emailnotificationObjectPage"}}},"initialLoad":"Enabled","views":{"paths":[{"key":"tableView","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView"},{"key":"tableView1","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"approval_rules"},{"key":"tableView12","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"emailnotification"}]},"controlConfiguration":{"/approval_rules/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"columns":{"DataField::apprtocri::rule":{"width":"250px"},"DataField::approval_type":{"width":"150px"},"DataField::apprtoapp::name":{"width":"175px"},"DataField::comments":{"width":"200px"}},"tableSettings":{"selectionMode":"None"}},"/emailnotification/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"selectionMode":"None"},"columns":{"DataField::status_desc":{"width":"330px"},"DataField::mailtocc::name":{"width":"175px"},"DataField::subject":{"width":"200px"},"DataField::body":{"width":"250px"}}}}}}},"assignment_rulessObjectPage":{"type":"Component","id":"assignment_rulessObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/assignment_ruless"}}},"approval_rulesObjectPage":{"type":"Component","id":"approval_rulesObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/approval_rules","navigation":{},"content":{"body":{"sections":{"Fillblank":{"template":"viewallrn.ext.fragment.Fillblank","type":"XMLFragment"}}}}}}},"emailnotificationObjectPage":{"type":"Component","id":"emailnotificationObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/emailnotification","navigation":{}}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"mngdemil"}}'
}});