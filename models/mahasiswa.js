const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//initialize schema object
const MahasiswaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  matakuliah: {
    type: String,
    required: true,
  },
  nilai: {
    type: String,
    required: true,
  },
});

const Mahasiswa = mongoose.model("student", MahasiswaSchema);

module.exports = Mahasiswa;
