
// // const validate = (schema) => async(req,res,next) => {



// // try{

// //     const parseBody = await schema.parseAsync(req.body);

// //     req.body = parseBody;
// //     next();

// // }
// // catch(err) {
// //     console.log(err)
// //     const message = err
// //     console.log(message);
// //     res.status(400).json({msg: message });
// // }

// // };

// // module.exports = validate;


// const validate = (schema) => async (req, res, next) => {
//     try {
//       const parseBody = await schema.parseAsync(req.body);
//       req.body = parseBody;
//        next();


//     } catch (err) {


//         if (err.errors) {
//             // Zod error structure
//             const extraDetails = err.errors.map((curElem) => curElem.message);
//             return res.status(422).json({
//               status: 422,
//               message: "Fill the input properly",
//               extraDetails,
//             });
//           }
      
//           // Pass any other error to the error-handling middleware
//           next(err);
        

  
//      }
//   };
  
//   module.exports = validate;
// const validate = (schema) => async (req, res, next) => {
//     // 
    
//     try {
//         const parseBody = await schema.parseAsync(req.body);
//         console.log("Parsed body:", parseBody); // Debugging log
//         req.body = parseBody;
//         return next();
//     } catch (err) {
//         const status = 422;
//         const message = "Fill the input properly";
//         const extraDetails = err.issues;
    
//         const error = {
//           status,
//           message,
//           extraDetails,
//         };
    
//         next(extraDetails);
//       }
//   };
  
//   module.exports = validate;


const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    console.log("Parsed body:", parseBody); // Debugging log
    req.body = parseBody;
    return next();
  } catch (err) {
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.issues;

    const error = {
      status,
      message,
      extraDetails,
    };

    next(error); // Pass the error object to next()
  }
};

module.exports = validate;