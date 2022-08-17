const express = require('express');
const { checkNums, mean, median, mode } = require('./helpers'); 
const ExpressError = require('./expressError'); 


const app = express();


app.get('/mean', (req, res, next) => {
  
  try{
    const numsString = req.query.nums;
    if(!numsString) throw new ExpressError('Missing Numbers', 400);

    const nums = checkNums(numsString); 
    if(!nums) throw new ExpressError('Only Numbers, No String.', 400);

    const avg = mean(nums)
    res.json({ response: {
      "operation": "mean", 
      "value": avg 
    }})
  } catch(error) {
    next(error); 
  }
})

app.get('/median', (req, res, next) => {
  try{
    const numsString = req.query.nums;
    if(!numsString) throw new ExpressError('Missing Numbers', 400);

    const nums = checkNums(numsString); 
    if(!nums) throw new ExpressError('Only Numbers, No String.', 400);

    const med = median(nums); 
    res.json({ response: {
      operation: "median", 
      value: med
    }})

  } catch(error){
    next(error); 
  }
})

app.get('/mode', (req, res, next) => {
  const numsString = req.query.nums;
  if(!numsString) throw new ExpressError('Missing Numbers', 400);

  const nums = checkNums(numsString); 
  if(!nums) throw new ExpressError('Only Numbers, No String.', 400);

  const mod = mode(nums); 
  res.json({ response: {
    operation: "mode", 
    value: mod
  }
  
  })

})

// app.use((error, req, res, next) => {
//   let status = error.status || 500;
//   let message = error.msg;

//   return res.status(status).json({
//     error: {message, status}
//   })
// })


app.listen(3000, () => {
  console.log("Listening on port 3000.")
})