"use strict";
/* --------------------------------------
    NODEJS EXPRESS | POS API
----------------------------------------- */
// Bill Controller:

const Bill = require("../models/Bill");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Bills"]
            #swagger.summary = "List Bills"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

    const data = await res.getModelList(Bill);

    // res.status(200).send({
    //     error: false,
    //     details: await res.getModelListDetails(Bill),
    //     data
    // })

    // FOR REACT PROJECT:
    res.status(200).send(data);
  },

  create: async (req, res) => {
    /*
            #swagger.tags = ["Bills"]
            #swagger.summary = "Create Bill"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Bill' }
            }
        */

    const data = await Bill.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    /*
            #swagger.tags = ["Bills"]
            #swagger.summary = "Get Single Bill"
        */

    const data = await Bill.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /*
            #swagger.tags = ["Bills"]
            #swagger.summary = "Update Bill"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Bill' }
            }
        */

    const data = await Bill.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Bill.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    /*
            #swagger.tags = ["Bills"]
            #swagger.summary = "Delete Bill"
        */

    const data = await Bill.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
