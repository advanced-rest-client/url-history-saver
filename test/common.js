var UrlHistoryHelper = {};

UrlHistoryHelper.fire = function(name, detail, node) {
  var event = new CustomEvent(name, {
    bubbles: true,
    composed: true,
    cancelable: true,
    detail: detail
  });
  (node || document).dispatchEvent(event);
  return event;
};
UrlHistoryHelper.insertData = function(urls) {
  urls = urls.map(function(url, i) {
    return {
      _id: url,
      cnt: 1,
      time: Date.now() + i
    };
  });
  var db = new PouchDB('url-history');
  return db.bulkDocs(urls);
};
/**
 * Deletes PouchDB database
 *
 * @return {Promise}
 */
UrlHistoryHelper.deleteDatabase = function() {
  return new Promise(function(resolve, reject) {
    var request = window.indexedDB.deleteDatabase('_pouch_url-history');
    request.onerror = function() {
      reject(new Error('Unable to delete _pouch_url-history database'));
    };
    request.onsuccess = function() {
      resolve();
    };
  });
};
