var mongoose = require('mongoose'),
Video = mongoose.model('Video'),
Tran = mongoose.model('tran'),
Pos = mongoose.model('Pos');


exports.list_all_videos = function(req, res) {
  Video.find({}, function(err, vid) {
    if (err)
      res.send(err);
    res.json(vid);
  });
};

exports.list_all_tran = function(req, res) {
  Tran.find({}, function(err, vid) {
    if (err)
      res.send(err);
    res.json(vid);
  });
};
 
exports.add_tran = function(req, res) {
  const post = new Tran(req.body);
  post.save().then(data=>{
    res.json(data);
  })
  .catch(err=>{
    res.json({message:err});
  });
};
 
exports.add_pos = function(req, res) {
  const post = new Pos(req.body);
  post.save().then(data=>{
    res.json(data);
  })
  .catch(err=>{
    res.json({message:err});
  });
};
 

exports.delete_a_video = function(req, res) {


  Video.remove({
    _id: req.params.taskId
  }, function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
exports.add_video = function(req, res) {
  const post = new Video(req.body);
  post.save().then(data=>{
    res.json(data);
  })
  .catch(err=>{
    res.json({message:err});
  });
};


 
exports.files = function(req, res) {
  var fs = require('fs');
  var files = fs.readdirSync('./src/resurs/photo');
    res.json(files);
  };

exports.delF = function(req){
  var fs = require('fs');
  name = req.params.taskId
  fs.unlinkSync('./src/resurs/photo/'+name)
}

exports.addf = function (req, res, next) {
   
  let filedata = req.file;
  console.log(filedata);
  if(!filedata)
      res.send("Ошибка при загрузке файла");
  else
      res.send("Файл загружен");
}