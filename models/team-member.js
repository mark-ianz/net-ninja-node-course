const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const teamMemberSchema = new Schema ({
  name: {
    type: String
  }, role: {
    type: String
  }
}, {timestamps : true})

const TeamMember = mongoose.model ("Team-member", teamMemberSchema);

module.exports = TeamMember;