define([
    "dojo",
    'dojo/_base/declare',
    'epi-cms/plugin-area/navigation-tree',
    // Parent class
    'epi/_Module',
    // Commands
    'alloy/ReIndexTree/ReIndexTree',
    'alloy/ReIndexTree/ReIndexChildren'
], function (
    // Dojo
    dojo,
    declare,

    navigationTreePluginArea,
    // Parent class
    _Module,
    // Commands
    ReIndexTree,
    ReIndexChildren
) {

    return declare([_Module], {

        initialize: function () {
            this.inherited(arguments);
            navigationTreePluginArea.add(ReIndexTree);
            navigationTreePluginArea.add(ReIndexChildren);
        }
    });
});