window.extend = window.extend || {};

extend.get_today = function (format) {  //separator
    format = format ? format : 'yyyy年M月dd日';

    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1);
    var day = date.getDate();
    var time = undefined;
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    switch (format) {
        case 'yyyy年M月dd日':
            return year + "年" + parseInt(month) + "月" + parseInt(day) + "日";
    }
};

extend.get_lastday = function(m) {
    var y = new Date().getFullYear(), date;

    if(angular.isArray(m)){
        date = [];
        angular.forEach(m,function(val){
            val = parseInt(val) < 10 ? ('0' + val) : val;
            date.push(val + '月' + new Date(y, val, 0).getDate() + '日')
        });
    }else{
        m = parseInt(m) < 10 ? ('0' + m) : m;
        date = m + '月' + new Date(y, m, 0).getDate() + '日';
    }

    return date;
};
//---------------extend---------------

String.prototype.replace_all = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2); //g全局     
};

//---------------string---------------

Array.prototype.extract = function(keys) {
    var arr = [];
    if (keys.length) {
        var obj;
        for (var i = 0; i < this.length; i++) {
            obj = {};
            for (var j = 0; j < keys.length; j++) {
                if (this[i][keys[j]] == null || this[i][keys[j]] == 0 ||
                    typeof this[i][keys[j]] == "string" && this[i][keys[j]].trim().length == 0 ||
                    typeof this[i][keys[j]] == "number" && this[i][keys[j]] == 0) {
                    continue;
                }
                obj[keys[j]] = this[i][keys[j]];
            }

            if (!$.isEmptyObject(obj)) {
                arr.push(obj);
            }
        }
    }

    return arr;
};

Array.prototype.first = function() {
    if (this.length) {
        return this[0];
    } else {
        return undefined;
    }
};

Array.prototype.last = function () {
    if (this.length) {
        return this[this.length - 1];
    } else {
        return undefined;
    }
};

Array.prototype.find = function (predicate, match_val, return_keyOrdelete) {
    if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
    }

    var list = Object(this);
    var length = list.length >>> 0;
    var value;

    if (typeof predicate == 'function') {
        var thisArg = arguments[1];
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    }else if (typeof predicate == "string") {
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (value[predicate] == match_val) {
                switch (typeof return_keyOrdelete) {
                    case 'string':
                        return value[return_keyOrdelete || predicate];
                    case 'boolean':
                        if (return_keyOrdelete) {
                            list.splice(i, 1);
                            return true;
                        }
                        break;
                    default:
                        return value;  //找到后默认返回obj
                }
            }
        }
    }
};

Array.prototype.exist = function (e) {   //e可为string、number类型或等于null、undefined
    var exist = false;
    if (typeof e == "string") {
        var s = String.fromCharCode(2);
        exist = new RegExp(s + e + s).test(s + this.join(s) + s);
    } else {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == e) {
                exist = true;
                break;
            }
        }
    }

    return exist;
};
//---------------array---------------