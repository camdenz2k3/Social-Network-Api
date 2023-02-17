const { Schema, model} = require('mongoose')

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: [true, 'Username is required'],
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email is required'],
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Email is not valid']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    }, {
        toJSON: {
            virtuals: true,
        }
    }
)

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('user', userSchema)

module.exports = User