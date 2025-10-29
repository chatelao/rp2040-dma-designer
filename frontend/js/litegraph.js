/**
* @fileoverview litegraph.js is a library to create graphs in the browser similar to Unreal Blueprints. Graphs can be customized, serialized and executed.
* @author Pescadito (javefpro@gmail.com)
* @license Attribution-NonCommercial 3.0 Unported
* @version 0.9.1
* @name litegraph.js
* @description A graph node engine and editor similar to PD or UDK.
* @param {Object} global The global object, `window` in a browser or `global` in node.js.
*/
(function(global) {
    "use strict";

    //*********************************************************************************
    // LGraph CLASS
    //*********************************************************************************
    /**
     * LGraph is the class that contain a full graph. We can add nodes and connections, execute the graph, serialize it, etc.
     *
     * @class LGraph
     * @constructor
     * @param {Object} o data from previous serialization
     */

    var LGraph = global.LGraph = function(o) {
        if (this.constructor !== LGraph) {
            console.warn("LGraph instantiated directly without new, creating one for you.");
            return new LGraph(o);
        }
        this.list_of_graphcanvas = null;
        this.clear();

        if (o) {
            this.configure(o);
        }
    };

    //... (the rest of the litegraph.js code)
