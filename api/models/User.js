/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: {
      type: 'string',
      required: true,
    },
    body: {
      type: 'string'
    },
    createdAt: {
      type: 'date'
    },
  },
  connection: 'localDiskDb'
};
