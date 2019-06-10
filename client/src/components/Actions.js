import moment     from 'moment';
import Dispatcher from './Dispatcher';
import Constants  from './constants/Constants';
import requester  from './requester';

var _lastStart;
var _lastEnd;
var _lastLimit = 100;
var _timeoutHandle;

var Actions = {
  getInsights: function (start, end, limit) {
    // if unspecified use previous values
    start = start || _lastStart;
    end = end || _lastEnd;
    limit = limit || _lastLimit;
    // store away current values to be referenced later
    _lastStart = start;
    _lastEnd = end;
    _lastLimit = limit;
    // dispatch and request
    Dispatcher.dispatch({ actionType: Constants.LOAD_INSIGHTS, start: start, end: end, numBubbles: limit });
    requester.fetchInsights(start, end, limit).then(insights => {
      Dispatcher.dispatch({ actionType: Constants.INSIGHTS_LOADED, insights: insights });
    });
  },

  getMinAndMax: function () {
    requester.fetchMinAndMax().then(minAndMax => {
      Dispatcher.dispatch({ actionType: Constants.MIN_AND_MAX, min: minAndMax.min, max: minAndMax.max });
    });
  },

  initialize: function () {
    requester.fetchMinAndMax().then(minAndMax => {
      Dispatcher.dispatch({ actionType: Constants.MIN_AND_MAX, min: minAndMax.min, max: minAndMax.max });
      this.getInsights(moment(minAndMax.max).subtract(1, 'day').unix()*1000, minAndMax.max);
    });
  },

  changeNumBubbles: function (newBubbles) {
    Dispatcher.dispatch({ actionType: Constants.LOAD_INSIGHTS, start: _lastStart, end: _lastEnd, numBubbles: newBubbles });
    // debounce triggering the network request
    _timeoutHandle && clearTimeout(_timeoutHandle);
    _timeoutHandle = setTimeout(function () {
      this.getInsights(null, null, newBubbles);
      _timeoutHandle = undefined;
    }.bind(this), 150);
  },

  loadArticlesForEntity: function (entity) {
    entity = typeof entity === 'string' ? entity : entity._id;
    Dispatcher.dispatch({ actionType: Constants.ENTITY_SELECTED, entity: entity});
    requester.fetchArticlesForEntity(entity, _lastStart, _lastEnd).then(articles => {
      Dispatcher.dispatch({ actionType: Constants.ARTICLES_LOADED, articles: articles, entity: entity });
    })
  },

  deselectEntity: function () {
    Dispatcher.dispatch({ actionType: Constants.ENTITY_SELECTED});
  }
}

module.exports= Actions;