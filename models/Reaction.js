const { Schema, Types } = require('mongoose')
const formatDate = require('../date')

const ReactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            Required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: [true, 'username is required']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => formatDate(date)
        },
    }, {
        toObject: {
            getters: true,
            virtuals: true
        },
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

module.exports = ReactionSchema