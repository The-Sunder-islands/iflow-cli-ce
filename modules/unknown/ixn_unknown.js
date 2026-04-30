/**
 * @module ixn
 * @category unknown
 * @label unknown
 * @position 1086 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ixn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ixn = T((iZe) => {
  iZe.readRelationships = vSs;
  iZe.defaultValue = new PWt([]);
  iZe.Relationships = PWt;
  function vSs(t) {
    var e = [];
    return (
      t.children.forEach(function (r) {
        if (r.name === "relationships:Relationship") {
          var n = { relationshipId: r.attributes.Id, target: r.attributes.Target, type: r.attributes.Type };
          e.push(n);
        }
      }),
      new PWt(e)
    );
  }
  function PWt(t) {
    var e = {};
    t.forEach(function (n) {
      e[n.relationshipId] = n.target;
    });
    var r = {};
    return (
      t.forEach(function (n) {
        (r[n.type] || (r[n.type] = []), r[n.type].push(n.target));
      }),
      {
        findTargetByRelationshipId: function (n) {
          return e[n];
        },
        findTargetsByType: function (n) {
          return r[n] || [];
        },
      }
    );
  }
});