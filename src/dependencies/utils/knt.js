import React from 'react';
import moment from 'moment'

/**
 * 
 * @param {*} name 
 * @param {*} data 
 */
export const biKeyObjectBuilder = (name = "", data) => {
    var temp = {
        name: name,
        data: data,
    }
    return temp;
}

    /**
     * @param {reportUrl} url
     * @param {reportsSubLinks} reportSubUrl 
     * @param {id} key 
     */
    
    export const handleTriUrl = (url, subUrl, key) => {
        let id = key;
        return (`${url}${subUrl}`+ id);
    }

    /**
     * supply linked url branched 
     * @param {baseUrl} url 
     * @param {subLink} subUrl 
     */
    export const handleBiUrl = (url, subUrl) => {
        return (`${url}${subUrl}`);
    }
    /**
     * supply any single url
     * @param {url} url 
     */
    export const handleUrl = (url) => {
        return (`${url}`);
    }


    export const EmptyText = (props) => {
        return (
            <div>
            {
                (props.data !== "" || props.data !== null || props.data !== undefined)?
                props.children
                :
                ""
            }
            </div>
        )
    }





    export const exportCsv = ( data = [],heading = [], output = "") => {
        var csvRow = [];
        var content = [heading];
        if (heading === undefined || heading === [] || heading === null) {
            content = [getArrayObjectKeys(data)];
        }
    
        for (let item = 0; item < data.length; item++) {
            let builder = [] ;
            getArrayObjectKeys(data).forEach(element => {
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
        let outputName = (output === "" || output === undefined)?"document":output;
        a.download =  outputName.concat(".csv");
        document.body.appendChild(a);
        a.click();
    }




    export const getArrayObjectKeys = (data) => {
        var dataKey = [];
            for (const key in data[0]) {
                dataKey.push(key);
            }
            return dataKey;  
    }






    /**
     * string value expected
     * @param {string} item 
     */    
    
    export const joinCovertToLowerCase = (string = "") => {
        if (string !== null && string !== "") {
            return string.replace(/ /g,"").toLowerCase();        
        }
    }


    // export const Kmap {

    // }
    export const optionList = function(data = []){
        return data.map(([x, v], y) => (
            <option key={y} name={x} value={v}>{v}</option>
        ));
    }
    
    export const pList = function(x, y, type){
        return <p key={y} value={x}>{x}</p>
    }

    export const KNTArray = {
        /**
         * 
         * @param {add up items in an array} data 
         */
        addAll:function(data = []) {
            var res = 0;

            for (let k = 0; k < data.length; k++) {
                res += parseFloat(data[k]);
            }
            return res;
        },
        /**
         * 
         * @param {total sum} total 
         * @param {number} item
         * it will return percentage of number from total sum 
         */
        cent: function(total, item) {
            let cal = item / total * 100;          
            return cal.toFixed(1);
        },
        /**
         * 
         * @param {array of Numbers} data 
         * ite will return array of percent
         * adding all as total
         */
        percent: function(data){
            var res = [];
            let total = this.addAll(data);
            for(let i = 0; i < data.length; i++){
                res.push(this.cent(total, parseFloat(data[i])));
            }
            return res
        },
        /**
         * 
         * @param {total sum expected} total 
         * @param {array of numbers} data 
         * it will return array of percentage 
         */
        percentWithTotal: function(total, data = []) {
            let res = [];
            for(let k = 0; k < data.length; k++){
                res.push(this.cent(total, parseFloat(data[k])));
            }
            return res;
        },    
       
    };


    export const KNTObject = {
        optionList:function(data = []){
            return Object.entries(data).map(([x, v], y) => (
                <option key={y} name={v} value={x}>{v}</option>
            ));
        }
    };


    export const roundArray = (data) => {
         data = []; let res = [];       
        for(let i = 0; i <= data.length; i++){
            res = Math.round(data[i])
        }
        return res
    };

    export const KNTGraph = {
        /**
         * bar Chart data of two series type
         */
        bar: function(data1, data2,label){
            
            return {
                type: "bar",
                label: label,
                series: [
                    {
                        data: Object.entries(data1).map(([key, v], i) => v),
                        name: "male",
                    },  
                    {
                        data: Object.entries(data2).map(([key, v], i) => v),
                        name: "Female",
                    },  
                ],
                categories : Object.entries(data1).map(([key], i) => key),
            }
        },
        /**
         * line Chart data of two series type
         */
        line: function(data1, data2,label,){            
            return {
                type: "line",
                label: label,
                series: [
                    {
                        data: Object.entries(data1).map(([key, v], i) => v),
                        name: "Male",
                    },  
                    {
                        data: Object.entries(data2).map(([key, v], i) => v),
                        name: "Female",
                    },  
                ],
                categories : Object.entries(data1).map(([key], i) => key),
            }
        },
        donut: function(data, subject){
            var res = data;
            return {
                type: "donut",
                labels: Object.entries(res).map(([k,v], i)=>(k)),
                data: Object.entries(res).map(([k,v], i)=>(v)),
                subject: subject,
            }
        },
        radial: function(data, subject){
            var res = data;
            return {
                type: "radial",
                labels: Object.entries(res).map(([k,v], i)=>(k)),
                data: Object.entries(res).map(([k,v], i)=>(v)),
                subject: subject,
            }
        },
    };

    export const KNTDate = {
        getCurrentYear:function getYear() {
            return (new Date().getFullYear())
        },
        getPreviousYear:function getYear() {
            return (new Date().getFullYear() - 1)
        },
        getNextYear:function getYear() {
            return (new Date().getFullYear() + 1)
        },
        getCustomYear: function(period = Number){
            // period.toString()
            if(period !== String || "" || NaN){
                return (new Date().getFullYear() + period)
            } else {
                return console.debug("Sorry Kindly Supply an Number At KNTDate.getCustomYear() e.g KNTDate.getCustomYear(5)");
            }
        },
        getTodayDate : {
            full: function () {
                var day = new Date().getUTCDate();
                var month = (new Date().getMonth() + 1);
                var year = new Date().getFullYear();
                let date = `${day}/${month}/${year}`;
                return date
            },
            day:function(){return new Date().getUTCDate();},
            time:function(){return new Date().toLocaleTimeString(); },
        },       
    };
 

    
    export const getPercentage = () => {
        // var data = []
        // convert back to 100%
        // let data = [50,120,70,67,150]
         
        // let sum = [data.reduce((i, e)=>{
        //     return i + e;
        // })];   
    
        // let cent = 100;
        // let cal = cent / sum
    
        // var result = data.map((data) => data * cal  );
        // console.log(result)
    }


    // export progressDiv = (undoneTask, doneTask, initialTask) =>{
    //     return (
    //         <div className="knt-d-progress-fill knt-d-width-change" style={{"--w": `${100/initialTask*doneTask}%`}} >
    //              {Math.trunc(100/initialTask*doneTask)}%
    //         </div>
    //     )
    //  }



    /**
     * KNT VERSION 2.0
     * start
     */
    export const KNT = {
        /**Array */
        array: {
            /**
             * 
             * @param {add up items in an array} data 
             */
            addAll:function(data = []) {
                var res = 0;

                for (let k = 0; k < data.length; k++) {
                    res += parseFloat(data[k]);
                }
                return res;
            },
            /**
             * It return Boolean True/False
             * @param {string to search} string 
             * @param {array of data} arrayOfData 
             */
            include: function(string="", arrayOfData){
                return (arrayOfData.indexOf(string) > -1)
            },
            maxNumInArr: function (data = []) {
                return Math.max(...data)
            },
            // getDistinct: function(arr){
            //     let temp = [];
            //     arr.forEach(element => {
            //         if(this.include(element, temp) > 1){
            //             temp.push(element)
            //         }
            //     });
            //     return (console.log(temp));
            // }
            /**
             * 
             * @param {total sum} total 
             * @param {number} item
             * it will return percentage of number from total sum 
             */
            cent: function(total, item) {
                let cal = (item / total) * 100;          
                return cal.toFixed(1);
            },
            /**
             * 
             * @param {array of Numbers} data 
             * ite will return array of percent
             * adding all as total
             */
            percent: function(data){
                var res = [];
                let total = this.addAll(data);
                for(let i = 0; i < data.length; i++){
                    res.push(this.cent(total, parseFloat(data[i])));
                }
                return res
            },
            /**
             * 
             * @param {total sum expected} total 
             * @param {array of numbers} data 
             * it will return array of percentage 
             */
            percentWithTotal: function(total, data = []) {
                let res = [];
                for(let k = 0; k < data.length; k++){
                    res.push(this.cent(total, parseFloat(data[k])));
                }
                return res;
            },
            // arr: function(mainArray = [], subArray = []){
            //     let arr = [];
            //     subArray.forEach(el => {
            //         mainArray.forEach(mr => {
            //             mr.search(el)? arr.push(el): arr.push("")
            //         })
            //     });
            //     return arr;
            // }
        },

        /**Strings */
        string: {
            titleCase: function(string){
                return string.replace(
                    /(\w*\W*|\w*)\s*/g, 
                    function(txt){
                        return(txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() )
                    }
                )
            },
            toUpperCase: function(string = ""){
                return string.toUpperCase();
            },
            equalsIgnoreCase: function(string1 ="", string2 =""){
                string1 = string1.toLowerCase();
                string2 = string2.toLowerCase();
                if(string1 === string2){
                    return true;
                } 
                return false;
            },
            /**
             * It return String Base on Range Specify
             * @param {Supply String} str 
             * @param {Define Start} start 
             * @param {Define End} end 
             */
            extract: function(str = "", start = 0, end = 0) {
                let res = "";
                for (let i = start; i <= end; i++) {
                    res += str[i];            
                }
                return res;
            },
        },
        /**Date And Moments */
        date: {
            getCurrentYear:function getYear() {
                return (new Date().getFullYear())
            },
            getPreviousYear:function getYear() {
                return (new Date().getFullYear() - 1)
            },
            getNextYear:function getYear() {
                return (new Date().getFullYear() + 1)
            },
            getCustomYear: function(period = Number){
                // period.toString()
                if(period !== String || "" || NaN){
                    return (new Date().getFullYear() + period)
                } else {
                    return console.debug("Sorry Kindly Supply an Number At KNTDate.getCustomYear() e.g KNTDate.getCustomYear(5)");
                }
            },
            getTodayDate : {
                full: function () {
                    var day = new Date().getUTCDate();
                    var month = (new Date().getMonth() + 1);
                    var year = new Date().getFullYear();
                    let date = `${day}/${month}/${year}`;
                    return date
                },
                day:function(){return new Date().getUTCDate();},
                time:function(){return new Date().toLocaleTimeString(); },
            },
            /**
             * Supply the current moment
             * it return Morning, Afternoon Or Evening
             * @param {moment()} m 
             */
            getGreetingTime: function(m = moment()){
                var g = null;

                if(!m || !m.isValid()) {return;}
                
                var split_afternoon = 12;
                var split_evening = 16;
                var currentHour = parseFloat(m.format("HH"));
                
                if(currentHour >= split_afternoon && currentHour <= split_evening) {
                    g = "Afternoon";
                } else if (currentHour >= split_evening) {
                    g = "Evening"
                } else {
                    g = "Morning"
                }
                return g
            },
        },
        /**
         * supply url to convert
         * @param {imageUrl} base64 
         */
        image: function(base64 = "", className =""){
            return <img src={base64}  className={className} alt=""/>
        },
        getBase64Image: function(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            var dataURL = canvas.toDataURL("image/png");
            return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        },
        grade:function(gradeScoreOverHundred){
            if(gradeScoreOverHundred >=95 && gradeScoreOverHundred <= 100 ){
                return "A+"
            } else
            if(gradeScoreOverHundred >=90 && gradeScoreOverHundred <= 94 ){
                return "A"
            } else
            if(gradeScoreOverHundred >=85 && gradeScoreOverHundred <= 89 ){
                return "B+"
            } else
            if(gradeScoreOverHundred >=80 && gradeScoreOverHundred <= 84 ){
                return "B"
            } else
            if(gradeScoreOverHundred >=75 && gradeScoreOverHundred <= 79 ){
                return "C+"
            } else
            if(gradeScoreOverHundred >=70 && gradeScoreOverHundred <= 74 ){
                return "C";
            } else
            if(gradeScoreOverHundred >=65 && gradeScoreOverHundred <= 69 ){
                return "D+";
            } else
            if(gradeScoreOverHundred >=60 && gradeScoreOverHundred <= 64 ){
                return "D";
            } else
            if(gradeScoreOverHundred >=0 && gradeScoreOverHundred <= 59 ){
                return "F";
            } else return "Failed";
        },
        credit:function(gradeScoreOverHundred = Number){
            // let ninetyCent = 0.9; 
            // let seventyFiveCent = 0.75;
            // let fiftyCent = 0.5;
            // let fourtyCent = 0.04;
            // var gradeScoreOverHundred = this.array.cent(expected, score);
            if(gradeScoreOverHundred >=95 && gradeScoreOverHundred <= 100){
                return "Excellent"
            } else
            if(gradeScoreOverHundred >=75 && gradeScoreOverHundred <= 94 ){
                return "Credit"
            } else
            if(gradeScoreOverHundred >=50 && gradeScoreOverHundred >= 74 ){
                return "Pass+"
            } else
            if(gradeScoreOverHundred >=0 && gradeScoreOverHundred <= 49 ){
                return "Fair"
            } else return "";
            // if(gradeScoreOverHundred >= (seventyFiveCent * expected) && >= (ninetyCent * expected)){
            //     return "Excellent"
            // } else
            // if(gradeScoreOverHundred >= (fiftyCent * expected) <= (seventyFiveCent * expected)){
            //     return "Credit"
            // } else
            // if(gradeScoreOverHundred >= (fourtyCent * expected) <= (fiftyCent * expected) ){
            //     return "Pass+"
            // } else
            // if(gradeScoreOverHundred < (fourtyCent * expected) ){
            //     return "Fail"
            // } else
            // return "Failed";
        },

    }

    /**
     * KNT VERSION 2.0 
     * end
     */


                       