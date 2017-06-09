var CronJob = require('cron').CronJob
var kue = require('kue')
    , queue = kue.createQueue()
const nodemailer = require('nodemailer');
require('dotenv').config()

//
module.exports = {
  createCronJob: (user)=>{
    console.log(user.createdAt);
    var createAt = user.createdAt
    var second = createAt.getSeconds()
    var minute = createAt.getMinutes()+1
    var hours = createAt.getHours()
    var date = createAt.getDate()
    var month = createAt.getMonth()

    new CronJob(`${second} ${minute} ${hours} ${date} ${month} *`, function() {
      console.log('You will see this message every second');
      var job = queue.create('email', {
          title: `Welcom To News Forum`
        , to: user.email
        , massage: `Hi ${user.name}, you have join news forum please get ready for greate news everyday!!!`
      }).save( function(err){
         if( !err ) console.log(`croneJob success send`);
      });


      queue.process('email', function(job, done){
        email(job.data, done);
      });

      function email(job, done) {
        console.log(job.to);
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // secure:true for port 465, secure:false for port 587
            auth: {
                user: process.env.EMAIL_ADD,
                pass: process.env.EMAIL_PASS
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"News team 👻" <nugraha@gmail.com>', // sender address
            to: job.to, // list of receivers
            subject: job.tite, // Subject line
            text: job.massage, // plain text body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
        done();
      }
    }, null, true, 'Asia/Jakarta');
  }
}
