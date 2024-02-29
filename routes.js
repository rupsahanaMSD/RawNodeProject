/*
 * Title: Routes
 * Description: Application Routes
 * Author: Rupshana Ripa
 * Date: 17/02/2024
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
