var mongoose = require('mongoose');

var dummyData = mongoose.Schema({
    logo:String,
    designation: String,
    jobType: String,
    salary: String,
    companyName:String,
    about: String,
    skills:[String],
    jobDescription: {
        para:String,
        points:[String]
    },
    eligibility:  {
        para:String,
        points:[String]
    }

});

module.exports = mongoose.model('dummydata',dummyData);
