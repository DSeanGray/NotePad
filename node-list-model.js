(function(exports) {
  function listOfNotes() {
    this.listItems = [];
  }

  exports.list = listOfNotes;
})(this);

(function(exports) {
  function viewList() {
    return this.listItems;
  }
exports.list = viewList;
})(this);
