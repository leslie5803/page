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
