const recordsPerPage = require("../config/pagination");
const Product = require("../models/ProductModel");
const getProducts = async (req, res, next) => {
  try {
    //QUERY -
    let query = {};
    let isQueryCondition = false;
    //-pricing query
    let priceQueryCondition = {};
    if (req.query.price) {
      isQueryCondition = true;
      priceQueryCondition = { price: { $lte: Number(req.query.price) } };
    }
    //-rating Query
    let ratingQueryCondition = {};
    if (req.query.rating) {
      isQueryCondition = true;
      ratingQueryCondition = { rating: { $in: req.query.rating.split(",") } };
    }

    // category/:categoryName/  --- Handle
    let categoryQueryCondition = {};
    const categoryName = req.params.categoryName || "";
    if (categoryName) {
      isQueryCondition = true;
      let a = categoryName.replaceAll(",", "/");
      var regEx = new RegExp("^" + a);
      categoryQueryCondition = { category: regEx };
      console.log(categoryQueryCondition);
    }
    // When filtering from Product-list page
    if (req.query.category) {
      isQueryCondition = true;
      let a = req.query.category.split(",").map((item) => {
        if (item) return new RegExp("^" + item);
      });
      console.log(a)
      categoryQueryCondition = { category: { $in: a } };
      console.log(categoryQueryCondition)
    }

    //--conbine all query
    if (isQueryCondition) {
      query = {
        $and: [
          priceQueryCondition,
          ratingQueryCondition,
          categoryQueryCondition,
        ],
      };
    }

    //Pagination
    const pageNum = Number(req.query.pageNum) || 1;

    //SORT - by name, price etc
    let sort = {};
    const sortOption = req.query.sort || "";
    if (sortOption) {
      let sortOpt = sortOption.split("_");
      const key = sortOpt[0];
      sort = { [key]: sortOpt[1] };
    }

    const totalProducts = await Product.countDocuments(query);
    const products = await Product.find(query)
      .skip(recordsPerPage * (pageNum - 1)) //this will skip these many products from the results
      .sort(sort)
      .limit(recordsPerPage);
    res.status(200).json({
      totalProducts,
      products,
      pageNum,
      paginationLinksNumber: Math.ceil(totalProducts / recordsPerPage),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts };
