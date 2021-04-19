export default class HttpFactory {
    static CACHE = "force-cache";
    static NO_CACHE = "no-cache";
    static IF_CACHED = "only-if-cached";
  
    static JSON = "json";
    static TEXT = "text";
    static BOOLEAN = "boolean";
    static NUMBER = "number";
  
    method = "GET";
    mode = "cors";
    credentials = "same-origin";
    headers = { "Content-Type": "application/json; charset=utf-8" };
    url = "";
    callback = null;
    type = "text";
    body = null;
    cache = HttpFactory.IF_CACHED;
  
    /**
     * sends an object and receives JSON as response.
     * Object param must follow { key : "value"} structure and
     * Callback param must be a method. callback also takes error as an argument.
     *
     * @param {String} url
     * @param {Object} searchData
     * @param {Function} callback
     */
  
    static getJSON(
      url,
      searchData,
      callback = null,
      useCache = HttpFactory.NO_CACHE
    ) {
      HttpFactory.setUpGET(url, searchData, "json", callback, useCache);
    }
  
    static getText(
      url,
      searchData,
      callback = null,
      useCache = HttpFactory.NO_CACHE
    ) {
      HttpFactory.setUpGET(url, searchData, "text", callback, useCache);
    }
  
    static getBoolean(
      url,
      searchData,
      callback = null,
      useCache = HttpFactory.NO_CACHE
    ) {
      HttpFactory.setUpGET(url, searchData, "boolean", callback, useCache);
    }
  
    static getNumber(
      url,
      searchData,
      callback = null,
      useCache = HttpFactory.NO_CACHE
    ) {
      HttpFactory.setUpGET(url, searchData, "number", callback, useCache);
    }
  
    static setUpGET(
      url,
      searchData,
      type,
      callback = null,
      useCache = HttpFactory.NO_CACHE
    ) {
      let http = new HttpFactory();
  
      if (callback === null) throw new Error("HttpFactory: callback is undefined.");
  
  
      
      if (typeof searchData === "object") {
        var get = "";
  
        if (Object.keys(searchData).length > 0) {
          for (const key in searchData) {
            get += `${key}=${searchData[key]}&`;
          }
        }
        http.url = url + (get.length > 0 ? http.cleanGet(get) : "");
        
  
      } else {
  
        http.url = url+"?"+searchData;
      }
  
      http.cache = useCache;
      http.callback = callback;
      http.type = type;
      http.fetchData(http.requestGet());
    }
  
    static getBlob(url, callback = null, useCache = HttpFactory.NO_CACHE) {
      let http = new HttpFactory();
  
      if (callback !== null) {
        http.url = url;
        http.callback = callback;
        this.headers = { "Content-Type": "image/*" };
        http.type = "blob";
        http.cache = useCache;
        http.fetchData(http.requestGet());
      } else {
        let error = "HttpFactory: callback is undefined.";
        http.callback({ error: true, status: error });
      }
    }
  
    static getArrayBuffer(url, callback = null, useCache = HttpFactory.NO_CACHE) {
      let http = new HttpFactory();
  
      if (callback !== null) {
        http.url = url;
        http.callback = callback;
        this.headers = { "Content-Type": "image/*" };
        http.type = "arraybuffer";
        http.cache = useCache;
        http.fetchData(http.requestGet());
      } else {
        let error = "HttpFactory: callback is undefined.";
        http.callback({ error: true, status: error });
      }
    }
  
    requestGet = () => {
      return new Request(this.url, {
        method: this.method,
        cache: this.cache,
        headers: { "Cache-Control": "max-age=5" },
        mode: this.cors,
        credentials: this.credentials,
      });
    };
  
    /**
     *
     * @param {String} url
     * @param {Object} searchData
     * @param {Function} callback
     */
    static postObject(url, searchData, callback = null, response = "json") {
      let http = new HttpFactory();
  
      if (callback !== null) {
        if (typeof searchData === "object") {
          try {
            http.body = JSON.stringify(searchData);
            http.url = url;
            http.callback = callback;
            http.headers = { "Content-Type": "application/json" };
            http.type = response;
            http.setMethod("POST");
  
            http.fetchData(http.requestPost());
          } catch (error) {
            http.callback({ error: true, status: error });
          }
        } else {
          let error =
            'HttpFactory: getJSON parameter 2 not an object. consider { key : "value" }';
          http.callback({ error: true, status: error });
        }
      } else {
        let error = "HttpFactory: callback is undefined.";
        http.callback({ error: true, status: error });
      }
    }
  
    static postJSON(url, json, callback = null, response = "json") {
      let http = new HttpFactory();
  
      if (callback === null)
        throw new Error("HttpFactory: callback is undefined.");
  
      if (typeof json === "string") {
        try {
          JSON.parse(json);
          http.body = json;
          http.url = url;
          http.callback = callback;
          http.headers = { "Content-Type": "application/json" };
          http.type = response;
          http.setMethod("POST");
  
          http.fetchData(http.requestPost());
        } catch (error) {
          http.callback({ error: true, status: error });
        }
      } else {
        let error =
          'HttpFactory: postJSON parameter 2 not a string. consider { "key" : "value" }';
        http.callback({ error: true, status: error });
      }
    }
  
    /**
     * It accepts HTMLFormElement ID as searchData and returns json.
     * Response can either be json or text. It assumes json as default if not specified.
     * @param {String} url
     * @param {String} searchData
     * @param {Function} callback
     * @param {String} response
     */
  
    static postForm(url, FormElement, callback = null, response = "json") {
      HttpFactory.setUpPost(url, new FormData(FormElement), callback, response);
    }
  
    static postFormData(url, FormData, callback, response = "json") {
      HttpFactory.setUpPost(url, FormData, callback, response);
    }
  
    static setUpPost(url, formData, callback = null, response = "json") {
      let http = new HttpFactory();
  
      if (callback === null)
        throw new Error("HttpFactory: callback is undefined.");
  
      if (typeof formData === "object") {
        try {
          http.setMethod("POST");
          http.body = formData;
          http.url = url;
          http.callback = callback;
          http.type = response;
          http.fetchData(http.requestPostForm());
        } catch (error) {
          callback({ error: true, status: error });
        }
      } else {
        let error =
          "HttpFactory: getJSON parameter 2 not a object. parse form target.";
        callback({ error: true, status: error });
      }
    }
  
    static syncDownloadData = (url, callback) => {
      let xml = new XMLHttpRequest();
      let calc = 0;
      xml.open("GET", url, true);
      xml.responseType = "blob";
  
      xml.onload = (e) => {
        console.log("downloaded");
        callback(xml.response);
      };
  
      xml.onerror = (e) => {
        console.log(e);
      };
      xml.onprogress = (e) => {
        console.log(xml.responseURL);
        console.log("progress");
        calc = Math.floor(e.loaded / e.total) * 100;
        callback(calc);
      };
  
      xml.send();
    };
  
    /**
     * 
     * @param {String} url The endpoint.
     * @param {FormData} formData The instance of FormData object
     * @param {Function} callback Fires the Percentage of uploaded data.
     */
    static syncUploadData = (url, formData, onProgress, onCompletion, onError) => {
      let xml = new XMLHttpRequest();
      let calc = 0;
      xml.open("POST", url, true);
  
      xml.upload.onload = (e) => {
        console.log("uploaded");
      };
  
      xml.onerror = (e) => {
        console.error("uploading error.", e);
        if (onError) {
          onError(e);        
        }
      };
  
      xml.upload.onprogress = (e) => {
          
            calc = Math.floor(e.loaded / e.total) * 100;  
            
            if (onProgress) {
              onProgress(calc);    
            }
      };
      xml.responseType ="json";

       xml.onload =  (e) => {
          if (xml.DONE && xml.status === 200) {
            if (onCompletion) {
              onCompletion(xml.response);        
            }
          }
      }
  
      xml.send(formData);
    };
  
    /**
     * 
     * @param {String} url The request end-point.
     * @param {String} evts The expecrted events from the server. It could be a string of array or string. To use the default event pass a null.
     * @param {Function} onSuccess The success callback when a data is received from the server. It uses a second parameter of the event name if a custom event was specified.
     * @param {Function} onError The error callback invoked whenever connection drops or an error occured and it takes the instance of the object and a bool arg to determine if stream is closed. 
     */
    static sse = (url, evts = [], onSuccess, onError) => {
  
      const evt = new EventSource(url);
  
      evt.addEventListener("open", ()=>{
  
        if(evts.length){
  
          if(Array.isArray(evts)){
            evts.forEach( name => {
              evt.addEventListener(name, e => onSuccess(e.data, name));
            });
          }else{
            evt.addEventListener(evts, e => onSuccess(e.data, evts));
          }
        }else{
  
          evt.onmessage = e => {
            onSuccess(e.data);
          };
        }
      });
  
      evt.onerror = e => {
        if(onError !== undefined) onError(evt, evt.CLOSED === e.target.readyState);
      }
  
      return evt;
    }
  
    objToForm = (obj) => {
      if (typeof obj === "object") {
        let form = new FormData();
  
        for (const key in obj) {
          form.append(key, obj[key]);
        }
        return form;
      }
      throw new Error(
        "HttpFactory Error: Invalid data argument, object required."
      );
    };
  
    requestPost = () => {
      let request = new Request(this.url, {
        method: this.method,
        body: this.body,
        headers: this.headers,
        mode: this.cors,
        credentials: this.credentials,
      });
      return request;
    };
  
    requestPostForm = () => {
      return new Request(this.url, {
        method: this.method,
        body: this.body,
        mode: this.cors,
        credentials: this.credentials,
      });
    };
  
    fetchData = (request) => {
      // console.log(request);
      fetch(request)
        .then((response) => {
          if (response.ok) {
            return this.getResponseByType(response);
          }
  
          throw new Error(response.statusText);
        })
        .then((data) => {
          // console.log(data);
          if (this.type === "json") {
            if (data.error !== undefined) {
              if (data.error === 1 || data.error === true) {
                this.callback(data, {error: true, status: data.status});
              } else {
                this.callback(
                  data,
                  {error: false, status: data.status},
                  false
                );
              }
            } else {
              
              this.callback(data, false);
            }
          } else {
            if (this.type === "boolean") {
              this.callback(data === "true" ? true : false, false);
            } else if (this.type === "number") {
              this.callback(parseInt(data), false);
            } else {
              this.callback(data, false);
            }
          }
        })
        .catch((err) => {
          this.callback(null, err.message);
        });
    };
  
    getResponseByType(response) {
      if (this.type === "json") {
        return response.json();
      } else if (this.type === "text") {
        return response.text();
      } else if (this.type === "boolean") {
        return response.text();
      } else if (this.type === "number") {
        return response.text();
      } else if (this.type === "blob") {
        return response.blob();
      } else if (this.type === "arraybuffer") {
        return response.arrayBuffer();
      }
    }
  
    setType(type) {
      this.type = type;
    }
  
    /**
     * method: String = POST|GET|PUT|DELETE
     */
  
    setMethod = (method) => {
      this.method = method.toUpperCase();
    };
  
    setCORS = (cors) => {
      this.cors = cors;
    };
  
    setBody = (body) => {
      this.body = body;
    };
  
    cleanGet = (data) => {
      return `${data.substring(0, data.length - 1)}`;
    };
  }
  
  
  /**
   * A wrapper that provides previously stored data in a IndexedDb and updates stored data using the fetch api.
   * @param {String} databaseName The database name.
   */
  export const FetchStore = (databaseName) => {
  
    let store = new IdbStore(databaseName);
  
    /**
     * It sends a post request data to the provided url.
     * 
     * @param {String} url The endpoint.
     * @param {String} data Json data e.g '{"name": "dj"}'
     * @param {Function} callback post result.
     * @param {ResponseType} responseType one of the properties of the ResponseType object.. Default is Json.
     */
    const postJson = (url, data, callback, responseType = ResponseType.Json) => {
  
      store.get(url, (sRes) => {
  
        if(sRes !== undefined){
          callback(sRes);
        }
  
        HttpFactory.postJSON(url, data, (res) => {
          store.setNew(url, res, sRes, () => callback(res));
        }, responseType);
  
      });
    };
  
      /**
     * It sends a post request data to the provided url.
     * 
     * @param {String} url The endpoint.
     * @param {String} data js Object data e.g {name: "dj"}
     * @param {Function} callback post result.
     * @param {ResponseType} responseType one of the properties of the ResponseType object.. Default is Json.
     */
    const post = (url, data, callback, responseType = ResponseType.Json) => {
  
      if (typeof data === "object") {
  
        store.get(url, (sRes) => {
        
          if(sRes !== undefined){
            callback(sRes);
          }
    
          HttpFactory.postObject(url, data, (res) => {
            store.setNew(url, res, sRes, () => callback(res));
          }, responseType);
    
        });
  
      } else {
        postJson(url, data, callback, responseType);
        console.warn("post data is not an object.");
      }
    };
    
      /**
     * It sends a post request data to the provided url using the multipart form content type.
     * 
     * @param {String} url The endpoint.
     * @param {String} formElement Form element e.g the e.target from the onsubmit event of a form.
     * @param {Function} callback post result.
     * @param {ResponseType} responseType one of the properties of the ResponseType object.. Default is Json.
     */
    const postForm =  (url, formElement, callback, responseType = ResponseType.Json) => {
  
  
      if(typeof formElement === 'object'){
         postFormData(url, new FormData(formElement), callback, responseType);
      }else{
        console.error("postForm() data is not a form element");
        callback(null);
      }  
      
    };
    
        /**
     * It sends a post request data to the provided url using the multipart form content type.
     * 
     * @param {String} url The endpoint.
     * @param {String} formData Form Data e.g the instance of the new FormData().
     * @param {Function} callback post result.
     * @param {ResponseType} responseType one of the properties of the ResponseType object. Default is JSON
     */
    const postFormData = async (url, formData, callback, responseType = ResponseType.Json)=>{
    
      store.get(url, (oRes) => {
  
        if(oRes !== undefined){
          callback(oRes);
        }
  
        HttpFactory.setUpPost(url, formData, (data) => {
          
            store.setNew(url, data, oRes, () => callback(data));
        }, responseType);
  
      });
    }
    /**
     * It sends a GET request to the provided endpoint and returns a text.
     * @param {String} url The endpoint.
     * @param {Function} callback store response.
     * @param {String | Object} data Js Object e.g {name: "dj"} or FormQuery instance or String e.g "name=ade&age=17".
     * @param {Cache} cache specifies if response should be cached. Default is NO-CACHE.
     */
    const getText = (url, callback, data = {}, cache = HttpFactory.NO_CACHE) => {
      return processGet(url, callback, cache, data, ResponseType.Text);
    };
    
      /**
     * It sends a GET request to the provided endpoint and returns a boolean.
     * @param {String} url The endpoint.
     * @param {Function} callback store response.
     * @param {String | Object} data Js Object e.g {name: "dj"} or FormQuery instance or String e.g "name=ade&age=17".
     * @param {Cache} cache specifies if response should be cached. Default is NO-CACHE.
     */
    const getBoolean = (url, callback, data = {}, cache = HttpFactory.NO_CACHE) => {
      return processGet(url, callback, cache, data, ResponseType.Boolean);
    };
    
      /**
     * It sends a GET request to the provided endpoint and returns a number.
     * @param {String} url The endpoint.
     * @param {Function} callback store response.
     * @param {String | Object} data Js Object e.g {name: "dj"} or FormQuery instance or String e.g "name=ade&age=17".
     * @param {Cache} cache specifies if response should be cached. Default is NO-CACHE.
     */
    const getNumber = (url, callback, data = {}, cache = HttpFactory.NO_CACHE) => {
      return processGet(url, callback, cache, data, ResponseType.Number);
    };
    
      /**
     * It sends a GET request to the provided endpoint and returns a blob.
     * @param {String} url The endpoint.
     * @param {Function} callback store response.
     * @param {String | Object} data Js Object e.g {name: "dj"} or FormQuery instance or String e.g "name=ade&age=17".
     * @param {Cache} cache specifies if response should be cached. Default is NO-CACHE.
     */
    const getBlob = (url, callback, data = {}, cache = HttpFactory.NO_CACHE) => {
      return processGet(url, callback, cache, data, ResponseType.Blob);
    };
  
      /**
     * It sends a GET request to the provided endpoint and returns an arraybuffer.
     * @param {String} url The endpoint.
     * @param {Function} callback store response.
     * @param {String | Object} data Js Object e.g {name: "dj"} or FormQuery instance or String e.g "name=ade&age=17".
     * @param {Cache} cache specifies if response should be cached. Default is NO-CACHE.
     */
    const getArrayBuffer = (url, callback, data = {},  cache = HttpFactory.NO_CACHE) => {
      return processGet(url, callback, cache, data, ResponseType.ArrayBuffer);
    };
  
      /**
     * It sends a GET request to the provided endpoint and returns Json.
     * @param {String} url The endpoint.
     * @param {Function} callback store response.
     * @param {String | Object} data Js Object e.g {name: "dj"} or FormQuery instance or String e.g "name=ade&age=17".
     * @param {Cache} cache specifies if response should be cached. Default is NO-CACHE.
     */
    const getJson = (url, callback, data = {}, cache = HttpFactory.NO_CACHE) => {
      return processGet(url,  callback, cache, data, ResponseType.Json);
    };
    
      /**
     * It sends a GET request to the provided endpoint and returns a text.
     * @param {String} url The endpoint.
     * @param {Function} callback store response.
     * @param {ResponseType} type one of the properties of the ResponseType object. Default is Json.
     * @param {String | Object} data Js Object e.g {name: "dj"} or FormQuery instance or String e.g "name=ade&age=17".
     * @param {Cache} cache specifies if response should be cached. Default is NO-CACHE.
     */
    const get = (url, callback, type = ResponseType.Json,  data = {}, cache = HttpFactory.NO_CACHE) => {
     
       processGet(url, callback, data, cache, type);
    };
    
    const processGet = (url, callback, data = {}, cache, type) => {
  
      store.get(url, (res)=>{
  
        if(res !== undefined){
          callback(res);
        }
    
        HttpFactory.setUpGET(
          url,
          data,
          type,
          (nRes) => {
            store.setNew(url, nRes, res, ()=> callback(nRes));
          },
          cache
        );
      });
    };
    
  
    return {
     
      get,
      getText,
      getJson,
      getBlob,
      getNumber,
      getArrayBuffer,
      getBoolean,
      post,
      postJson,
      postFormData,
      postForm,
      store
    };
  };
  
  export class IdbStore {
  
    #objectStoreName = "appStore";
    #keyPath = "url";
    #readMode = "readonly";
    #readWriteMode = "readwrite";
    #openRequest = null;
  
    constructor(dbName){
      this.dbName = dbName;
      this.#openRequest = window.indexedDB.open(dbName, 1);
      this.#openRequest.addEventListener("upgradeneeded", this.#onUpgradeNeeded);
      this.#openRequest.addEventListener("blocked", this.#onBlocked);
      this.#openRequest.addEventListener("success", this.#onRequestSucess);
      this.#openRequest.addEventListener("error", this.#onRequestError);
    }
  
    #onRequestError = (e) => {
      console.log("error", e);
    }
  
    #onRequestSucess = (e)=> {
        this.db = this.#openRequest.result;
    }
  
    #onUpgradeNeeded = (e) =>{
  
      console.log("upgraded needed.");
  
      var db = e.target.result;
  
      db.onversionchange = e => this.#onVersionChange(e);
  
      var objectStore = db.createObjectStore(this.#objectStoreName, {keyPath: this.#keyPath });
  
      objectStore.createIndex(this.#keyPath, this.#keyPath, {unique: true});
  
    }
  
  
    #onVersionChange = (e)=> {
      console.log("version change");
    }
  
    #onBlocked = (e)=> {
        console.log("blocked");
    }
  
    get = (url, callback) => {
  
      
        try {
          let oStore = this.db.transaction(this.#objectStoreName, this.#readMode).objectStore(this.#objectStoreName);
          oStore.index(this.#keyPath).get(url).onsuccess = (e) => {
              console.log(e.target.result)
              if(e.target.result !== undefined){
                callback(e.target.result.data);
              }else{
                callback(undefined);
              }
             
          }
        } catch (error) {
          console.error("idb get error "+error);
          callback(undefined);
        }
      
    }
  
    setNew = (url, data, oldData, callbak = null) => {
  
      if(JSON.stringify(data) === JSON.stringify(oldData)){
        return;
      }
  
      let oStore = this.db.transaction(this.#objectStoreName, this.#readWriteMode).objectStore(this.#objectStoreName);
      if(url !== undefined && url !== null && url !== '' ){
       
        let req = oStore.put({[this.#keyPath]: url, data: data});
        req.onerror = (e)=>{
          console.error("setting idb data error");
        };
  
        req.onsuccess = ()=>{
            if(callbak !== null) callbak();
        }
      }
    }
  
    set = (url, data, callbak = null) => {
      let oStore = this.db.transaction(this.#objectStoreName, this.#readWriteMode).objectStore(this.#objectStoreName);
      if(url !== undefined && url !== null && url !== '' ){
       
        let req = oStore.put({[this.#keyPath]: url, data: data});
        req.onerror = (e)=>{
          console.error("setting idb data error");
        };
  
        req.onsuccess = ()=>{
            if(callbak !== null) callbak();
        }
      }
    }
  
    has = (url, callback) => {
      this.get(url, (data) => {
        callback(data !== undefined);
      })
    }
  
  
  }
  
  /**
   * Http result response.
   */
  export const ResponseType = {
    Json: "json",
    Boolean: "boolean",
    Text: "text",
    Number: "number",
    Blob: "blob",
    ArrayBuffer: "arraybuffer",
  };
  
  export const Cache = {
     CACHE: "force-cache",
    NO_CACHE: "no-cache",
    IF_CACHED: "only-if-cached"
  }
  
  export class FormQuery {
    #query;
  
    constructor() {
      this.#query = "";
    }
  
    /**
     * Appends name value to a form object.
     * It returns a string in the form of name = value&.
     * <b>Note:<b> the build menthod of this object must be invoked after all name value had been appended.
     * @param {String} key 
     * @param {String} value 
     */
    append = (key, value) => {
      if (value.length === 0 || value === null || value === undefined) {
        value = "null";
      }
  
      this.#query += `${encodeURI(key)}=${encodeURI(value)}&`;
      return this;
    };
  
    /**
     * It builds the query and covert name value to a string.
     */
    build = () => {
      return this.#query.substr(0, this.#query.length - 1);
    };
  }  