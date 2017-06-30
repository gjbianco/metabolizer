# metabolizer

Express middleware to expose meta information

### Usage

Can use the `app.use()` Express syntax to hook up metabolizer.

Example:

```js
app.use('/version', require('metabolizer')(['name', 'version']));
```

This exposes the `name` and `version` properties in `package.json` to the "/version" route. If you hit `<application URL>/version`, you will get a JSON object with those values.

If you do not pass in a list, it will return just a list by default.

### Notes

The values are determined at runtime. If the value somehow changes after startup, metabolizer WILL NOT use the new value. This is to keep the (already trivial) performance hit even smaller.

Currently, Metabolizer only works with `package.json` values. It does not work with general environment vars (potential future feature).