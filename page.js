/**
 * Pull down to refresh
 *
 * @author Zeno Li
 * @date   2016-08-01
 */
;(function ($,win,doc) {
    var page  = 2,
        empty = false;

    /**
     * @param {object}     options
     *        {string}     url       ajax request url
     *        {object}     params    other params except page
     *        {function}   getHtml   get the html string
     *        {function}   bindEvent bind event on these new DOM
     */
    function _pagination(options) {
        var defaults = {
            url: null,
            params: {
                page: page
            },
            getHtml:function () {

            },
            bindEvent: function () {

            }
        };
        defaults = $.extend(true, defaults, options);

        if(!defaults.url.length){
            throw new Error('url is empty');
        }

        $(win).on('scroll', debounce(function () {
            var clientHeight = win.screen.availHeight || win.innerHeight,
                scrollHeight = doc.documentElement.scrollHeight || doc.body.scrollHeight,
                scrolltop = doc.body.scrollTop;

            if(scrolltop + clientHeight >= scrollHeight - 50 && !empty){
                $.ajax({
                    url: defaults.url,
                    type: 'GET',
                    data: defaults.params,
                    success: function (response) {
                        if(response.error_code === 0) {
                            if (!response.data.length) {
                                $(win).off('scroll');
                                empty = true;
                                return false;
                            }

                            var html = defaults.getHtml(response.data);
                            $('.content-module').append(html);
                            defaults.params.page++;
                            defaults.bindEvent();
                        }
                    }
                });
            }
        }, 200));
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    window.Pagination = _pagination;
})(jQuery,window,document);