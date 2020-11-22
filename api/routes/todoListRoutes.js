module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  var multer  = require("multer");
  const upload = multer({dest:"./src/resurs/photo"});
  app.route('/photo')
    .get(todoList.files);
    app.route('/photo/:taskId')
    .delete(todoList.delF);
    app.route('/video')
    .get(todoList.list_all_videos)
    .post(todoList.add_video);
    app.route('/video/:taskId')
    .delete(todoList.delete_a_video);
    app.route('/upload')
     .post(upload.single("filedata"),todoList.addf);
     app.route('/tran')
     .get(todoList.list_all_tran)
     .post(todoList.add_tran);
     app.route('/pos')
     .post(todoList.add_pos)
    
}
