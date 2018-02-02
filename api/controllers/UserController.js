/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	test: function (req, res){
    console.log('테스트');
    res.send('body 전달 테스트');
  },
  
  getAllUser: (req, res) => {
    User.find({}).exec((err, users) => {
      if(err){
        return res.send(err);
      }
      users.map((val, index) => {
        console.log(`인덳스ㅡ${index}`);
        console.log(`title = ${val.title}`);
        console.log(`body = ${val.body}`);
        console.log(`createdAt = ${val.createdAt}`);
      })

      return res.send(users);
    })
  },

  postAddUser: (req, res) => {
    const param = {
      title: req.body.title,
      body: req.body.body
    };

    User.create({
      title: param.title,
      body: param.body,
    }).exec(err => {
      if(err)
        return res.send(err);
      
      return res.send('ok');
    });
  },

  deleteUser: (req, res) => {
    const param = {
      id: req.body.id,
    };

    User.destroy({ id: param.id }).exec(err => {
      if(err)
        return res.send(err);
      
      return res.send('ok');
    });
  },

  updateUser: (req, res) => {
    const param = {
      id: req.body.id,
      title: req.body.title,
      body: req.body.body,
    };

    User.update({
      id: param.id,
    }, {
      title: param.title,
      body: param.body,
    }).exec((err, result) => {
      if(err)
        return res.send(err);

      res.send(result);
    })
  }

};

