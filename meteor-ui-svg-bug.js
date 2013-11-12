if (Meteor.isClient) {
  Template.hello.value = function () {
    return "0 0 100 100";
  };

  Template.hello.rendered = function() {
      var s='';
      var svg = document.getElementsByTagName('svg')[0];
      for(var i=0;i<svg.attributes.length;i++) {
        s += svg.attributes[i].name+'\n';
      }
      alert(s);
  };  
}
