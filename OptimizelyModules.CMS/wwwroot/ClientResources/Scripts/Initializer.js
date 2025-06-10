define([
    "dojo",
    'dojo/_base/declare',
    'epi-cms/plugin-area/navigation-tree',
    'epi/_Module',
    'optimizelyModules/ReIndexTree/ReIndexTree',
    'optimizelyModules/ReIndexTree/ReIndexChildren'
], function (
    dojo,
    declare,
    navigationTreePluginArea,
    _Module,
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