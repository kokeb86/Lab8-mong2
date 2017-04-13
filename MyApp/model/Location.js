var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema for location 
var locationSchema = new Schema({
  name: String,
  category: String,
  
 Longitude:String,
 Latitude: String
    
  
});

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;