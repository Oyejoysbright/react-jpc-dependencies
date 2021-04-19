export const HP = {
  combineStyles: (...styles) => {
    let style = {};
    styles.forEach((e) => (style = Object.assign(style, e)));
    return style;
  },

  lorem: `Lorem ipsum dolor sit amet, 
  consectetur adipisicing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
     in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,

  lorem2: (length)=> {

    return HP.lorem.substring(0, length);
  },

  Date: {
    /**
     * It returns date, month and year separated by a slash.
     * @param {Date} date is an object.
     */
    getSlashedDate: function (date) {
      return `${date.getDate()}/${HP.prefixZero(
        date.getMonth() + 1
      )}/${date.getFullYear()}`;
    },

    /**
     * It takes number or string and returns the textual month e.g 0 returns January
     * @param {String|Number} monthId
     */
    getMonthText: function (monthId) {
      let month;
      switch (monthId) {
        case 0:
          month = "January";
          break;
        case 1:
          month = "February";
          break;
        case 2:
          month = "March";
          break;
        case 3:
          month = "April";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
          month = "August";
          break;
        case 8:
          month = "September";
          break;
        case 9:
          month = "October";
          break;
        case 10:
          month = "November";
          break;
        default:
          month = "December";
          break;
      }
      return month;
    },

    /**
     * Date format is yearMonthDay, it takes a second parameter that specifies the concatenated string
     * between year, month and day, default is "-";
     * it returns Month FormatedDay, Year e.g May 24th, 2020.
     * @param {String} date
     * @param {String} separator
     */
    getStyledDate: function (date, separator = "-") {
      let data = date.split(separator);
      return (
        this.getDayFormat(data[2]) +
        " " +
        this.getMonthText(parseInt(data[1]) + 1) +
        ", " +
        data[0]
      );
    },

    getStyledDate2: function (date = null) {
      let pDate = date === null || date === "" ? new Date() : date;

      return (
        this.getDayFormat(pDate.getDate()) +
        " " +
        this.getMonthText(pDate.getMonth()) +
        ", " +
        pDate.getFullYear()
      );
    },

    /**
     *It formats a number by adding suffix like "st", "nd", "rd" and "th" depending on the the last digit.
     * @param {Number | String} day
     */
    getDayFormat: function (day) {
      let data = day + "";
      let result;

      //   if(data.length > 1){
      switch (data.charCodeAt(data.length - 1)) {
        case 1:
          result = data + "st";
          break;
        case 2:
          result = data + "nd";
          break;
        case 3:
          result = data + "rd";
          break;
        default:
          result = data + "th";
          break;
      }

      return result;
    },
  },

  Time: {
    get24CurrentTime: function (date) {
      return `${HP.dateTimePrefixZero(date.getHours())}:${HP.dateTimePrefixZero(
        date.getMinutes()
      )}:${HP.dateTimePrefixZero(date.getSeconds())}`;
    },

    get12CurrentTime: function (date) {
      function define12(hour) {
        if (hour > 12) {
          return hour - 12;
        }
        return 12;
      }
      return `${define12(
        date.getHours()
      )}:${date.getMinutes()}:${date.getSeconds()}`;
    },
  },

  /**
   * It prefix data with zero(s).
   * @param {Number} num is the data to alterate.
   * @param {String} len is the number of zeroes to add.
   */
  prefixZero: function (num, len = 1) {
    let zeros = "0";

    if (len > 1) {
      for (let i = 0; i < len; i++) {
        zeros += "0";
      }
      return zeros + num;
    }

    return zeros + num;
  },

  dateTimePrefixZero: function (num) {
    let data = this.prefixZero(num);
    return data.length > 2 ? data.substr(1) : data;
  },

  randomizeArray: (array, length = 0) => {
    length = length ? length : array.length;
    let data = [];
    let values = [];
    for (let i = 0; i < length; i++) {
      let n = Math.floor(Math.random() * (array.length - 1));

      while (values.includes(n)) {
        n = Math.floor(Math.random() * length);
      }
      values.push(n);
      data.push(array[n]);
    }
    return data;
  },

  base64ToString: (base64 = "") => {
    if (base64.includes("image")) {
      return base64.replace(/^data:image\/{png|jpg};base64,/, "");
    }
  },
  base64fromString: (string) => {
    return `data:image/png;base64,${string}`;
  },
};

export const Values = {
  titles: [
    "Alhaji",
    "Alhaja",
    "ARC.",
    "Canon",
    "Chief",
    "Deacon",
    "Dr.",
    "Engr",
    "Evangelist",
    "Hajiya",
    "Imam",
    "Mr.",
    "Mrs.",
    "Prof.",
    "Prophet",
    "REV",
    "VEN",
  ],

  securityQuestions: [
    "What was the name of your primary school?",
    "In what city or town does your nearest sibling live?",
    "What time of the day were you born? (hh:mm)",
    "What is your pet’s name?",
    "In what year was your father born?",
    "What is your favorite?",
    "Car registration number?",
    "What time of the day was your first child born?",
    "What is the first name of your best friend in high school?",
    "In what town or city did you meet your spouse or partner?",
    "What is the middle name of your oldest child?",
    "What is your spouse or partner's mother's maiden name?",
    "In what town or city did your parents meet?",
    "What was your childhood nickname?",
    "What is your oldest sibling’s birthday month and year? (e.g., January 1900)",
    "What is the name of the place your wedding reception was held?",
    "What is the name of a college you applied to but didn't attend?",
  ],
};

export const Store = {
  delimeter: "&h|p&",
  Local: 0,
  Session: 1,
  set: (key, value, type = 0) => {
    if (type === 0) {
      localStorage.setItem(key, value);
    } else {
      sessionStorage.setItem(key, value);
    }
  },
  setObject: (key, object, type = 0) => {
    if (type === 0) {
      localStorage.setItem(key, JSON.stringify(object));
    } else {
      sessionStorage.setItem(key, JSON.stringify(object));
    }
  },
  get: (key, type = 0) => {
    if (type === 0) {
      return localStorage.getItem(key);
    } else {
      return sessionStorage.getItem(key);
    }
  },
  getObject: (key, type = 0) => {
    if (type === 0) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return JSON.parse(sessionStorage.getItem(key));
    }
  },
  /**
   *
   * @param {String} key
   * @param {String} value
   * @param {Int} type
   */
  append: (key, value, type = 0) => {
    if (!!this.has(key, type)) {
      this.set(key, this.get(key, type) + this.delimiter + value, type);
    } else {
      this.set(key, value, type);
    }
  },
  has: function (key, type = 0) {
    var res = this.get(key, type);
    return res !== null;
  },
};

export class FormQuery {
  #query;

  constructor() {
    this.#query = "";
  }

  append = (key, value) => {
    if (value.length === 0 || value === null || value === undefined) {
      value = "null";
    }

    this.#query += `${encodeURI(key)}=${encodeURI(value)}&`;
    return this;
  };

  build = () => {
    return this.#query.substr(0, this.#query.length - 1);
  };
}
