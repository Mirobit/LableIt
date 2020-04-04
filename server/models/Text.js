const mongoose = require('mongoose')
const Schema = mongoose.Schema

const textSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true
    },
    filePath: {
      type: String,
      required: false,
      default: ''
    },
    contentEnc: {
      type: String,
      required: true
    },
    contentEncSaved: {
      type: String,
      required: false
    },
    contentEncSavedHtml: {
      type: String,
      required: false
    },
    classification: {
      type: String,
      required: false
    },
    done: {
      type: Boolean,
      default: false
    }
    // user: { type: Schema.Types.ObjectId, required: true }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

module.exports = mongoose.model('Text', textSchema)
