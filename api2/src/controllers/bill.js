"use strict";
/* --------------------------------------
    NODEJS EXPRESS | POS API
----------------------------------------- */
// Bill Controller:

const Bill = require("../models/bill");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["bills"]
            #swagger.summary = "List bills"
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

  read: async (req, res) => {
    /*
            #swagger.tags = ["bills"]
            #swagger.summary = "Get Single Bill"
        */

    const data = await Bill.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
};
