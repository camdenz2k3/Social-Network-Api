const { Schema, model} = require('mongoose')
const { formatDate } = require('../utils/format')
const { ReactionSchema } = require('./Reaction')
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "Thought?",
            max: 280,
            min: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => formatDate(date)
        },
        username: {
            type: String,
            required: [true, 'username is necessary']
        },
        reactions: [ReactionSchema]
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

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought