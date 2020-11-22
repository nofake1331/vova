var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VideoSchema = new Schema({
  item: {
    type: String,
  }
});


var TranSchema = new Schema({
    tran:{
      type:Object,
    }
});
var PosSchema = new Schema({
  pos:{
    type:Object,
  }
})
module.exports = mongoose.model('tran', TranSchema);
module.exports = mongoose.model('Video', VideoSchema);
module.exports = mongoose.model('Pos', PosSchema);
