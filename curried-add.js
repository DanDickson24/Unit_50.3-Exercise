function curriedAdd() {
    let sum = 0;
  
    function addNumber(num) {
      sum += num;
      return addNumber;
    }
  
    addNumber.toString = function() {
      return sum;
    };
  
    return addNumber;
  }
  
  let firstAdder = curriedAdd();
  let secondAdder = curriedAdd();
  let thirdAdder = curriedAdd();
module.exports = { curriedAdd };
