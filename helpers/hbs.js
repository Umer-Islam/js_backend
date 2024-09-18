const moment = require("moment");

module.exports = {
  FormData: (date, format) => {
    return moment(date).format(format);
  },
};
