define([
    "dojo/topic",
    "dojo/_base/declare",
    "epi/dependency",
    "epi/shell/XhrWrapper",
    "epi/shell/command/_Command"
], function (topic, declare, dependency, XhrWrapper, _Command) {

    return declare([_Command], {

        label: "Reindex Children",

        iconClass: "epi-iconReload epi-icon--success",

        constructor: function () {

            // summary:
            //        Constructs the object and sets up a reference to the content data store.
            // tags:
            //        public

            var registry = dependency.resolve("epi.storeregistry");
            this.store = registry.get("epi.cms.contentdata");
        },

        _execute: function () {

            // summary:
            //        Executes this command assuming canExecute has been checked.
            // tags:
            //        protected
            //debugger;
            
            console.log("_execute:", this.model);
            //topic.publish("/epi/cms/contentdata/childrenchanged", this.model);

            var contentLinkId = this.model.contentLink;
            // Create an XhrWrapper for making the API call
            var xhr = new XhrWrapper();
            xhr.xhrGet({
                url: "/api/indexing/reindex-tree",
                handleAs: "json",
                content: {
                    contentLinkId: contentLinkId,
                    childrenOnly: true
                },
                failOk: true,
                load: function (response) {
                    // Handle the success response (e.g., show a message)
                    console.log("Reindexing successful:", response);
                },
                error: function (response) {
                    // Handle the error response (e.g., show an error message)
                    console.error("Error reindexing:", error);
                }
            });
            //this.xhr = new XhrWrapper({
            //    url: '/api/indexing/reindex-content-area', // Replace with the actual API endpoint
            //    data: {
            //        contentLinkId: contentLinkId
            //    },
            //    handleAs: 'json' // Assuming the API returns JSON
            //});

            //// Make the API call
            //this.xhr.execute().then(function (response) {
            //    // Handle the success response (e.g., show a message)
            //    console.log("Reindexing successful:", response);
            //}, function (error) {
            //    // Handle the error response (e.g., show an error message)
            //    console.error("Error reindexing:", error);
            //});
            //  model.isCommonDraft = true;

            // return this.store.put(model);
        },

        _onModelChange: function () {

            // summary:
            //        Updates canExecute after the model has been updated.
            // tags:
            //        protected
            //debugger;
            //var model = this.model,
            //    canExecute = model && !model.isCommonDraft;

            console.log("_onModelChange: ", this.model);
            this.set("canExecute", true);
        },

        _onReindex: function () {
            console.log("_onReindex: ", this.model);
        }
    });
});