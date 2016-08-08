# page
pull up to refresh

## Usage

```
Pagination({
    url: '/ajaxGetList',
    getTemplate
});
```

## options

|options|type|empty|default|description|
|:-----:|----|-----|-------|-----------|
|url|string|false|null|ajax request url,to get data from server|
params|object|true|-|if you need to send other params to the server, you can add to it.for example   ```Pagination({url:'ajaxGetList', params:{pcount: 20} })```|
getHtml|function|false|-|this function will be executed when getting data from server.You need to use it to get the html string|
bindEvent|function|true|-|add event listener on the page just added|
