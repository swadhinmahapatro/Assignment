// helpers/successAndError.js
const successResponse = (data = null, message = "") => {
    return {
        success: true,
        data,
        message,
        timestamp: new Date().toISOString(),
    };
};

const errorResponse = (message = "Internal server error") => {
    return {
        success: false,
        data: null,
        message,
        timestamp: new Date().toISOString(),
    };
};

module.exports = { successResponse, errorResponse };