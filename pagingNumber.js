const pagingNumber = (totalPage, currentPage, nextPage, previousPage) => {
  let numberOfPaging = 5;
  let startNumber = 1;
  let result = new Object();

  let midNumber = Math.ceil(numberOfPaging /2);
  let addSubNumber = Math.floor(numberOfPaging/2);

  result['totalPage'] = totalPage;
  result['currentPage'] = currentPage;
  result['totalNumber'] = numberOfPaging;
  result['startNumber'] = startNumber;
  result['lastNumber'] = startNumber + numberOfPaging - 1;
  result['nextPage'] = nextPage;
  result['previousPage'] = previousPage;

  if(currentPage > midNumber) {
    result['startNumber'] = currentPage - addSubNumber;
    result['lastNumber'] = currentPage + addSubNumber;
  }

  if(result['lastNumber'] > totalPage) {
    result['startNumber'] = totalPage - numberOfPaging + 1 <= 0 ? 1: totalPage - numberOfPaging + 1;
    result['lastNumber'] = totalPage;
  }


  return result;
}

module.exports = pagingNumber;