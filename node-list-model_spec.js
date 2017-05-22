(function(exports) {
  function testListOfNotes() {
    var list = new listOfNotes();

    if (list.listItems.length !== 1) {
      throw new Error("Please enter a note");
    }
  }
})(this);

(function(exports) {
  function testReturnArray() {
    var list = new listOfNotes();

    var assert = {
      isEqual: function(list) {
        if (list !== viewList()) {
          throw new Error("Assertion failed: did not return array");
        }
      }
    };
  }
})(this);
