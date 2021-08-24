/*
 * Nimbella CONFIDENTIAL
 * ---------------------
 *
 *   2018 - present Nimbella Corp
 *   All Rights Reserved.
 *
 * NOTICE:
 *
 * All information contained herein is, and remains the property of
 * Nimbella Corp and its suppliers, if any.  The intellectual and technical
 * concepts contained herein are proprietary to Nimbella Corp and its
 * suppliers and may be covered by U.S. and Foreign Patents, patents
 * in process, and are protected by trade secret or copyright law.
 *
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Nimbella Corp.
 */

async function main(params) {
  var common = require('/utils.js')
  var moment = require( 'moment' );
  var utcMoment = moment.utc();
  var utcDate = new Date( utcMoment.format() );
  return {
    body: {
      text: `${utcDate} - ${common.testUtils()}`
    }
  };
}
module.exports.main = main;