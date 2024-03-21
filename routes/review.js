const express =  require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const ReviewController = require("../controller/review.js");
// Review
//Post ROute
router.post("/",isLoggedIn,validateReview , wrapAsync(ReviewController.createReview));

//Delete review route
router.delete("/:reviewId",isLoggedIn , isReviewAuthor ,wrapAsync(ReviewController.destroyReview));

module.exports = router;