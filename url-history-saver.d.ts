/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   url-history-saver.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../app-pouchdb/pouchdb.d.ts" />

declare namespace LogicElements {

  /**
   * An element that saves Request URL in the history and serves list of saved URLs.
   *
   * The API of this element can be called directly and it is event based.
   * You can either call `query()` or `store()` function or use corresponding
   * `url-history-query` and `url-history-store` custom events
   *
   * The `url-history-query` event expects the `q` property set on the `detail`
   * object. It will be passed to the `query()` function and result of calling this
   * function is set on detail's `result` property.
   *
   * ### Example
   *
   * ```javascript
   * var event = new CustomEvent('url-history-query', {
   *    detail: {
   *      q: 'http://mulesoft.com/path/'
   *    },
   *    cancelable: true,
   *    bubbles: true, // if not fired on window object
   *    composed: true // if fired in shaddow DOM
   * });
   * document.dispatchEvent(event);
   * ```
   *
   * The `url-history-store` expects to read a `value` property of the `detail`
   * object and it passes it to the `store()` function. Unlike the other event,
   * it doesn't adds promise to the details object.
   *
   * ### Example
   *
   * ```javascript
   * var event = new CustomEvent('url-history-store', {
   *    detail: {
   *      value: 'http://mulesoft.com/path/'
   *    },
   *    cancelable: true,
   *    bubbles: true, // if not fired on window object
   *    composed: true // if fired in shaddow DOM
   * });
   * document.dispatchEvent(event);
   * ```
   *
   * Both events are cancelled and propagation of the event is stopped. Therefore
   * the event should have to be dispatched with `caneclable` flag set to true.
   *
   * The element listens for events on the `window` object so it can be placed
   * anywhere in the DOM.
   *
   * ### Example
   *
   * ```html
   * <body>
   *  <url-history-saver></url-history-saver>
   * </body>
   * ```
   */
  class UrlHistorySaver extends Polymer.Element {
    readonly _db: PouchDB|null;
    connectedCallback(): void;
    disconnectedCallback(): void;

    /**
     * Handles `url-history-store` custom event and stores an URL in the
     * datastore.
     * The event is canceled and propagation is topped upon handling. The
     * event should be fired with `cancelable` flag set to `true`.
     *
     * It calls `store()` function with the `value` property of the `detail`
     * object as an attribute.
     *
     * It creates a new `result` property on the `detail` object which is a
     * result of calling `store()` function.
     */
    _handleStore(e: any): void;

    /**
     * It creates new entry if the URL wasn't already in the data store or
     * updates a `time` and `cnt` property of existing item.
     *
     * @param url A URL to store in the history store.
     * @returns Resolved promise to the insert response of PouchDB
     * object (`ok`, `id` and `rev` keys)
     */
    store(url: String|null): Promise<any>|null;

    /**
     * Handles the `url-history-query` custom event.
     * It cancels the event and prohibiits bubbling. Therefore the event should be
     * fired as a `cancelable`. It adds the `result` property to the `detail`
     * object which carries a Promise that will resolve to a list of PouchDB
     * documentnts. It is the same as result as for calling `query()` functiuon.
     *
     * The event must contain a `q` property with the query string that is passed
     * to the `query()` function.
     */
    _handleQuery(e: any): void;

    /**
     * Gets a list of maching URLs from the datastore.
     * List elements are carrying the `url` property with the full
     * URL and `cnt` property with number of times this URL has been updated in
     * the data store. `cnt` is used to sort the results.
     *
     * Additional properties are regular PouchDB properties like `_id` and `_rev`.
     *
     * @param q A string to search for. It result with entries that url
     * contains (not start with!) a `q`.
     * @returns Resolved promise to a list of history items.
     */
    query(q: String|null): Promise<any>|null;

    /**
     * A function used to sort query list items. It relays on two properties that
     * are set by query function on array entries: `_time` which is a timestamp of
     * the entry and `cnt` which is number of times the URL has been used.
     */
    _sortFunction(a: any, b: any): any;

    /**
     * Handles exceptions to log message ad throws the same exception
     */
    _handleException(e: any): void;
  }
}

interface HTMLElementTagNameMap {
  "url-history-saver": LogicElements.UrlHistorySaver;
}
