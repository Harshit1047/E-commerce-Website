class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,  //this will help do auto search eg when you type a all the product that has a in their name will come out 
                $options: 'i'                    //this means  it is not case sensitive
            }
        } : {}
         console.log(keyword)
        this.query = this.query.find({ ...keyword });
        return this;
    }

    // filter functionality 

    filter() {

        const queryCopy = { ...this.queryStr };

        // Removing fields from the query to get product by category
        const removeFields = ['keyword', 'limit', 'page']
        removeFields.forEach(element => delete queryCopy[element]);

        // Advance filter for price, ratings etc
        let queryStr = JSON.stringify(queryCopy) // converting this (queryCopy) to string 
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)


        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
// adding paggination 
    pagination(resPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }
}

module.exports = APIFeatures