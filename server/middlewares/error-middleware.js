// const errorMiddleware = (err, req, res, next)  =>{
//     const status = err.status || 500;
//     const message = err.message || "BACKEND ERROR";
//     const extraDetails = err.extraDetails || "Error from Backend";



//     return res.status(status).json({
//         message, extraDetails });
// };
// module.exports = errorMiddleware;

const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR";
    const extraDetails = err.extraDetails;

    const errorResponse = { message };
    if (extraDetails) {
        errorResponse.extraDetails = extraDetails;
    }

    return res.status(status).json(errorResponse);
};

module.exports = errorMiddleware;