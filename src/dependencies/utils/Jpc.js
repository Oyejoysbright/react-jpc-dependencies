import axios from "axios";


/**
 * JPC VERSION 2.0.0
 * 
 * Beginning
 */





 /**
  * Array Operation
  */
export const JArray = {
    /**
     * Find value in data
     * @param {Array} data 
     * @param {Any} value 
     * Return true if specified value found
     */
    subtract: function (operand1 = [], operand2 = []) {
        let res = [];
        operand1.forEach(item => {
            if (!operand2.includes(item)) {
                res.push(item);
            }
        });
        return res;
    },
    find: {
        getBoolean:function(data = [], value) {
            let res = false;
            let type = typeof value;
            if (value === "") {
                console.error("You cannot search empty value, kindly supply value to search.");
            }
        
            if (type === "number") {
                value = parseInt(value);
            }
            else if (type === "string") {
                value = value.toString();
            }
            else {
                console.error("You can only search for a number or word.");
            }
        
            data.forEach(element => {
                if (element === value) {
                    return res = true;
                }
            });
        
            return res;
        },

        getIndex:function(data = [], value) {
            let index;
            let type = typeof value;
            if (value === "") {
                console.error("You cannot search empty value, kindly supply value to search.");
            }
        
            if (type === "number") {
                value = parseInt(value);
            }
            else if (type === "string") {
                value = value.toString();
            }
            else {
                console.error("You can only search for a number or word.");
            }

            data.forEach(element => {
                if (element === value) {
                    return index = data.indexOf(element);
                }
            });
        
            return index;

        }
    },

    remove: function (data, value) {
        let res = [];
        let type = typeof value;
        if (value === "") {
            console.error("You cannot search empty value, kindly supply value to search.");
        }
    
        if (type === "number") {
            value = parseInt(value);
        }
        else if (type === "string") {
            value = value.toString();
        }
        else {
            console.error("You can only search for a number or word.");
        }
    
        data.forEach(element => {
            if (element !== value) {
                res.push(element);
            }
        });
    
        return res;
    },

    removeOneTime: function (data = [], value) {
        let res = [];
        let type = typeof value;
        if (value === "") {
            console.error("You cannot search empty value, kindly supply value to search.");
        }
    
        if (type === "number") {
            value = parseInt(value);
        }
        else if (type === "string") {
            value = value.toString();
        }
        else {
            console.error("You can only search for a number or word.");
        }
    
        let watcher = [];
        data.forEach(element => {
            if (element !== value) {
                res.push(element);
            }
            else {
                if (JArray.find.getBoolean(watcher, element)) {
                    res.push(element)
                }
                else watcher.push(element);
            }
        });
    
        return res;
    },

    /**
     * Add all element of array together
     * @param {Array} data 
     * Return sum of the specified array
     */
    addAll:function(data = []) {
        var res = 0;
        for (let k = 0; k < data.length; k++) {
            res += data[k];
        }
        return res;
    },

    includes: function (data = [], search = [], numbers = 0) {
        let temp = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < search.length; j++) {
                if (data[i] === search[j]) {
                    temp.push(data[i]);
                }
            }
        }
        if (temp.length >= numbers) {
            return true
        }
        else return false;
    },

    replace: function (data = [], value, func = ()=> {}) {
        data.forEach((element, index) => {
            if (value === null) {
                func(element, index);
            }
        });
    },

    getDistinct: function (data = []) {
        let res = [];
        data.forEach(element => {
            if (!JArray.find.getBoolean(res, element)) {
                res.push(element);
            }
        });
        return res;
    }
}

/**
 * Operation that deals with Array with Object {} as child
 */
export const JArrayObject = {

    search: function (data = [], value) {
        let res = [];
        data.forEach(element => {
            for (const key in element) {
                if (element[key].toString().toLowerCase().includes(value.toLowerCase())) {
                    if (!res.includes(element)) {
                        res.push(element);
                    }
                }
            }
        });
        return res;
    },

    getKeyValues: function (data = [], key = "") {
        let res = [];
        data.forEach(element => {
            res.push(element[key]);
        });
        return res;
    },

    getDistinctKeyValues: function (data = [], key = "") {
        let res = [];
        data.forEach(element => {
            if (!JArray.find.getBoolean(res, element[key])) {
                res.push(element[key]);                
            }
        });
        return res;
    },

    /**
     * Copy the content in 'from' to 'to'
     * @param {Array} to 
     * @param {Array} from 
     * Return true if the process is completed
     */
    copy:function(to = [], from = []) {
        from.forEach(element => {
            for (const key in element) {
                to[element][key] = from[element][key];
            }
        });
        return true;
    },

    /**
     * Search through array that has objects as children
     */
    find: {
        /**
         * Search through the array
         * @param {Array} data 
         * @param {Any} value 
         * @param {String} specifiedKey 
         * Return true if found
         */
        getBoolean:function(data = [], value, specifiedKey = ""){
            let res;
            let type = typeof value;
            if (value === undefined) {
                console.error("You cannot search empty value, kindly supply value to search.");
            }
        
            if (type === "number") {
                value = parseInt(value);
            }
            else if (type === "string") {
                value = value.toString();
            }
            else {
                console.error("You can only search for a number or word.");
            }
        
            data.forEach(element => {
                if (specifiedKey !== "") {
                    if (type === "string") {
                        if (JContent.equalsIgnoreCase(element[specifiedKey],value)) {
                            return res = true;
                        }
                    }
                    else {
                        if (element[specifiedKey] === value) {
                            return res = true;
                        }
                    }
                }
                else {
                    for (const k in element) {
                        if (type === "string") {
                            if (JContent.equalsIgnoreCase(element[k], value)) {
                                return res = true;                 
                            }
                        }
                        else {
                            if (element[k] === value) {
                                return res = true;                 
                            }
                        }
                    }
                }  
            });
            return res;
        },
    
        /**
         * Search through the array
         * @param {Array} data 
         * @param {Any} value 
         * @param {String} specifiedKey 
         * Return the index of the search
         */
        getIndex:function(data = [], value, specifiedKey = "") {
            let index;
            let type = typeof value;
            if (value === "") {
                console.error("You cannot search empty value, kindly supply value to search.");
            }
        
            if (type === "number") {
                value = parseInt(value);
            }
            else if (type === "string") {
                value = value.toString();
            }
            else {
                console.error("You can only search for a number or word.");
            }
        
            data.forEach(element => {
                if (specifiedKey !== "") {
                    if (element[specifiedKey] === value) {
                        return index = data.indexOf(element);
                    }
                }
                else {
                    for (const k in element) {
                        if (element[k] === value) {
                            return index = data.indexOf(element);                   
                        }
                    }
                }  
            });
    
            return index;
        },
    
        /**
         * Search through the array by the specifiedKey
         * @param {Array} data 
         * @param {Any} value 
         * @param {String} specifiedKey 
         * @param {String} valueKey
         * Return the value of the search according to the valueKey
         */
        getValue:function(data = [], value = "", specifiedKey = "", valueKey = "") {
            let res;
            let type = typeof value;
            if (value === "") {
                console.error("You cannot search empty value, kindly supply value to search.");
            }
        
            if (type === "number") {
                value = parseInt(value);
            }
            else if (type === "string") {
                value = value.toString();
            }
            else {
                console.error("You can only search for a number or word.");
            }
        
            data.forEach(element => {
                if (specifiedKey !== "") {
                    if (element[specifiedKey] === value) {
                        return res = element[valueKey];
                    }
                }
                else {
                    for (const k in element) {
                        if (element[k] === value) {
                            return res = element[valueKey];                   
                        }
                    }
                }  
            });
    
            return res;
        },
    
        /**
         * Search through the array by the specifiedKey
         * @param {Array} data 
         * @param {Any} value 
         * @param {String} specifiedKey 
         * @param {String} valueKey
         * Return the value of the search according to the valueKey
         */
        getObject:function(data = [], value = "", specifiedKey = "") {
            let res = {};
            let type = typeof value;
            if (value === "") {
                console.error("You cannot search empty value, kindly supply value to search.");
            }
        
            if (type === "number") {
                value = parseInt(value);
            }
            else if (type === "string") {
                value = value.toString();
            }
            else {
                console.error("You can only search for a number or word.");
            }
        
            data.forEach(element => {
                if (specifiedKey !== "") {
                    if (type === "string") {
                        if (JContent.equalsIgnoreCase(element[specifiedKey], value)) {
                            return res = element;
                        }
                    }
                    else {
                        if (element[specifiedKey] === value) {
                            return res = element;
                        }
                    }
                }
                else {
                    for (const k in element) {
                        if (type === "string") {
                            if (JContent.equalsIgnoreCase(element[k], value)) {
                                return res = element;               
                            }
                        } else {
                            if (element[k] === value) {
                                return res = element;               
                            }
                        }
                    }
                }  
            });
    
            return res;
        },

        getObjects:function(data = [], value = [], specifiedKey = []) {
            let res = [];
        
            data.forEach(element => {
                let item = specifiedKey[0];
                let search = element[item];

                if (search === value[0] && specifiedKey.length > 1) {
                    item = specifiedKey[1];
                    search = element[item];
                    if (search === value[1] && specifiedKey.length > 2) {
                        item = specifiedKey[2];
                        search = element[item]
                        if (search === value[2]) {
                            res.push(element);
                        }
                    }
                    else if (search === value[1]) {
                        res.push(element);                        
                    }
                }
                else if (search === value[0]) {
                    res.push(element);
                }
            });
            
            return res;
        }
    },


    /**
     * Delete an object from array of objects
     * @param {Array} data 
     * @param {String} specifiedKey 
     * @param {Any} search 
     * Return filtered array
     */
    deleteObject:function(data, specifiedKey, search) {
        let type = typeof search;
        if ((search || specifiedKey) === "") {
            console.error("You cannot search empty value, kindly supply value to search.");
        }
        if (data === []) {
            console.error("Data to search from cannot be empty");
        }
    
        if (type === "number") {
            search = parseInt(search);
        }
        else if (type === "string") {
            search = search.toString();
        }
        else {
            console.error("You can only search for a number or word.");
        }
    
        let index = this.find.getIndex(data,search,specifiedKey);
        if (index !== undefined) {
            delete data[index];
        }
        return data;
    },

    /**
     * Replace value in data
     * 
     * Supply replaceKey if the searchKey is not the key to replace
     * @param {Array} data 
     * @param {String} specifiedKey 
     * @param {Any} search 
     * @param {Any} replaceValue 
     * @param {String} replaceKey 
     * Return modified data
     */
    replaceValue:function(data = [], searchKey = "", search, replaceValue, replaceKey = "") {
        let type = typeof search;
        if ((search || replaceValue || searchKey) === "") {
            console.error("You cannot search empty value, kindly supply value to search.");
        }
    
        if (type === "number") {
            search = parseInt(search);
        }
        else if (type === "string") {
            search = search.toString();
        }
        else {
            console.error("You can only search for a number or word.");
        }

        let index = this.find.getIndex(data,search,searchKey);
        if (index !== undefined) {
            if (replaceKey !== undefined || "") {
                data[index][replaceKey] = replaceValue;
            } else {
                data[index][searchKey] = replaceValue;            
            }
        }
        
        return data;
    },

    /**
     * Replace value in data
     * 
     * Supply replaceKey if the searchKey is not the key to replace
     * @param {Array} data 
     * @param {String} specifiedKey 
     * @param {Any} search 
     * @param {Object} replaceValue 
     * @param {String} replaceKey 
     * Return modified data
     */
    replaceObject:function(data = [], searchKey = "", search, replaceObject = {}) {
        let type = typeof search;
        if ((search || replaceObject || searchKey) === "") {
            console.error("You cannot search empty value, kindly supply value to search.");
        }
    
        if (type === "number") {
            search = parseInt(search);
        }
        else if (type === "string") {
            search = search.toString();
        }
        else {
            console.error("You can only search for a number or word.");
        }
    
        let index = this.find.getIndex(data,search,searchKey);
        if (index !== undefined) {
            data[index] = replaceObject;
        }
        return data;
    },

    /**
     * Get keys in array of objects
     * @param {Array} data 
     * Return Array of present keys
     */
    getKeys:function(data) {
        var dataKey = [];
            for (const key in data[0]) {
                dataKey.push(key);
            }
            return dataKey;  
    },

    /**
     * Extract the objects into array according to the supplied keys
     * @param {Array} data 
     * @param {Array} keys 
     * Return array of objects that includes only the specified keys
     */
    extractByKey:function(data = [], keys = []) {
        if (data === []) {
            console.error("Data to extract from cannot be empty");
        }
    
        let list = [];
        data.forEach(element => {
            let temp = {};
            for (const key in element) {
                let masterKey = false;
                keys.forEach(item => {
                    if (JContent.equalsIgnoreCase(item, key)) {
                        return masterKey = true;
                    }
                });
    
                if (masterKey) {
                    temp[key] = element[key];
                }
            }
            list.push(temp);
        });
    
        return list;
    },

    /**
     * Remove the specified keys from the object of the specified array
     * @param {Array} data 
     * @param {Array} keys 
     * Return array of objects that excludes the specified keys
     */
    removeByKey:function(data = [], keys = []) {
        if (data === []) {
            console.error("Data to search from cannot be empty");
        }
    
        let list = [];
        data.forEach(element => {
            let temp = {};
            for (const key in element) {
                let masterKey = true;
                keys.forEach(item => {
                    if (JContent.equalsIgnoreCase(item, key)) {
                        return masterKey = false;
                    }
                });
    
                if (masterKey) {
                    temp[key] = element[key];
                }
            }
            list.push(temp);
        });
    
        return list;
    },

    /**
     * Check for empty value per key in array of objects
     * @param {Array} data 
     * @param {Function} feedback 
     * Execute the feedback function when empty value is found
     * Return true if no empty value is found
     */
    validate:function(data = [], feedback = () => {}, func = () => {} ) {
        let checker = true;
        data.forEach((element, index) => {
            for (const key in element) {
                if (element[key] === "" || element[key] === undefined || element[key] === [] ) {
                    if(feedback !== (undefined || null)){
                        feedback(`Item ${index + 1} - ${key.toUpperCase()} is required.`);
                    }
                    if (func !== undefined) {
                        func(key+(index+1));
                    }
                    return checker = false;
                }    
            }
        });
        return checker;
    },

    /**
     * Remove empty objects in array of objects
     * @param {Array} data 
     * Return modified array
     */
    trim:function(data = [{}]) {
        let res = [];
        data.forEach(element => {
            if (data[element] !== {}) {
                res.push(data[element]);
            }
        });

        return res;
    },

    convertKeys: {
        toArray: function (data = [], keys = []) {
            let res = [];
            data.forEach(element => {
                res.push(JObject.convertKeys.toArray(element, keys));
            });

            return res;
        }
    },

    customSort: function (property = "", order = "") {
        var sOrder = 1;
        if (order === "desc") {
            sOrder = -1;
        }

        return function (a, b) {
            if (a[property] < b[property]) {
                return -1 * sOrder;
            }
            else if (a[property] > b[property]) {
                return 1 * sOrder;
            }
            else return 0 * sOrder;
        }
    },

    getPercentage: function (data = [], key = "", keyValue, func = () => {}) {
        let type = typeof keyValue === "boolean"? false : true;
        let counter = 0;
        if (!type) {
            data.forEach(element => {
                if (element[key] === keyValue) {
                    if (func !== undefined) {
                        func(element);
                    }
                    counter++;
                }
            });
        }
        else {
            data.forEach(element => {
                keyValue.forEach(item => {
                    if (element[key] === item) {
                        if (func !== undefined) {
                            func(element);
                        }
                        return counter++;
                    }
                });
            });
        }

        let percentage = 0;
        if (data.length > 0) {
            percentage = (counter / data.length) * 100;             
        }

        return percentage;
    },

    merge: function (array1 = [{}], array2 = [{}]) {
        var res = [];
        array1.forEach(element => {
            res.push(element);
        });
        array2.forEach(element => {
            res.push(element);
        });
        return res;
    },

    addKey: function (data = [{}], keyLabel = [], keyValue =[], index) {
        if (index) {
            for (let j = 0; j < keyLabel.length; j++) {
                data[index][keyLabel[j]] = keyValue[j];
            }
        } 
        else {
            data.forEach(element => {
                for (let i = 0; i < keyLabel.length; i++) {
                    element[keyLabel[i]] = keyValue[i];                    
                }
            });
        }
        return data;
    },

    replaceKey: function (data = [{}], currentKey = [""], replaceKey = [""]) {
        data.forEach(element => {
            for (const key in element) {
                if (JArray.find.getBoolean(currentKey, key)) {
                    const value = element[key];
                    const index = currentKey.indexOf(key);
                    const newKey = replaceKey[index];
                    element[newKey] = value;
                    delete element[key];
                }
            }
        });
    },

    getDistinct: function (data = [], key) {
        let res = [];
        data.forEach(element => {
            if (key !== undefined) {
                if (!JArray.find.getBoolean(res, element[key])) {
                    res.push(element[key]);
                }
            }
            else {
                if (!JArrayObject.find.getBoolean(res, element)) {
                    res.push(element);
                }
            }
        });
        return res;
    }
    
}

/**
 * Object operation
 */
export const JObject = {

    copy:function(to = {}, from ={}) {
        for (const key in from) {
            to[key] = from[key];
        }
        return true;
    },

    find: {
        getBoolean: function(data = {}, value) {
            for (const key in data) {
                if (data[key] === value) {
                    return true;            
                }
            }
            return false
        },
        getArray: function (data = {}, value) {
            let res = [];
            for (const key in data) {
                if (key.includes(value)) {
                    res.push(key);
                }
            }
            return res;
        }
    },

    removeKey:function(data = {}, keys = []) {
        if (data === {}) {
            console.error("Data to search from cannot be empty");
        }
    
            let temp = {};
            for (const key in data) {
                let masterKey = true;
                keys.forEach(item => {
                    if (JContent.equalsIgnoreCase(item, key)) {
                        return masterKey = false;
                    }
                });
    
                if (masterKey) {
                    temp[key] = data[key];
                }
            }
    
        return temp;
    },

    /**
     * Extract the objects into array according to the supplied keys
     * @param {Object} data 
     * @param {Array} keys 
     * Return array of objects that includes only the specified keys
     */
    extractByKey:function(data = {}, keys = []) {
        if (data === {}) {
            console.error("Data to extract from cannot be empty");
        }
    
        let temp = {};
        for (const key in data) {
            let masterKey = false;
            keys.forEach(item => {
                
                if (JContent.equalsIgnoreCase(item, key)) {
                    return masterKey = true;
                }
            });

            if (masterKey) {
                temp[key] = data[key];
            }
        }
    
        return temp;
    },

    getKeys:function(data) {
        var dataKey = [];
            for (const key in data) {
                dataKey.push(key);
            }
            return dataKey;  
    },

    getDummy:function() {
        return "";
    },

    validate:function(fieldCollection, feedback = () => {}, func = () => {}) {
        for (const key in fieldCollection) {
    
            if(fieldCollection[key] === "" || fieldCollection[key].length === 0 || fieldCollection[key] === undefined || fieldCollection[key] === null || fieldCollection[key] === []){
                let info = `${JContent.detachString(key, " ").toUpperCase()} is required.`;
                if (feedback !== (undefined || null)) {
                    feedback(info);
                }
                if (func !== undefined) {
                    func(key, info);
                }
                return false;
            }
            else if (typeof fieldCollection[key] === "object" && !Array.isArray(fieldCollection[key])) {
                for (const k in fieldCollection[key]) {
                    if(fieldCollection[key][k] === "" || fieldCollection[key][k].length === 0 || fieldCollection[key][k] === undefined || fieldCollection[key][k] === null){
                        let info = `${JContent.detachString(k, " ").toUpperCase()} is required.`;
                        if (feedback !== (undefined || null)) {
                            feedback(info);
                        }
                        if (func !== undefined) {
                            func(k, info);
                        }
                        return false;
                    }
                }
            }
            
        }
         return true;
    },

    convertKeys: {
        toArray: function (data = {}, keys = []) {
            var res = {};
            for (const key in data) {
                keys.forEach(item => {
                    if (JContent.JContent.equalsIgnoreCase(key, item)) {
                        res[key] = [data[key]];
                    }
                    else res[key] = data[key];
                });
            }

            return res;
        }
    }
}

/**
 * Operation that deals with text
 */
export const JContent = {

    detachString: function (string = String, by = " ") {
        let res = "";
        for (let i = 0; i < string.length; i++) {
            let char = string[i];
            if (/[A-Z]/.test(char) && i > 0) {
                char = by + string[i];
            }
            res += char;
        }
        return res;
    },

    getPercentage: function (value=0, total=0) {
        console.log(value +"YEEEEEEE"+ parseFloat(value))
        return (parseFloat(value) / parseFloat(total)) * 100;
    },

    trimToLowerCase:function(string = "") {
        if (string !== null && string !== "") {
            return string.replace(/ /g,"").toUpperCase();        
        }
    },

    trimToUpperCase:function(string = "") {
        if (string !== null && string !== "") {
            return string.replace(/ /g,"").toUpperCase();        
        }
    },

    trimToSentenceCase:function(string = "") {
        if (string !== null && string !== "") {
            return JContent.toSentenceCase(string.replace(/ /g,""));
        }
    },

    toSentenceCase:function(data = "") {
        let res = "";
        for (let letter = 0; letter <= data.length; letter++) {
            
            if(letter === 0){
                res += data.charAt(letter).toUpperCase();
            }
            else {
                res += data.charAt(letter).toLowerCase();
            }        
        }
        return res;
    },

    toTitleCase: function (string = "") {
        let res = "";
        let jump = false;
        for (let i = 0; i < string.length; i++) {
            if (jump) {
                jump = false;
                continue;
            }

            let char = string[i];
            if (i === 0) {
                char = char.toUpperCase();
            }
            if (char === " " && i+1 < string.length) {
                res += " "+string[i+1].toUpperCase();
                jump = true;
            }
            else res += char;            
        }
        return res;
    },

    /**
     * 
     * @param {*} string1 
     * @param {*} string2 
     */
    equalsIgnoreCase:function(string1 = "", string2 = "") {
        string1 = string1.toLowerCase();
        string2 = string2.toLowerCase();
        if (string1 === string2) {
            return true;
        }
        return false
    },

    random: {
        alphabet:function(length = 0) {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz";
            var res = "";
            for (let i = 0; i < length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                res += chars.substring(rnum,rnum+1);
            }
            return res;
        },

        password:function(length = 0) {
            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopq~!@#$%^*&()-_=+`/?/.,><':;rstuvwxyz";
            var res = "";
            for (let i = 0; i < length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                res += chars.substring(rnum,rnum+1);
            }
            return res;
        },

        alphanumeric:function(length = 0) {
            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz";
            var res = "";
            for (let i = 0; i < length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                res += chars.substring(rnum,rnum+1);
            }
            return res;
        },

        number:function(length = 0) {
            var chars = "0123456789";
            var res = "";
            for (let i = 0; i < length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                res += chars.substring(rnum,rnum+1);
            }
            return res;
        }
    },

    extract: function(str = "", start = 0, end = 0) {
        let res = "";
        for (let i = start; i <= end; i++) {
            res += str[i];            
        }
        return res;
    },

    remove: function (str = "", start = 0, end = 0) {
        let res = "";
        for (let i = start; i < str.length; i++) {
            if (i > end) {
                res += str[i];
            }            
        }
        return res;
    },

    time: {
        addMM: function(time = "", min = 0) {
            let res = "";
            if (time.length !== 5) {
                console.warn("Time should be 00:00 format");
            }
            var HH = parseInt(JContent.extract(time, 0, 1));
            var MM = parseInt(JContent.extract(time, 3, 4));
            MM += min;
            if (MM >= 60) {
                HH += 1;
                MM -= 60;
                if (HH >= 24) {
                    HH = 0;
                }
            }
            HH = HH.toString();
            MM = MM.toString();

            if (HH.length === 1) {
                HH = "0"+HH;
            }
            if (MM.length === 1) {
                MM = "0"+MM;
            }

            res = HH + ":" + MM;
            return res;
        },
        subTT: {
            getTime: function(time1 = "", time2 = "") {
                let res = "";
                if ((time1.length !== 5) || (time2.length !== 5)) {
                    console.warn("Time should be 00:00 format");
                }
                var HH1 = parseInt(JContent.extract(time1, 0, 1));
                var MM1 = parseInt(JContent.extract(time1, 3, 4));
                var HH2 = parseInt(JContent.extract(time2, 0, 1));
                var MM2 = parseInt(JContent.extract(time2, 3, 4));
                var HH = 0;
                var MM = 0;
                
                MM = MM2 - MM1;
                HH = HH2 - HH1;
                if (MM < 0) {
                    MM = 0;
                    if (HH < 0) {
                        HH = 0;
                    }
                }
    
                HH = HH.toString();
                MM = MM.toString();
    
                if (HH.length === 1) {
                    HH = "0"+HH;
                }
                if (MM.length === 1) {
                    MM = "0"+MM;
                }
    
                res = HH + ":" + MM;
                return res;
    
            },
            getMinute: function(time1 = "", time2 = "") {
                let res = 0;
                if ((time1.length !== 5) || (time2.length !== 5)) {
                    console.warn("Time should be 00:00 format");
                }
                var HH1 = parseInt(JContent.extract(time1, 0, 1));
                var MM1 = parseInt(JContent.extract(time1, 3, 4));
                var HH2 = parseInt(JContent.extract(time2, 0, 1));
                var MM2 = parseInt(JContent.extract(time2, 3, 4));
                var HH = 0;
                var MM = 0;
                
                MM = MM2 - MM1;
                HH = HH2 - HH1;
    
                res = (HH * 60) + MM;
                return res;
    
            },
            getSecond: function(time1 = "", time2 = "") {
                let res = 0;
                if ((time1.length !== 5) || (time2.length !== 5)) {
                    console.warn("Time should be 00:00 format");
                }
                var HH1 = parseInt(JContent.extract(time1, 0, 1));
                var MM1 = parseInt(JContent.extract(time1, 3, 4));
                var HH2 = parseInt(JContent.extract(time2, 0, 1));
                var MM2 = parseInt(JContent.extract(time2, 3, 4));
                var HH = 0;
                var MM = 0;
                
                MM = MM2 - MM1;
                HH = HH2 - HH1;
    
                res = ((HH * 60) + MM) * 60;
    
                res = HH + ":" + MM;
                return res;
    
            }
        }
    },

    date: {
        getToday: function (separator = "", format = "") {
            var d = new Date();
            var dd = d.getDate().toString();
            var mm = (d.getMonth()+1).toString();
            if (dd.length === 1) {
                dd = "0"+dd;
            }
            if (mm.length === 1) {
                mm = "0"+mm;
            }
            return `${d.getFullYear()}${separator}${mm}${separator}${dd}`;
        }
    },

    highlight: function (innerHtml = "", search = "") {
        // const rp = <mark>{search}</mark>;
        // console.log(innerHtml.replace(/Term/g, rp));
        // var res =  <span> {rp} </span>
        return innerHtml;
    },
    getDocumentIds: function (doc) {
        var IDs = [];
        const elements = doc.querySelectorAll("*[id]:not([id=''])");
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            IDs.push(element.ids);
        }
        return IDs;
    }
}

/**
 * Operation that deals with http request
 */
export const JHttp = {
    put:function(updateAddress,id,updateData,processSucceed,processFail) {
        //Update DB
        axios.put(`${updateAddress}/${id}`,updateData).then((d)=> {
            return processSucceed(d.data);
        }).catch(ca => {
            return processFail(ca);
        });
    },

    get:function(getAddress,dataRetrieved,dataNotRetrieve) {
        axios.get(getAddress).then((data) => {
            return dataRetrieved(data.data);
        }).catch(error => {
            if (dataNotRetrieve !== undefined) {
                return dataNotRetrieve(error);            
            }
        });
    },

    getSingle:function(getAddress,searchString,dataRetrieved,dataNotRetrieve) {
        axios.get(`${getAddress}/${searchString}`).then((data) => {
            return dataRetrieved(data.data);
        }).catch((ca) => {
            if (dataNotRetrieve !== undefined) {
                return dataNotRetrieve(ca);
            }
        })
    },

    post:function(postAddress,formData,processSucceed,processFail) {
        //Post to DB
        axios.post(postAddress,formData).then((d) => {
            return processSucceed(d.data);
        }).catch((ca) => {
            if(processFail !== undefined){
                return processFail(ca);        }
        });
    },

    request:function(postAddress,processSucceed,processFail) {
        //Post to DB
        axios.request(postAddress).then((d) => {
            return processSucceed(d.data);
        }).catch((ca) => {
            if(processFail !== undefined){
                return processFail(ca);        }
        });
    },

    check:function(getAddress,searchString,ifSearchStringIsEmpty,dataNotExist,dataExist,processFail) {
        if(searchString !== ""){
            // Check for existence in DB
            axios.get(`${getAddress}/${searchString}`).then((d)=> {
                if ((d.data) == null) {
                    //Proceed
                    return dataNotExist();
                }
                else {
                    return dataExist();
                }
            }).catch((ca) => {
                    //Error Info
                    return processFail(ca);
            });
        }
        else {
            return ifSearchStringIsEmpty();
        }
    },

    indexedDB: {
        save: function (DBName = "", DBVersion = 0, data, dataType = "", key = "", DBType = "readwrite", onError, onSuccess) {
            // In the following line, you should include the prefixes of implementations you want to test.
            window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            // DON'T use "var indexedDB = ..." if you're not in a function.
            // Moreover, you may need references to some window.IDB* objects:
            window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
            window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
            // (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)
            if (!window.indexedDB) {
                console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
            }

            var request = window.indexedDB.open(DBName, DBVersion);
            request.onerror = function (e) {
                if (onError) {
                    onError(e);
                }
            }

            request.onupgradeneeded = function (e) {
                var db = e.target.result;
                var objStore = db.createObjectStore(key, {autoIncrement: true});

                switch (dataType) {
                    case "array":
                        data.forEach(element => {
                            objStore.add(element);
                        });
                        break;
                    case "object":
                        objStore.add(data);
                        break;                
                    default:
                        break;
                }
            }
            request.onsuccess = function (e) {
                var db = e.target.result;
                var transaction = db.transaction([key], DBType);
                var objStore = transaction.objectStore(key);

                switch (dataType) {
                    case "array":
                        data.forEach(element => {
                            objStore.add(element);
                        });
                        break;
                    case "object":
                        objStore.add(data);
                        break;                
                    default:
                        break;
                }

                if (onSuccess) {
                    onSuccess(e);
                }
            }
            
        }
    }
}

/**
 * Validation process
 */
export const JValidate = {
    digitRestriction:function(value = 0, totalSum = 0, length = 0) {
        value = parseInt(value);
        if ((value <= totalSum) && (value.toString().length <= length)) {
            return value;
        }
        else return 0;
    },
    singleExtraField:function(data, extraFieldName,extraCount, feedback, feedbackMsg) {
        for (let index = 0; index <= extraCount; index++) {
            if (index === 0) {
                index = "";
            }
            if(data[extraFieldName+index] === ""){
                if (feedback !== undefined) {
                    feedback(feedbackMsg);
                }
                return false;
            }            
        }
        return true;
    },

    arrayObject:function(data = [], feedback = () => {} ) {
        let checker = true;
        data.forEach((element, index) => {
            for (const key in element) {
                if (element[key] === "" || element[key] === undefined ) {
                    if(feedback !== undefined){
                        feedback(`Item ${index + 1} - ${key.toUpperCase()} is required.`);
                    }
                    return checker = false;
                }    
            }
        });
        return checker;
    },

    object:function(fieldCollection, feedback) {
        for (const key in fieldCollection) {
    
            /**if a field is found empty bring up the danger typed closeables. */
            if(fieldCollection[key] === "" || fieldCollection[key].length === 0 || fieldCollection[key] === undefined){
                feedback(`${key.toUpperCase()} is required.`);
                return false;
            }
            
        }
         /**this line is important */
         return true;
    },

    event:function(type, val) {
    
        if(type === "text"){
            return false;
        }
        else if(type === "tel") {
            return false;
        }
        else if(type === "email") {
            return false;
        }
        else if(type === "name") {
            return false;
        }
        else if(type === "password") {
            var str = val;
            var letterCount = 0, numCount = 0;
            for(let i = 0; i < str.length; i++ ){
                var ch = str.charAt(i);
                if(isNaN(ch)){
                    letterCount = letterCount + 1;
                }
                else {
                    numCount = numCount + 1;
                }
            }
            if( (letterCount && numCount) >= 3 ){
                return true;
            }
            else {
                return false;
            }
    
        }
        else {
            return false;
        }
    }
}

/**
 * Filtering process
 */
export const JFilter = {
    event:function(e) {
        if( (e.target.dataset.type === undefined) && (e.target.type === undefined) ){
            
            return console.log("Filtering Failed!!! \n\nKindly set [data-type] or [type] attribute in your input field. \n\n [data-type] can only take text,tel,email,name,username.");
        }
        else {
            if(e.target.dataset.type !== undefined){
                if(e.target.dataset.type === "text"){
                    return e.target.value;
                }
                else if(e.target.dataset.type === "tel") {
                    return e.target.value.replace(/[^0-9- +]/g,"");
                }
                else if(e.target.dataset.type === "email") {
                    return e.target.value.replace(/[^a-zA-Z0-9@._-]/g,"");
                }
                else if(e.target.dataset.type === "name") {
                    return e.target.value.replace(/[^a-zA-Z]/g,"");
                }
                else if(e.target.dataset.type === "username"){
                    return e.target.value.replace(/[^a-zA-Z0-9]/g,"");
                }
                else if(e.target.dataset.type === "multiName"){
                    return e.target.value.replace(/[^a-zA-Z ]/g,"");
                }
                else if(e.target.dataset.type === "number"){
                    return e.target.value.replace(/[^0-9]/g,"");
                }
                else if(e.target.dataset.type === "session"){
                    let val = e.target.value.replace(/[^0-9]/g,"");
                    var output = [val.slice(0,4), "/",val.slice(4)].join("");
                    return output;
                }
                else if(e.target.dataset.type === "singleText"){
                    return e.target.value.replace(/[^a-zA-Z0-9-_/*-+%$#@!?><.,]/g,"");
                }
                else if (e.target.dataset.type === "year") {
                    return JValidate.digitRestriction(e.target.value.replace(/[^0-9]/g,""), 9999, 4);
                }
                else {
                    return console.log("Filtering Failed!!! \n\nKindly set [data-type] or [type] attribute in your input field. \n\n [data-type] can only take text,tel,email,name,username and number.");
                }
            }
            else {
                if(e.target.type === "text"){
                    return e.target.value;
                }
                else if(e.target.type === "tel") {
                    return e.target.value.replace(/[^0-9+ -]/g,"");
                }
                else if(e.target.type === "email") {
                    return e.target.value.replace(/[^a-zA-Z0-9@._-]/g,"");
                }
                else if(e.target.type === "name") {
                    return e.target.value.replace(/[^a-zA-Z]/g,"");
                }
                else if(e.target.type === "number"){
                    return e.target.value.replace(/[^0-9]/g,"");
                }
                else {
                    return e.target.value;
                }
            }
        }
    }
}

/**
 * File processing
 */
export const JFile = {
    /**
     * 
     * @param {Array} data 
     * @param {Array} heading 
     * @param {String} output 
     */
    exportCsv:function( data = [], heading = [], output = ""){
        var csvRow = [];
        var content = [heading];
    
        for (let item = 0; item < data.length; item++) {
            let builder = [] ;
            JArrayObject.getKeys(data).forEach(element => {
                    builder.push(data[item][element]);
            });
            content.push(builder);
        }
    
        for (let i = 0; i < content.length; i++) {
            csvRow.push(content[i].join(","));
        }
        var csvString = csvRow.join("%0A");
        
        var a = document.createElement("a");
        a.href = "data:attachment/csv," + csvString;
        a.target = "_Blank";
        let outputName = (output === "" || output === undefined)?JContent.random.alphabet(10):output;
        a.download =  outputName.concat(".csv");
        document.body.appendChild(a);
        a.click();
    },

    importCsv:function(fileId = "") {
    return new Promise( res =>{

            var file = document.querySelector("#"+fileId).files[0];
            var reader = new FileReader();
            
            reader.onload = function(event) {
                let result = [];
                //get the file
                var csv = event.target.result;
    
                //split and get the rows in an array
                var rows = csv.split("\r\n");
                let keys = [];
    
                //Line by line
                for (let i = 0; i < rows.length-1; i++) {
                    var cols = rows[i].split(',');
    
                    let temp = {};
    
                    //column by column
                    for (let j = 0; j < cols.length; j++) {
                        
                        //Get the first line and use it for key
                        if (i === 0) {
                            keys.push(cols[j]);
                        }
                        //Build object per line
                        else {
                            temp[keys[j]] = cols[j];
                        }
    
                    }
    
                    if (i !== 0) {
                        result.push(temp);                    
                    }
                }
              res(result);
            }
            reader.readAsText(file);
        });
    
    }
}


/**
 * Date Functions
 */
export const JDate = {
    get: {
        DDMMYYYY: function (separator = "", date) {
            if (date === undefined) {
                date = new Date();
            }
            var d = date;
            var dd = d.getDate().toString();
            var mm = (d.getMonth()+1).toString();
            if (dd.length === 1) {
                dd = "0"+dd;
            }
            if (mm.length === 1) {
                mm = "0"+mm;
            }
            return `${d.getFullYear()}${separator}${mm}${separator}${dd}`;
        }
    }
}

/**
 * JPC VERSION 2.0.0
 * 
 * The End
 */

/**
 * JPC VERSION 3.0.0
 * 
 * Beginning
 */
export const JPC = {

}