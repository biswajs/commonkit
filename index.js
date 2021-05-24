/**
 * @author Biswa#7373 [Discord ID]
 * @copyright [Coded by Biswa]
 */

// this function has been decreapted
function kitErr(errType, errOptions = { message: String }) {
  const errArray = {
    warn: errOptions.message,
    error: errOptions.message,
  };

  if (errType && errType === "warn") return errArray.warn;
  if (errType && errType === "error") return errArray.error;
}
// No need to use the function [catchLog] is already there!

class Toolkit {
  constructor(options = { isActive: Boolean }) {
    this.active = options.isActive;
  }
  colorGenerator(
    options = {
      hexLength: Number,
      isActive: Boolean,
    }
  ) {
    try {
      if (options.isActive === true) {
        function getRandomColor(hex) {
          var letters = "0123456789ABCDEF";
          var color = "#";
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }
        return getRandomColor();
      }
    } catch (err) {
      return err;
    }
  }
  /**
   *
   * @param {*} getArr [mention the array]
   * @param {*} objArrName [specify the array's object name]
   * @returns
   */
  checkArray(getArr, objArrName) {
    try {
      const arrLength = getArr.length;
      for (var ar = 0; ar < arrLength; ar++) {
        if (getArr[ar] === objArrName) return true;
      }
      return false;
    } catch (err) {
      return err;
    }
  }
  checkArrayById(getArr, arrObjId) {
    try {
      if (getArr.some((arrObj) => arrObj.id === arrObjId)) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return err;
    }
  }
  getRandomMessage(arrMessage, options = { msgLimit: Number }) {
    // Example: let messageArray = ["...", "..."]
    try {
      let ranMessage = Math.floor(Math.random() * arrMessage.length);

      if (arrMessage && Array.isArray(arrMessage) === true)
        return arrMessage[ranMessage];
    } catch (err) {
      return err;
    }
  }
  /**
   *
   * @param {*} htmlContent [specify the html content]
   * @param {number} contentLength [specfify length you wanna cutout
   * ]
   */
  htmlRemover(
    htmlContent,
    contentLength,
    option = {
      endWith: String,
    }
  ) {
    try {
      function cutHTML(str) {
        if (str === null || str === "") return false;
        else str = str.toString();
        return str.replace(/(<([^>]+)>)/gi, "");
      }

      var strCut = function (str, length, ending) {
        if (length == null) {
          length = htmlContent.length;
        }
        if (ending == null) {
          ending = ".." || option.endWith;
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
      };
      return strCut(cutHTML(htmlContent), contentLength);
    } catch (err) {
      return err;
    }
  }
  /**
   *
   * @param {*} reUrlfrmContent [Specify the content that you want to remove url from.]
   * @param {*} options [Optinal: you can replace data with url ]
   * @returns
   */
  removeUrl(reUrlfrmContent, options = { replaceData: String }) {
    try {
      let nString = reUrlfrmContent.replace(
        /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/g,
        ""
      );
      if (reUrlfrmContent && reUrlfrmContent !== null) return nString;
    } catch (err) {
      return err;
    }
  }
  /**
   *
   * @param {number} stringLength [specify the number]
   */
  generateString(stringLength) {
    try {
      let genStr = 
         Math.round(
          Math.pow(36, stringLength + 1) -
            Math.random() * Math.pow(36, stringLength)
        )
          .toString(36)
          .slice(1);
      
      return genStr;
    } catch (err) {
      return err;
    }
  }
  /**
   * 
   * @param {number} numLength [ give a number to specify the length] 
   * @returns 
   */
  generateNumber(numLength) {
    try {
      let genNum =
        Math.floor(
          Math.pow(10, numLength - 1) +
            Math.random() * 9 * Math.pow(10, numLength - 1)
        );
      
      return genNum;
    } catch (err) {
      return err;
    }
  }
  
}
module.exports = { Toolkit };
