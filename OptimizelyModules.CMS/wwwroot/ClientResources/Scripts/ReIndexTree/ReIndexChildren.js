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
            var registry = dependency.resolve("epi.storeregistry");
            this.store = registry.get("epi.cms.contentdata");
        },

        _execute: function () {
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
        },

        _onModelChange: function () {
            this.set("canExecute", true);
        }
    });
});